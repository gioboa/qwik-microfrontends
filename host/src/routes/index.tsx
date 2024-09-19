import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { CartCounter } from "~/components/CartCounter";
import RemoteMfe from "~/components/RemoteMfe";
import { CART_QUANTITIES_CHANGED_EVENT } from "../utils/constants";
import { remotes } from "../utils/remotes";

export default component$(() => {
  const cartQtySignal = useSignal(0);

  useOnDocument(
    CART_QUANTITIES_CHANGED_EVENT,
    $((event) => {
      console.log("CART_QUANTITIES_CHANGED_EVENT");
      cartQtySignal.value += (event as CustomEvent).detail.qty;
    }),
  );

  return (
    <>
      <div class="mt-12 flex" style="justify-content: flex-end">
        <CartCounter count={cartQtySignal.value} />
      </div>
      <RemoteMfe remote={remotes.home} removeLoader={true} />
    </>
  );
});
