/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig, type UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';

type PkgDep = Record<string, string>;
const { dependencies = {}, devDependencies = {} } = pkg as any as {
	dependencies: PkgDep;
	devDependencies: PkgDep;
	[key: string]: unknown;
};
errorOnDuplicatesPkgDeps(devDependencies, dependencies);

/**
 * Note that Vite normally starts from `index.html` but the qwikCity plugin makes start at `src/entry.ssr.tsx` instead.
 */
export default defineConfig((): UserConfig => {
	return {
		plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
		base: '/checkout/',
		// This tells Vite which dependencies to pre-build in dev mode.
		server: {
			headers: {
				// Don't cache the server response in dev mode
				'Cache-Control': 'public, max-age=0',
			},
		},
		preview: {
			headers: {
				// Do cache the server response in preview (non-adapter production build)
				'Cache-Control': 'public, max-age=600',
			},
		},
	};
});

// *** utils ***

/**
 * Function to identify duplicate dependencies and throw an error
 * @param {Object} devDependencies - List of development dependencies
 * @param {Object} dependencies - List of production dependencies
 */
function errorOnDuplicatesPkgDeps(devDependencies: PkgDep, dependencies: PkgDep) {
	let msg = '';
	// Create an array 'duplicateDeps' by filtering devDependencies.
	// If a dependency also exists in dependencies, it is considered a duplicate.
	const duplicateDeps = Object.keys(devDependencies).filter((dep) => dependencies[dep]);

	// include any known qwik packages
	const qwikPkg = Object.keys(dependencies).filter((value) => /qwik/i.test(value));

	// any errors for missing "qwik-city-plan"
	// [PLUGIN_ERROR]: Invalid module "@qwik-city-plan" is not a valid package
	msg = `Move qwik packages ${qwikPkg.join(', ')} to devDependencies`;

	if (qwikPkg.length > 0) {
		throw new Error(msg);
	}

	// Format the error message with the duplicates list.
	// The `join` function is used to represent the elements of the 'duplicateDeps' array as a comma-separated string.
	msg = `
    Warning: The dependency "${duplicateDeps.join(', ')}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;

	// Throw an error with the constructed message.
	if (duplicateDeps.length > 0) {
		throw new Error(msg);
	}
}
