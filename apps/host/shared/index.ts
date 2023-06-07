/**
 * This function is a hack to work around the fact that in dev mode the remote html is failing to prefix the base path.
 */
export const fixRemoteHTMLInDevMode = (
  rawHtml: string,
  base = '',
  isDev?: boolean
): { html: string; base: string } => {
  let html = rawHtml;
  if (isDev || import.meta.env.DEV) {
    html = html.replace(/q:base="\/(\w+)\/build\/"/gm, (match, child) => {
      base = '/' + child;
      // console.log('FOUND', base);
      return match;
    });
    html = html.replace(/="(\/src\/([^"]+))"/gm, (match, path) => {
      // console.log('REPLACE', path);
      return '="' + base + path + '"';
    });
    html = html.replace(/"\\u0002(\/src\/([^"]+))"/gm, (match, path) => {
      // console.log('REPLACE', path);
      return '"\\u0002' + base + path + '"';
    });
  }
  html = fixErroredHostDefinition(html, base);
  return { html, base };
};

const fixErroredHostDefinition = (html: string, base: string) =>
  html
    .replace(/ErroredHost/gm, `ErroredHost${base.replace('/', '')}`)
    .replace(/errored-host/gm, `errored-host-${base.replace('/', '')}`);
