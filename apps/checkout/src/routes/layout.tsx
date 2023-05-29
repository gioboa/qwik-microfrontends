import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';

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

  return <Slot />;
});
