import { component$, Slot } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Footer, Header } from '@qwik-microfrontends/ui';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="min-h-screen mt-20">
        <Slot />
      </main>
      <Footer />
    </>
  );
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
