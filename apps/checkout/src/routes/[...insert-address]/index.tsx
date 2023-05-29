import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Button } from '@qwik-microfrontends/ui';
import { CheckoutContext } from '../layout';

export default component$(() => {
  const location = useLocation();
  const checkoutState = useContext(CheckoutContext);
  return (
    <div>
      {JSON.stringify(location)}
      {JSON.stringify(checkoutState.items)}
      <Button text="I'm the test" onClick$={() => console.log('click!!')} />
    </div>
  );
});
