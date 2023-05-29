import { component$, useContext } from '@builder.io/qwik';
import { Button } from '@qwik-microfrontends/ui';
import { CheckoutContext } from '../layout';

export default component$(() => {
  const checkoutState = useContext(CheckoutContext);
  return (
    <div>
      {JSON.stringify(checkoutState.items)}
      <Button text="Summary" onClick$={() => console.log('Summary!!')} />
    </div>
  );
});
