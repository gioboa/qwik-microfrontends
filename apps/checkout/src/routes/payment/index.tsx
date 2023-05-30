import { component$, useContext, useSignal } from '@builder.io/qwik';
import { Button } from '@qwik-microfrontends/ui';
import { CheckoutContext } from '../layout';

export default component$(() => {
  const checkoutState = useContext(CheckoutContext);
  const counterSignal = useSignal(0);
  return (
    <div>
      <a href="/checkout/summary/">/checkout/summary/</a>
      {JSON.stringify(checkoutState.items)}
      <br />
      <br />
      <br />
      <br />
      <br />
      <span class="pl-4">{counterSignal.value}</span>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        text="Payment"
        onClick$={() => {
          // checkoutState.items = ['Solid'];
          counterSignal.value += 1;
          console.log('Payment!!');
        }}
      />
    </div>
  );
});
