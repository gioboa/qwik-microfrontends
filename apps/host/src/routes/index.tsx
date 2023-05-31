import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { CartCounter } from '@qwik-microfrontends/ui';
import { CART_QUANTITIES_CHANGED_EVENT } from 'shared/constants';
import { remotes } from '../../../../shared/remotes';
import RemoteMfe from '../components/remote-mfe/remote-mfe';

export default component$(() => {
  const cartQtySignal = useSignal(0);

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
        <CartCounter count={cartQtySignal.value} />
      </div>
      <RemoteMfe remote={remotes.home} removeLoader={true} />
    </>
  );
});
