/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { renderToStream, RenderToStreamOptions } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';

const base = '/home/build/';

export default function (opts: RenderToStreamOptions) {
  const url = new URL(opts.serverData!.url);
  return renderToStream(<Root />, {
    manifest,
    base,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: 'en-us',
      ...opts.containerAttributes,
    },
    prefetchStrategy: {
      implementation: {
        linkInsert: null,
        workerFetchInsert: null,
        prefetchEvent: 'always',
      },
    },
    containerTagName: 'html',
    qwikLoader: {
      include: url.searchParams.get('loader') ? 'never' : 'auto',
    },
  });
}
