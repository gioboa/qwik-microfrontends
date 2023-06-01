import { component$ } from '@builder.io/qwik';

type Props = {
  text?: string;
  type?: 'button' | 'reset' | 'submit';
  class?: string;
  onClick$?: () => void;
};

export const Button = component$<Props>(
  ({ text = '', type = 'button', class: _class, onClick$ }) => {
    return (
      <button
        type={type}
        class={`flex text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                focus:outline-none dark:focus:ring-blue-800 ${_class}`}
        onClick$={() => {
          onClick$ && onClick$();
        }}
      >
        {text}
      </button>
    );
  }
);
