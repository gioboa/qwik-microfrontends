import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type Props = {
  text?: string;
  type?: "button" | "reset" | "submit";
  class?: string;
  onClick$: QRL<() => void>;
};

export const Button = component$<Props>(
  ({ text = "", type = "button", class: _class, onClick$ }) => {
    return (
      <button
        type={type}
        class={`mb-2 mr-2 flex rounded-lg 
                bg-blue-700 px-5 py-2.5 text-sm 
                font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 
                dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${_class}`}
        onClick$={onClick$}
      >
        {text}
      </button>
    );
  },
);
