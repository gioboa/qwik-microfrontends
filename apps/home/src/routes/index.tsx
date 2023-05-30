import { component$, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Button } from '@qwik-microfrontends/ui';

const productsLoader = routeLoader$(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  // console.log(await response.json());
  return [];
});

export default component$(() => {
  const productsSignal = productsLoader();
  const counterSignal = useSignal(0);
  return (
    <div>
      <a href="/checkout/payment/">/checkout/payment</a>
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
        text="I'm the home"
        onClick$={() => {
          counterSignal.value += 1;
          console.log('home!!');
        }}
      />
    </div>
  );
});
