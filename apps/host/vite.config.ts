import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikNxVite } from 'qwik-nx/plugins';
import { ServerOptions, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { remotes } from '../../shared/remotes';

let proxy: ServerOptions['proxy'] = {};
Object.values(remotes).forEach(({ name, url }) => {
  proxy![`^/${name}/.*`] = {
    target: url.replace(`${name}/`, ''),
    changeOrigin: true,
    rewrite: (path) =>
      path.indexOf(`/${name}/build/`) === 0
        ? path.replace(`/${name}`, '')
        : path,
  };
});

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/host',
  plugins: [
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/host/client',
      },
      ssr: {
        outDir: '../../dist/apps/host/server',
      },
    }),
    tsconfigPaths({ root: '../../' }),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
    proxy,
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
