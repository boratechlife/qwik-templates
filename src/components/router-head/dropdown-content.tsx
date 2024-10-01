import { component$ } from "@builder.io/qwik";

export const DropDownContent = component$(() => {
  return (
    <div class="bt703 top-[calc(100%_+_8px)] left-0 w-[360px] z-20  absolute max-w-max box-border">
      <div
        data-simplebar="init"
        class="bt383 bt706 bt707 bt705 text-[rgb(77,77,77)] w-[360px] max-w-max bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] box-border max-h-[380px] overflow-hidden overflow-y-auto rounded-[12px] pt-7 pl-5 pr-4 pb-7"
        data-editor-id="subHeaderDropDown"
      >
        <div
          class="simplebar-wrapper overflow-hidden w-inherit h-inherit max-w-inherit max-h-inherit m-[-28px_-16px_-28px_-20px]"
          style="margin: -28px -16px -28px -20px;"
        >
          <div class="simplebar-height-auto-observer-wrapper box-border h-full w-full max-w-[1px] relative float-left max-h-[1px] overflow-hidden z-[-1] p-0 m-0 pointer-events-none">
            <div class="simplebar-height-auto-observer box-border block opacity-0 absolute top-0 left-0 h-[1000%] w-[1000%] min-h-[1px] min-w-[1px] overflow-hidden pointer-events-none z-[-1]"></div>
          </div>
          <div class="simplebar-mask absolute overflow-hidden p-0 m-0 left-0 top-0 bottom-0 right-0 w-auto h-auto z-0">
            <div
              class="simplebar-offset box-border resize-none absolute top-0 left-0 bottom-0 right-0 p-0 m-0 overflow-auto"
              style="right: 0px; bottom: 0px;"
            >
              <div
                class="simplebar-content-wrapper box-border relative block max-h-full scrollbar-none"
                tabIndex={0}
                role="region"
                aria-label="scrollable content"
                style="height: auto; overflow: hidden;"
              >
                <div
                  class="simplebar-content"
                  style="padding: 28px 16px 28px 20px;"
                >
                  <div class="bt708 text-sm font-semibold leading-5 tracking-[0.28px]">
                    <div class="bt709 cursor-pointer flex relative box-border items-center pr-4">
                      <div class="bt710 flex mr-12">
                        <div
                          class="bt258 relative inline-block"
                          style="width: 24px; height: 24px;"
                        >
                          <img
                            src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/INJSSTT.svg"
                            alt=""
                            height="24"
                            width="24"
                            class="bt259"
                          />
                        </div>
                      </div>
                      <div>
                        Injustice 2
                        <span
                          class="bt711 text-[rgba(77,77,77,0.7)] p-[2px_6px] text-xs bg-[rgba(77,77,77,0.1)] ml-2 rounded-[10px]"
                          data-editor-id="horizontalNavigationCategoryTotal"
                        >
                          <span>9</span>
                        </span>
                      </div>
                      <div
                        class="bt255 bt714 bt712 text-inherit flex transition-all duration-300 items-center justify-center rotate-0 top-1 right-0 opacity-50 absolute"
                        style="width: 16px; height: 16px;"
                      >
                        <svg
                          width="16"
                          height="16"
                          class="fill-current"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      class=""
                      style="height: 0px; overflow: hidden; display: none; transition: height 0.25s;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="simplebar-placeholder"
            style="width: 360px; height: 80px;"
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-horizontal"
          style="visibility: hidden;"
        >
          <div
            class="simplebar-scrollbar"
            style="width: 0px; display: none;"
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-vertical"
          style="visibility: hidden;"
        >
          <div
            class="simplebar-scrollbar"
            style="height: 0px; display: none;"
          ></div>
        </div>
      </div>
    </div>
  );
});
