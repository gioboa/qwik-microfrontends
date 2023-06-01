import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { Form, routeAction$, z, zod$ } from '@builder.io/qwik-city';
import { Button, CartCounter } from '@qwik-microfrontends/ui';
import { CART_QUANTITIES_CHANGED_EVENT } from 'shared/constants';
import { remotes } from '../../../../shared/remotes';
import RemoteMfe from '../components/remote-mfe/remote-mfe';

export const useAction = routeAction$(
  () => {
    return { status: 'success' };
  },
  zod$({
    firstName: z.string(),
  })
);

export default component$(() => {
  const cartQtySignal = useSignal(0);
  const action = useAction();

  useOnDocument(
    CART_QUANTITIES_CHANGED_EVENT,
    $((event) => {
      console.log('CART_QUANTITIES_CHANGED_EVENT');
      cartQtySignal.value += (event as CustomEvent).detail.qty;
    })
  );

  return (
    <>
      <div class="flex mt-12" style="justify-content: flex-end">
        <Form action={action} class="flex items-center">
          <p class="text-white pr-4">{action.value?.status}</p>
          <input type="text" name="firstName" />
          <Button
            type="submit"
            class="h-[52px] items-center mx-4"
            text="Use Action Test"
          />
        </Form>
        <CartCounter count={cartQtySignal.value} />
      </div>
      <RemoteMfe remote={remotes.home} removeLoader={true} />
    </>
  );
});
