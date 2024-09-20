import { $, component$, useSignal } from "@builder.io/qwik";
import { Modal2 } from "./Modal";

export default component$(() => {
  const showModal = useSignal(false);
  const showContactModal = useSignal(false);

  const closeModal = $(() => {
    showModal.value = false;
  });

  const openModal = $(() => {
    showModal.value = true;
    console.log("CV header", showModal.value);
  });

  return (
    <header class="w-full bg-header py-2.5">
      <div class="container mx-auto flex justify-between">
        <div class="logo flex">
          <img
            src="https://demo.betby.games/static/betby-games-logo.svg"
            alt="Logo"
            height={40}
            class="w-full"
            width={64}
          />

          <div
            class="relative h-7 w-7 rounded-full bg-gray-500 flex items-center justify-center"
            onClick$={() => (showContactModal.value = true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              class="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M5.821 4.91c3.899-2.765 9.468-2.539 13.073.535c3.667 3.129 4.168 8.238 1.152 11.898c-2.841 3.447-7.965 4.583-12.231 2.805l-.233-.101l-4.374.931l-.04.006l-.035.007h-.018l-.022.005h-.038L3.022 21l-.021-.001l-.023.001l-.033-.003H2.91l-.022-.004l-.022-.002l-.035-.007l-.034-.005l-.016-.004l-.024-.005l-.049-.016l-.024-.005l-.011-.005l-.022-.007l-.045-.02l-.03-.012l-.011-.006l-.014-.006l-.031-.018l-.045-.024l-.016-.011l-.037-.026l-.04-.027l-.002-.004l-.013-.009l-.043-.04l-.025-.02l-.006-.007l-.056-.062l-.013-.014l-.011-.014l-.039-.056l-.014-.019l-.005-.01l-.042-.073l-.007-.012l-.004-.008l-.007-.012l-.014-.038l-.02-.042l-.004-.016l-.004-.01l-.017-.061l-.007-.018l-.002-.015l-.005-.019l-.005-.033l-.008-.042l-.002-.031l-.003-.01v-.016L2 20.022l.001-.036l.001-.023l.002-.053l.004-.025v-.019l.008-.035l.005-.034l.005-.02l.004-.02l.018-.06l.003-.013l1.15-3.45l-.022-.037C.969 12.45 1.97 7.806 5.592 5.078z"
              />
            </svg>

            {showContactModal.value && (
              <Modal2>
                <div
                  class="h-[300px]  mr-10 mt-10 bg-white text-black w-80"
                  onClick$={() => (showContactModal.value = false)}
                >
                  The card here
                  <button
                    class="close"
                    onClick$={() => (showContactModal.value = false)}
                  >
                    Close
                  </button>
                </div>
              </Modal2>
            )}
          </div>
        </div>
        <div class="language selector">
          <div onClick$={() => openModal()} class="bg-white">
            Select Lang
          </div>
          {showModal.value && (
            <Modal2>
              <div class="h-[300px] float-right mr-10 mt-10 bg-white text-black w-80">
                The card here
                <button class="close" onClick$={closeModal}>
                  Close
                </button>
              </div>
            </Modal2>
          )}
        </div>
      </div>
    </header>
  );
});
