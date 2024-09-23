import { $, component$, useSignal } from "@builder.io/qwik";
import { Modal2 } from "./Modal";
import { MaterialSymbolsCloseRounded } from "./Icons";

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

  const closeContactModal = $(() => {
    showContactModal.value = false;
    console.log("CV header", showContactModal.value);
  });

  const openContactModal = $(() => {
    showContactModal.value = true;
    console.log("CV header", showContactModal.value);
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

          <div class="relative h-7 w-7 rounded-full bg-gray-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              onClick$={openContactModal}
            >
              <path
                fill="#ffffff"
                d="M5.821 4.91c3.899-2.765 9.468-2.539 13.073.535c3.667 3.129 4.168 8.238 1.152 11.898c-2.841 3.447-7.965 4.583-12.231 2.805l-.233-.101l-4.374.931l-.04.006l-.035.007h-.018l-.022.005h-.038L3.022 21l-.021-.001l-.023.001l-.033-.003H2.91l-.022-.004l-.022-.002l-.035-.007l-.034-.005l-.016-.004l-.024-.005l-.049-.016l-.024-.005l-.011-.005l-.022-.007l-.045-.02l-.03-.012l-.011-.006l-.014-.006l-.031-.018l-.045-.024l-.016-.011l-.037-.026l-.04-.027l-.002-.004l-.013-.009l-.043-.04l-.025-.02l-.006-.007l-.056-.062l-.013-.014l-.011-.014l-.039-.056l-.014-.019l-.005-.01l-.042-.073l-.007-.012l-.004-.008l-.007-.012l-.014-.038l-.02-.042l-.004-.016l-.004-.01l-.017-.061l-.007-.018l-.002-.015l-.005-.019l-.005-.033l-.008-.042l-.002-.031l-.003-.01v-.016L2 20.022l.001-.036l.001-.023l.002-.053l.004-.025v-.019l.008-.035l.005-.034l.005-.02l.004-.02l.018-.06l.003-.013l1.15-3.45l-.022-.037C.969 12.45 1.97 7.806 5.592 5.078z"
              />
            </svg>

            {showContactModal.value && (
              <Modal2>
                <div class="relative bg-[#f9f9f9] rounded-lg px-2 pt-3 mt-16 ml-20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-[296px]  h-auto box-border text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                  <button
                    class="close absolute z-50 right-2 top-3"
                    onClick$={closeContactModal}
                  >
                    <MaterialSymbolsCloseRounded class="h-5 w-5" />
                  </button>
                  <div class="   text-black w-full relative max-w-full px-4 pb-6 box-border">
                    <div class="text-[#1e313a] text-[18px] leading-[27px] font-semibold mb-6">
                      Contact Form
                    </div>

                    <div class="my-4 mt-4 mb-2 text-[rgba(42,63,76,0.5)] uppercase">
                      Name
                    </div>
                    <input class="border border-[#eaeaea] rounded box-border h-8 w-full px-2 outline-none transition duration-500 flex items-center text-[12px] font-semibold text-[#4a4a4a] appearance-none" />

                    <div class="my-4 mt-4 mb-2 text-[rgba(42,63,76,0.5)] uppercase">
                      Email
                    </div>
                    <input class="border border-[#eaeaea] rounded box-border h-8 w-full px-2 outline-none transition duration-500 flex items-center text-[12px] font-semibold text-[#4a4a4a] appearance-none" />

                    <div class="my-4 mt-4 mb-2 text-[rgba(42,63,76,0.5)] uppercase">
                      Message
                    </div>
                    <textarea class="border h-[80px] border-[#eaeaea] rounded box-border  w-full px-2 outline-none transition duration-500 flex items-center text-[12px] font-semibold text-[#4a4a4a] appearance-none"></textarea>

                    <button class="w-full h-10 border-none text-white text-[14px] font-semibold uppercase rounded-full bg-[#0821ff] transition duration-500 outline-none mt-[16px]">
                      SEND A MESSAGE
                    </button>
                  </div>
                </div>
              </Modal2>
            )}
          </div>
        </div>
        <div class="language selector">
          <div
            class="ml-4 flex items-center h-8 bg-[#2a3f4c] rounded-full px-2 pr-[10px] text-[12px] leading-4 font-semibold text-white cursor-pointer"
            onClick$={() => openModal()}
          >
            <img
              data-v-3cbba768=""
              src="https://demo.betby.games/static/flags/en.svg"
              alt="ENGLISH"
              height="24"
              width="24"
              class="header-lang__img mr-2 rounded-full overflow-hidden"
            />
            <span data-v-3cbba768="">en</span>
          </div>

          {showModal.value && (
            <Modal2>
              <div class="relative bg-[#f9f9f9] rounded-lg px-2 pt-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-auto h-auto box-border text-[12px] font-semibold leading-6 float-right mr-10 mt-10 text-[#4a4a4a] whitespace-normal">
                <button
                  class="close absolute  right-2 top-3"
                  onClick$={closeModal}
                >
                  <MaterialSymbolsCloseRounded class="h-5 w-5" />
                </button>
                <div class="  w-[240px]">
                  <div class="text-[#1e313a] text-[18px] leading-[27px] font-semibold mb-6">
                    Contact Form
                  </div>
                  <div class="overflow-y-auto max-h-[320px]">
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>

                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                    <div class="flex justify-start items-center px-4 mb-2 w-inherit">
                      <div class="w-8 h-8 rounded-full overflow-hidden bg-white flex justify-center items-center mr-2 border-2 border-transparent shadow-[0_2px_5px_1px_rgba(0,0,0,0.05)]">
                        <img
                          data-v-67f83f45=""
                          data-v-3d797d4c=""
                          height="24"
                          width="24"
                          class="w-6 h-6 rounded-full"
                          src="https://demo.betby.games/static/flags/en.svg"
                          alt="ENGLISH"
                        />
                      </div>
                      <div class="text-[12px] font-semibold leading-6 text-[#4a4a4a] whitespace-normal">
                        English
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal2>
          )}
        </div>
      </div>
    </header>
  );
});
