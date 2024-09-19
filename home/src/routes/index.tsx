import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Product } from "~/components/Product";
import { products } from "../../../host/src/utils/constants";

export const useProductsLoader = routeLoader$(async () => {
  // const response = await fetch('https://fakestoreapi.com/products');
  // return (await response.json()) as ProductType[];
  return products;
});

export default component$(() => {
  const productsSignal = useProductsLoader();
  return (
    <div class="flex flex-wrap" style="justify-content: space-between">
      {productsSignal.value.map((p, key) => (
        <Product key={key} product={p} />
      ))}
    </div>
  );
});
