import { component$, useContext } from '@builder.io/qwik';
import { Button } from '@qwik-microfrontends/ui';
import { CheckoutContext } from '../layout';

export default component$(() => {
  const checkoutState = useContext(CheckoutContext);
  return (
    <div>
      <a href="/checkout/summary/">/checkout/summary/</a>
      {JSON.stringify(checkoutState.items)}
      <Button
        text="Payment"
        onClick$={() => {
          console.log('Payment!!');
          checkoutState.items = [...checkoutState.items, 'Solid'];
        }}
      />
    </div>
  );
});
