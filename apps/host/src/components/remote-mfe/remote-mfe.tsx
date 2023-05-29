import {
  component$,
  SSRStream,
  SSRStreamBlock,
  StreamWriter,
} from '@builder.io/qwik';
import { type RemoteData } from '../../../../../shared/remotes';

export interface Props {
  remote: RemoteData;
  removeLoader?: boolean;
}

export default component$(({ remote, removeLoader = false }: Props) => {
  const url = remote.url;
  const decoder = new TextDecoder();
  const getSSRStreamFunction =
    (remoteUrl: string) => async (stream: StreamWriter) => {
      const reader = (
        await fetch(remoteUrl, { headers: { accept: 'text/html' } })
      ).body!.getReader();
      let fragmentChunk = await reader.read();
      let base = '';
      while (!fragmentChunk.done) {
        const rawHtml = decoder.decode(fragmentChunk.value);
        const fixedHtmlObj = fixRemoteHTMLInDevMode(
          rawHtml,
          base,
          removeLoader
        );
        base = fixedHtmlObj.base;
        stream.write(fixedHtmlObj.html);
        fragmentChunk = await reader.read();
      }
    };

  return (
    <SSRStreamBlock>
      <SSRStream>{getSSRStreamFunction(url)}</SSRStream>
    </SSRStreamBlock>
  );
});

/**
 * This function is a hack to work around the fact that in dev mode the remote html is failing to prefix the base path.
 */
export function fixRemoteHTMLInDevMode(
  rawHtml: string,
  base = '',
  removeLoader: boolean
): { html: string; base: string } {
  let html = rawHtml;
  if (import.meta.env.DEV) {
    html = html.replace(/q:base="\/(\w+)\/build\/"/gm, (match, child) => {
      base = '/' + child;
      console.log('FOUND', base);
      return match;
    });
    html = html.replace(/="(\/src\/([^"]+))"/gm, (match, path) => {
      console.log('REPLACE', path);
      return '="' + base + path + '"';
    });
    html = html.replace(/"\\u0002(\/src\/([^"]+))"/gm, (match, path) => {
      console.log('REPLACE', path);
      console.log('REPLACE2', '"\\u0002' + base + path + '"');
      return '"\\u0002' + base + path + '"';
    });
  }
  html = fixErroredHostDefinition(html, base);
  if (removeLoader) {
    html = html.replace(
      /<script id="qwikloader">[\s\S]*?<\/script\b[^>]*>/gm,
      ''
    );
    html = html.replace(
      '<script>window.qwikevents.push',
      '<script>window.qwikevents||=[];window.qwikevents.push'
    );
  }
  return { html, base };
}

const fixErroredHostDefinition = (html: string, base: string) =>
  html
    .replace(/ErroredHost/gm, `ErroredHost${base.replace('/', '')}`)
    .replace(/errored-host/gm, `errored-host-${base.replace('/', '')}`);
