import { component$ } from '@builder.io/qwik';

type Props = {
  count: number;
};

export const CartCounter = component$<Props>(({ count }) => {
  return (
    <a
      href="/checkout/summary/"
      class="flex items-center text-white w-[170px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="margin: auto"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <span class="px-2 text-lg">Cart ({count})</span>
    </a>
  );
});
