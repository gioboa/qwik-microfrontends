import { component$, Slot } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <Slot />;
});

export const head: DocumentHead = {
  title: 'Qwik Microfrontends',
  meta: [
    {
      name: 'description',
      content: 'Qwik Microfrontends description',
    },
  ],
};
