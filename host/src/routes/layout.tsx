import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export default component$(() => {
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

export const head: DocumentHead = {
  title: "Qwik Microfrontends",
  meta: [
    {
      name: "description",
      content: "Qwik Microfrontends description",
    },
  ],
};
