import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';

import globalStyles from './global.scss?inline';

export default component$(() => {
  useStyles$(globalStyles);
  return (
    <QwikCityProvider>
      <div />
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
