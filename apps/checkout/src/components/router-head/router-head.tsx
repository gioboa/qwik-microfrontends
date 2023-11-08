import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const { url } = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m, key) => (
        <meta key={key} {...m} />
      ))}

      {head.links.map((l, key) => (
        <link key={key} {...l} />
      ))}

      {head.styles.map((s, key) => (
        <style key={key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
