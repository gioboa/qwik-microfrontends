import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Button } from '@qwik-microfrontends/ui';

const productsLoader = routeLoader$(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  console.log(await response.json());

  return [];
});

export default component$(() => {
  const productsSignal = productsLoader();
  return (
    <div>
      <a href="/home/test">testtttt</a>
      {JSON.stringify(productsSignal.value)}
      <Button text="I'm the home" onClick$={() => console.log('click!!')} />
    </div>
  );
});
