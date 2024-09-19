import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

interface CheckoutStore {
  items: string[];
}

export const CheckoutContext = createContextId<CheckoutStore>("Todos");

export default component$(() => {
  useContextProvider(
    CheckoutContext,
    useStore<CheckoutStore>({
      items: ["Qwik", "Microfrontends"],
    }),
  );

  return (
    <>
      <Header />
      <main class="mt-18 min-h-screen bg-slate-900 pt-10">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
