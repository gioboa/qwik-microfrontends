import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="h-screen bg-slate-900 py-12 sm:py-16 lg:py-20">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-semibold text-white">Summary</h1>
        </div>

        <div class="mx-auto mt-8 max-w-2xl md:mt-12">
          <div class="bg-white shadow">
            <div class="px-4 py-6 sm:px-8 sm:py-10">
              <div class="flow-root">
                <ul class="-my-8">
                  <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div class="shrink-0">
                      <img
                        class="h-24 w-24 max-w-full rounded-lg object-cover"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>

                    <div class="relative flex flex-1 flex-col justify-between">
                      <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div class="pr-8 sm:pr-5">
                          <p class="text-base font-semibold text-gray-900">
                            Nike Air Max 2019
                          </p>
                          <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                            36EU - 4US
                          </p>
                        </div>

                        <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                            $259.00
                          </p>

                          <div class="sm:order-1">
                            <div class="mx-auto flex h-8 items-stretch text-gray-600">
                              <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                -
                              </button>
                              <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                1
                              </div>
                              <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                        >
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                              class=""
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div class="shrink-0">
                      <img
                        class="h-24 w-24 max-w-full rounded-lg object-cover"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>

                    <div class="relative flex flex-1 flex-col justify-between">
                      <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div class="pr-8 sm:pr-5">
                          <p class="text-base font-semibold text-gray-900">
                            Nike Air Max 2019
                          </p>
                          <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                            36EU - 4US
                          </p>
                        </div>

                        <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                            $259.00
                          </p>

                          <div class="sm:order-1">
                            <div class="mx-auto flex h-8 items-stretch text-gray-600">
                              <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                -
                              </button>
                              <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                1
                              </div>
                              <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                        >
                          <svg
                            class="block h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                              class=""
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-400">Subtotal</p>
                  <p class="text-lg font-semibold text-gray-900">$399.00</p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-400">Shipping</p>
                  <p class="text-lg font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">
                  <span class="text-xs font-normal text-gray-400">USD</span>{' '}
                  408.00
                </p>
              </div>

              <div class="mt-6 text-center">
                <a
                  href="/checkout/payment/"
                  class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Payment
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
