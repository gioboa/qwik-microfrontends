import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { Footer, Header } from '@qwik-microfrontends/ui';

interface CheckoutStore {
  items: string[];
}

export const CheckoutContext = createContextId<CheckoutStore>('Todos');

export default component$(() => {
  useContextProvider(
    CheckoutContext,
    useStore<CheckoutStore>({
      items: ['Qwik', 'Microfrontends'],
    })
  );

  return (
    <>
      <Header />
      <main class="min-h-screen mt-18 pt-10 bg-slate-900">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
