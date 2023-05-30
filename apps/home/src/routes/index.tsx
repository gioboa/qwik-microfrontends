import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Product } from '@qwik-microfrontends/ui';
import { products } from 'shared/constants';

const productsLoader = routeLoader$(async () => {
  // const response = await fetch('https://fakestoreapi.com/products');
  // return (await response.json()) as ProductType[];
  return products;
});

export default component$(() => {
  const productsSignal = productsLoader();
  return (
    <div class="flex flex-wrap" style="justify-content: space-between">
      {productsSignal.value.map((p) => (
        <Product product={p} />
      ))}
    </div>
  );
});
