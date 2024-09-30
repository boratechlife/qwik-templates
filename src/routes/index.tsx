import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="flex-1 w-full h-full flex p-4 relative box-border min-h-[calc(100vh-96px)] flex-col">
        <div class="bt220 mb-4">
          <div
            class="bt223 text-[#4d4d4d] flex text-2xl font-bold leading-8 items-center"
            data-editor-id="blockTitle"
          >
            <svg
              class="bt225 bt222"
              data-cy="sport-e-fighting-b"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style="fill: currentcolor; color: inherit; width: auto; height: 32px;"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 10.4884V3.74884C18 3.55024 17.921 3.35977 17.7803 3.21933C17.6397 3.0789 17.4489 3 17.25 3H15.75C15.5511 3 15.3603 3.0789 15.2197 3.21933C15.079 3.35977 15 3.55024 15 3.74884V10.6271C15.24 10.5377 15.4938 10.4908 15.75 10.4884H18ZM24 14.9815C24 14.1871 23.6839 13.4252 23.1213 12.8635C22.5587 12.3017 21.7956 11.9861 21 11.9861H15.7407C15.6435 11.9861 15.5471 12.0053 15.4573 12.0424C15.3674 12.0796 15.2857 12.1341 15.217 12.2028C15.1482 12.2714 15.0936 12.353 15.0564 12.4427C15.0192 12.5324 15 12.6286 15 12.7257C14.9963 13.0206 15.0513 13.3134 15.1618 13.5869C15.2723 13.8604 15.4361 14.1093 15.6437 14.3192C15.8513 14.529 16.0985 14.6956 16.3711 14.8093C16.6436 14.923 16.9361 14.9815 17.2315 14.9815H18.8796C19.3333 14.9815 19.5 15.1479 19.5 15.3606V16.1186C19.4976 16.216 19.4579 16.3087 19.3889 16.3775C19.32 16.4464 19.2271 16.4861 19.1296 16.4884C17.0463 16.5994 16.1204 17.6441 14.6296 19.8814L14.3333 20.3251C14.3063 20.3661 14.2713 20.4014 14.2304 20.4287C14.1896 20.4561 14.1437 20.4751 14.0954 20.4845C14.0472 20.494 13.9975 20.4938 13.9493 20.4839C13.9011 20.474 13.8554 20.4546 13.8148 20.4268L13.1481 20.02C13.0665 19.9622 13.0103 19.8751 12.9914 19.7769C12.9724 19.6788 12.9921 19.5771 13.0463 19.4931L13.3426 19.0493C13.9603 18.0522 14.7041 17.1387 15.5556 16.3313C15.1502 16.2097 14.7754 16.0034 14.4561 15.7261C14.1368 15.4487 13.8803 15.1067 13.7037 14.7227C13.3861 14.8881 13.0341 14.9768 12.6759 14.9815H11.2963C10.7411 14.9804 10.2063 14.7728 9.79629 14.3991C9.38626 14.7728 8.85145 14.9804 8.2963 14.9815H6.75C6.49383 14.9792 6.24003 14.9322 6 14.8428V18.4946C6.00101 20.0831 6.63381 21.6061 7.75926 22.7288L9 23.9676V27H15V21C15 19.3431 16.3431 18 18 18H24V14.9815ZM22.5 5.2188V10.7658C22.0212 10.5791 21.5138 10.4759 21 10.4607H19.5V5.2188C19.5 5.02019 19.579 4.82972 19.7197 4.68929C19.8603 4.54885 20.0511 4.46995 20.25 4.46995H21.75C21.9489 4.46995 22.1397 4.54885 22.2803 4.68929C22.421 4.82972 22.5 5.02019 22.5 5.2188ZM6.75 13.4838H8.25926C8.45817 13.4838 8.64894 13.4049 8.78959 13.2645C8.93024 13.1241 9.00926 12.9336 9.00926 12.735V6.74422C9.00926 6.54562 8.93024 6.35514 8.78959 6.21471C8.64894 6.07427 8.45817 5.99538 8.25926 5.99538H6.75C6.65151 5.99538 6.55398 6.01475 6.46299 6.05238C6.37199 6.09001 6.28931 6.14517 6.21967 6.21471C6.15003 6.28425 6.09478 6.3668 6.05709 6.45765C6.0194 6.54851 6 6.64588 6 6.74422V12.735C6 12.9336 6.07902 13.1241 6.21967 13.2645C6.36032 13.4049 6.55109 13.4838 6.75 13.4838ZM12.7593 13.4838H11.2963C11.0974 13.4838 10.9066 13.4049 10.766 13.2645C10.6253 13.1241 10.5463 12.9336 10.5463 12.735V5.24653C10.5463 5.04793 10.6253 4.85746 10.766 4.71702C10.9066 4.57658 11.0974 4.49769 11.2963 4.49769H12.7593C12.9582 4.49769 13.1489 4.57658 13.2896 4.71702C13.4302 4.85746 13.5093 5.04793 13.5093 5.24653V12.735C13.5093 12.9336 13.4302 13.1241 13.2896 13.2645C13.1489 13.4049 12.9582 13.4838 12.7593 13.4838ZM16 21C16 19.8954 16.8954 19 18 19H26C27.1046 19 28 19.8954 28 21V29C28 30.1046 27.1046 31 26 31H18C16.8954 31 16 30.1046 16 29V21ZM18 29V27.9304L20.0996 24.0641C20.2062 23.8709 20.267 23.7038 20.2822 23.5627C20.2974 23.4141 20.305 23.2321 20.305 23.0167C20.305 22.9201 20.3012 22.8199 20.2936 22.7159C20.2936 22.6045 20.2746 22.5079 20.2366 22.4262C20.1985 22.3445 20.1415 22.2776 20.0654 22.2256C19.9893 22.1662 19.879 22.1365 19.7345 22.1365C19.5595 22.1365 19.4188 22.1848 19.3123 22.2813C19.2134 22.3779 19.1639 22.519 19.1639 22.7047V23.351H18V22.727C18 22.4893 18.0456 22.2665 18.1369 22.0585C18.2282 21.8505 18.3537 21.6685 18.5135 21.5125C18.6656 21.3565 18.8482 21.234 19.0612 21.1448C19.2742 21.0483 19.5025 21 19.7459 21C20.0502 21 20.3089 21.0557 20.5219 21.1671C20.7425 21.2711 20.9251 21.416 21.0696 21.6017C21.2065 21.7874 21.3054 21.9991 21.3663 22.2368C21.4347 22.4745 21.469 22.727 21.469 22.9944C21.469 23.1876 21.4652 23.351 21.4576 23.4847C21.45 23.611 21.4347 23.7335 21.4119 23.8524C21.3891 23.9712 21.3511 24.0901 21.2978 24.2089C21.2446 24.3278 21.1723 24.4726 21.081 24.6435L19.3693 27.8635H21.469V29H18ZM24.2769 29V27.8189H21.9605V26.7493L23.6379 21.0669H24.8703L23.1244 26.7493H24.2769V24.4875H25.4409V26.7493H26V27.8189H25.4409V29H24.2769Z"
              ></path>
            </svg>
            eFighting
          </div>
        </div>
        <div class="w-max flex box-border whitespace-nowrap mb-2 relative">
          <div class="flex z-3  left-[-53.0469px]">
            <div class="bt703 top-[calc(100%_+_8px)] left-0 w-[360px] z-10 absolute max-w-max box-border">
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
                        class="simplebar-content-wrapper box-border relative block  max-h-full scrollbar-none"
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
            <div
              class="bt239 bt242 bt241 text-[#4d4d4d] cursor-pointer h-8 flex pr-8 relative text-sm bg-[#e3e8eb] shadow-none box-border transition-all duration-500 items-center font-semibold leading-4 select-none mr-2 rounded-[18px]"
              data-editor-id="pillButton"
            >
              <div class="bt249 flex-1 w-full overflow-hidden relative ml-3">
                <div class="bt251 w-full inline-block z-1 whitespace-nowrap">
                  All
                </div>
              </div>
              <div
                class="bt252 text-[rgba(77,77,77,0.5)] p-[2px_6px] text-xs bg-[rgba(77,77,77,0.1)] font-semibold leading-4 ml-1 rounded-[12px] tracking-[0.3px]"
                data-editor-id="pillButtonPin"
              >
                3
              </div>
              <div
                class="bt255 bt256 bt254 text-inherit flex transition-all duration-300 items-center justify-center rotate-0 top-2 right-2 absolute w-4 h-4"
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
          </div>
        </div>
      </div>

      {/* <div class="grid  grid-cols-4 mt-4">
        <div class="h-[204px] relative ltr align-top">
          <div class="text-[#4d4d4d] w-full border border-transparent opacity-100 px-2 pt-2 pb-0 bg-[#e3e8eb] shadow-none box-border min-h-full border-[#e3e8eb] rounded-lg">
            <div class="flex flex-col relative text-[10px] px-2">
              <div class="flex-1 text-[#4d4d4d] h-4 flex overflow-hidden relative text-xs box-border text-left break-all leading-4">
                <div class="bt2593 bt3172 bt2584 w-full leading-4 text-[rgba(77,77,77,0.5)]  flex text-xs items-center font-semibold antialiased">
                  <span class="bt2594">
                    <svg
                      class="bt2595"
                      data-cy="sport-e-fighting-b"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style="fill: currentcolor; color: inherit; width: auto; height: 16px;"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 10.4884V3.74884C18 3.55024 17.921 3.35977 17.7803 3.21933C17.6397 3.0789 17.4489 3 17.25 3H15.75C15.5511 3 15.3603 3.0789 15.2197 3.21933C15.079 3.35977 15 3.55024 15 3.74884V10.6271C15.24 10.5377 15.4938 10.4908 15.75 10.4884H18ZM24 14.9815C24 14.1871 23.6839 13.4252 23.1213 12.8635C22.5587 12.3017 21.7956 11.9861 21 11.9861H15.7407C15.6435 11.9861 15.5471 12.0053 15.4573 12.0424C15.3674 12.0796 15.2857 12.1341 15.217 12.2028C15.1482 12.2714 15.0936 12.353 15.0564 12.4427C15.0192 12.5324 15 12.6286 15 12.7257C14.9963 13.0206 15.0513 13.3134 15.1618 13.5869C15.2723 13.8604 15.4361 14.1093 15.6437 14.3192C15.8513 14.529 16.0985 14.6956 16.3711 14.8093C16.6436 14.923 16.9361 14.9815 17.2315 14.9815H18.8796C19.3333 14.9815 19.5 15.1479 19.5 15.3606V16.1186C19.4976 16.216 19.4579 16.3087 19.3889 16.3775C19.32 16.4464 19.2271 16.4861 19.1296 16.4884C17.0463 16.5994 16.1204 17.6441 14.6296 19.8814L14.3333 20.3251C14.3063 20.3661 14.2713 20.4014 14.2304 20.4287C14.1896 20.4561 14.1437 20.4751 14.0954 20.4845C14.0472 20.494 13.9975 20.4938 13.9493 20.4839C13.9011 20.474 13.8554 20.4546 13.8148 20.4268L13.1481 20.02C13.0665 19.9622 13.0103 19.8751 12.9914 19.7769C12.9724 19.6788 12.9921 19.5771 13.0463 19.4931L13.3426 19.0493C13.9603 18.0522 14.7041 17.1387 15.5556 16.3313C15.1502 16.2097 14.7754 16.0034 14.4561 15.7261C14.1368 15.4487 13.8803 15.1067 13.7037 14.7227C13.3861 14.8881 13.0341 14.9768 12.6759 14.9815H11.2963C10.7411 14.9804 10.2063 14.7728 9.79629 14.3991C9.38626 14.7728 8.85145 14.9804 8.2963 14.9815H6.75C6.49383 14.9792 6.24003 14.9322 6 14.8428V18.4946C6.00101 20.0831 6.63381 21.6061 7.75926 22.7288L9 23.9676V27H15V21C15 19.3431 16.3431 18 18 18H24V14.9815ZM22.5 5.2188V10.7658C22.0212 10.5791 21.5138 10.4759 21 10.4607H19.5V5.2188C19.5 5.02019 19.579 4.82972 19.7197 4.68929C19.8603 4.54885 20.0511 4.46995 20.25 4.46995H21.75C21.9489 4.46995 22.1397 4.54885 22.2803 4.68929C22.421 4.82972 22.5 5.02019 22.5 5.2188ZM6.75 13.4838H8.25926C8.45817 13.4838 8.64894 13.4049 8.78959 13.2645C8.93024 13.1241 9.00926 12.9336 9.00926 12.735V6.74422C9.00926 6.54562 8.93024 6.35514 8.78959 6.21471C8.64894 6.07427 8.45817 5.99538 8.25926 5.99538H6.75C6.65151 5.99538 6.55398 6.01475 6.46299 6.05238C6.37199 6.09001 6.28931 6.14517 6.21967 6.21471C6.15003 6.28425 6.09478 6.3668 6.05709 6.45765C6.0194 6.54851 6 6.64588 6 6.74422V12.735C6 12.9336 6.07902 13.1241 6.21967 13.2645C6.36032 13.4049 6.55109 13.4838 6.75 13.4838ZM12.7593 13.4838H11.2963C11.0974 13.4838 10.9066 13.4049 10.766 13.2645C10.6253 13.1241 10.5463 12.9336 10.5463 12.735V5.24653C10.5463 5.04793 10.6253 4.85746 10.766 4.71702C10.9066 4.57658 11.0974 4.49769 11.2963 4.49769H12.7593C12.9582 4.49769 13.1489 4.57658 13.2896 4.71702C13.4302 4.85746 13.5093 5.04793 13.5093 5.24653V12.735C13.5093 12.9336 13.4302 13.1241 13.2896 13.2645C13.1489 13.4049 12.9582 13.4838 12.7593 13.4838ZM16 21C16 19.8954 16.8954 19 18 19H26C27.1046 19 28 19.8954 28 21V29C28 30.1046 27.1046 31 26 31H18C16.8954 31 16 30.1046 16 29V21ZM18 29V27.9304L20.0996 24.0641C20.2062 23.8709 20.267 23.7038 20.2822 23.5627C20.2974 23.4141 20.305 23.2321 20.305 23.0167C20.305 22.9201 20.3012 22.8199 20.2936 22.7159C20.2936 22.6045 20.2746 22.5079 20.2366 22.4262C20.1985 22.3445 20.1415 22.2776 20.0654 22.2256C19.9893 22.1662 19.879 22.1365 19.7345 22.1365C19.5595 22.1365 19.4188 22.1848 19.3123 22.2813C19.2134 22.3779 19.1639 22.519 19.1639 22.7047V23.351H18V22.727C18 22.4893 18.0456 22.2665 18.1369 22.0585C18.2282 21.8505 18.3537 21.6685 18.5135 21.5125C18.6656 21.3565 18.8482 21.234 19.0612 21.1448C19.2742 21.0483 19.5025 21 19.7459 21C20.0502 21 20.3089 21.0557 20.5219 21.1671C20.7425 21.2711 20.9251 21.416 21.0696 21.6017C21.2065 21.7874 21.3054 21.9991 21.3663 22.2368C21.4347 22.4745 21.469 22.727 21.469 22.9944C21.469 23.1876 21.4652 23.351 21.4576 23.4847C21.45 23.611 21.4347 23.7335 21.4119 23.8524C21.3891 23.9712 21.3511 24.0901 21.2978 24.2089C21.2446 24.3278 21.1723 24.4726 21.081 24.6435L19.3693 27.8635H21.469V29H18ZM24.2769 29V27.8189H21.9605V26.7493L23.6379 21.0669H24.8703L23.1244 26.7493H24.2769V24.4875H25.4409V26.7493H26V27.8189H25.4409V29H24.2769Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="bt2596 bt3173 h-4 flex overflow-hidden text-xs break-all items-center leading-4 tracking-[0.03em]">
                    Injustice 2
                    <svg
                      class="bt2597"
                      data-cy="ic-rounded-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      style="fill: currentcolor; color: inherit; width: auto; height: 8px;"
                    >
                      <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                    </svg>
                    Supervillain
                  </span>
                </div>
                <div class="flex-1 text-[#4d4d4d] h-4 flex relative text-xs box-border text-left break-all leading-4">
                  <div class="bt2583">
                    <div class="bt2586 bt2587 flex-none ml-0 mr-2">
                      <span
                        class="bt2604"
                        data-tip="Favourites"
                        data-for="global"
                        style="height: 16px;"
                      >
                        <svg
                          data-cy="favorite"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          style="fill: currentcolor; color: rgb(77, 77, 77); width: auto; height: 16px;"
                        >
                          <path d="M7.76043 2.16184C7.84134 1.94605 8.15866 1.94605 8.23957 2.16184L9.578 5.73142C9.61341 5.82584 9.70513 5.88993 9.80944 5.89314L13.753 6.01428C13.9914 6.0216 14.0895 6.31184 13.9011 6.45253L10.7847 8.77979C10.7023 8.84135 10.6672 8.94505 10.6963 9.04146L11.7951 12.6859C11.8616 12.9062 11.6048 13.0856 11.4075 12.9568L8.14304 10.8255C8.05669 10.7691 7.94331 10.7691 7.85696 10.8255L4.5925 12.9568C4.39516 13.0856 4.13844 12.9062 4.20486 12.6859L5.3037 9.04146C5.33277 8.94505 5.29773 8.84135 5.2153 8.77979L2.09891 6.45253C1.91052 6.31184 2.00858 6.0216 2.24698 6.01428L6.19056 5.89314C6.29487 5.88993 6.38659 5.82584 6.422 5.73142L7.76043 2.16184Z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href=""
                class="text-[#4d4d4d] border-none cursor-pointer flex p-[8px_0_12px_8px] bg-none transition-all duration-200 ease-in-out font-normal border-[#f9fafb] rounded-md flex-col no-underline"
              >
                <div class="bt2576 gap-1 h-4 flex justify-between pointer-events-none">
                  <div class="bt2577 text-[rgb(11,162,247)] text-xs font-semibold leading-4 whitespace-nowrap tracking-[0.24px] align-middle">
                    <div
                      class="bt2614 bt3243"
                      data-editor-id="eventCardStatusLabel"
                    >
                      Started
                    </div>
                  </div>
                  <div class="bt2578"></div>
                  <div class="bt2579 bt2580 flex-none ml-0 mr-2">
                    <svg
                      data-cy="ic-live-simple"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="#FF4E4E"
                      xmlns="http://www.w3.org/2000/svg"
                      style="display: block; fill: rgb(255, 78, 78); color: rgb(255, 78, 78); width: auto; height: 16px;"
                    >
                      <path d="M12.9628 3.20912C12.6766 2.93029 12.2125 2.93029 11.9263 3.20912C11.6401 3.48794 11.6401 3.94001 11.9263 4.21883C12.436 4.71538 12.8404 5.30487 13.1163 5.95365C13.3921 6.60242 13.5341 7.29777 13.5341 8C13.5341 8.70223 13.3921 9.39758 13.1163 10.0464C12.8404 10.6951 12.436 11.2846 11.9263 11.7812C11.6401 12.06 11.6401 12.5121 11.9263 12.7909C12.2125 13.0697 12.6766 13.0697 12.9628 12.7909C13.6087 12.1617 14.121 11.4148 14.4706 10.5928C14.8201 9.77079 15 8.88975 15 8C15 7.11025 14.8201 6.22921 14.4706 5.40719C14.121 4.58517 13.6087 3.83827 12.9628 3.20912Z"></path>
                      <path d="M10.0422 5.11529C10.3284 4.83647 10.7925 4.83647 11.0787 5.11529C11.4708 5.49724 11.7818 5.95068 11.994 6.44972C12.2062 6.94876 12.3155 7.48363 12.3155 8.02379C12.3155 8.56395 12.2062 9.09881 11.994 9.59786C11.7818 10.0969 11.4708 10.5503 11.0787 10.9323C10.7925 11.2111 10.3284 11.2111 10.0422 10.9323C9.75595 10.6535 9.75595 10.2014 10.0422 9.92257C10.2982 9.67322 10.5012 9.37719 10.6397 9.0514C10.7783 8.72561 10.8496 8.37642 10.8496 8.02379C10.8496 7.67115 10.7783 7.32197 10.6397 6.99617C10.5012 6.67038 10.2982 6.37436 10.0422 6.12501C9.75595 5.84618 9.75595 5.39412 10.0422 5.11529Z"></path>
                      <path d="M8.05198 9.51147C8.90891 9.51147 9.60359 8.83477 9.60359 8.00002C9.60359 7.16526 8.90891 6.48856 8.05198 6.48856C7.19504 6.48856 6.50036 7.16526 6.50036 8.00002C6.50036 8.83477 7.19504 9.51147 8.05198 9.51147Z"></path>
                      <path d="M6.05604 5.11529C5.76981 4.83647 5.30574 4.83647 5.0195 5.11529C4.62741 5.49724 4.31638 5.95068 4.10418 6.44972C3.89198 6.94876 3.78276 7.48363 3.78276 8.02379C3.78276 8.56395 3.89198 9.09881 4.10418 9.59786C4.31638 10.0969 4.62741 10.5503 5.0195 10.9323C5.30574 11.2111 5.76981 11.2111 6.05604 10.9323C6.34228 10.6535 6.34228 10.2014 6.05604 9.92257C5.80007 9.67322 5.59702 9.37719 5.45848 9.0514C5.31995 8.72561 5.24865 8.37642 5.24865 8.02379C5.24865 7.67115 5.31995 7.32197 5.45848 6.99617C5.59702 6.67038 5.80007 6.37436 6.05604 6.12501C6.34228 5.84618 6.34228 5.39412 6.05604 5.11529Z"></path>
                      <path d="M3.03717 3.20912C3.3234 2.93029 3.78748 2.93029 4.07371 3.20912C4.35994 3.48794 4.35994 3.94001 4.07371 4.21883C3.56397 4.71538 3.15962 5.30487 2.88375 5.95365C2.60788 6.60242 2.46589 7.29777 2.46589 8C2.46589 8.70223 2.60788 9.39758 2.88375 10.0464C3.15962 10.6951 3.56397 11.2846 4.07371 11.7812C4.35994 12.06 4.35994 12.5121 4.07371 12.7909C3.78748 13.0697 3.3234 13.0697 3.03717 12.7909C2.39131 12.1617 1.87898 11.4148 1.52944 10.5928C1.1799 9.77078 1 8.88975 1 8C1 7.11025 1.1799 6.22921 1.52944 5.40719C1.87898 4.58517 2.39131 3.83827 3.03717 3.20912Z"></path>
                    </svg>
                  </div>
                </div>

                <div class="flex mt-2 pointer-events-none">
                  <div class="flex-1 font-semibold">
                    <div
                      class="bt2623 flex items-center"
                      style="margin-bottom: 8px;"
                    >
                      <div class="bt2627 bt2624 h-6 flex relative text-sm items-center leading-6">
                        <div
                          class="bt2544 bt2629 flex-none block mr-2"
                          style="width: 24px; height: 24px;"
                        >
                          <img
                            src="https://d1bvoel1nv172p.cloudfront.net/blurred_images/medium/2376409257651351552.png"
                            alt=""
                            height="24"
                            width="24"
                            class="bt2545"
                          />
                        </div>
                        <div
                          class="bt2628"
                          style="height: 24px; line-height: 24px;"
                        >
                          Atom
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bt2626 gap-2 flex-none text-inherit grid text-sm box-border font-semibold place-items-center grid-flow-col grid-rows-1 ">
                    <div
                      data-editor-id="widgetScore"
                      class="bt2632 text-[#4d4d4d] border border-[#4d4d4d] border-opacity-10 h-6 flex p-1 text-sm min-w-[32px] bg-[#4d4d4d] bg-opacity-5 box-border items-center font-semibold leading-4 rounded-lg justify-center"
                    >
                      <div class="bt2637 bt2633 bt3293">
                        <span class="bt2639">1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex mt-0 pointer-events-none">
                  <div class="flex-1 font-semibold">
                    <div
                      class="bt2623 flex items-center"
                      style="margin-bottom: 8px;"
                    >
                      <div class="bt2627 bt2624 h-6 flex relative text-sm items-center leading-6">
                        <div
                          class="bt2544 bt2629 flex-none block mr-2"
                          style="width: 24px; height: 24px;"
                        >
                          <img
                            src="https://d1bvoel1nv172p.cloudfront.net/blurred_images/medium/2376409257651351552.png"
                            alt=""
                            height="24"
                            width="24"
                            class="bt2545"
                          />
                        </div>
                        <div
                          class="bt2628"
                          style="height: 24px; line-height: 24px;"
                        >
                          Atom
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bt2626 gap-2 flex-none text-inherit grid text-sm box-border font-semibold place-items-center grid-flow-col grid-rows-1 ">
                    <div
                      data-editor-id="widgetScore"
                      class="bt2632 text-[#4d4d4d] border border-[#4d4d4d] border-opacity-10  flex p-1 text-sm min-w-[32px] bg-[#4d4d4d] bg-opacity-5 box-border items-center font-semibold leading-4 rounded-lg justify-center"
                    >
                      <div class="bt2637 bt2633 bt3293">
                        <span class="bt2639">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="text-[#4d4d4d] pl-2 m-0 z-40 relative box-border text-left font-semibold">
                <div class="w-full h-4 opacity-50 overflow-hidden text-xs box-border leading-4 rounded">
                  Winner
                </div>
              </div>

              <div class="flex items-end">
                <div class="flex-1 relative mt-2">
                  <div class="w-[calc(100%+8px)] -m-1 flex flex-wrap">
                    <div class="flex-grow-0 max-w-[50%] basis-1/2 p-1 box-border font-semibold">
                      <div class="text-[#4d4d4d] border border-[#f9fafb] cursor-pointer h-10 flex px-2 overflow-hidden relative bg-[#f9fafb] box-border transition-all duration-200 ease-in-out font-semibold leading-[30px] rounded-lg justify-between">
                        <div
                          class="bt2893 flex-1 text-[rgba(77,77,77,0.5)] flex text-xs mask-image-[linear-gradient(90deg,rgba(0,0,0,1)80%,rgba(0,0,0,0)100%)] transition-colors duration-100 ease-in-out items-center leading-[1.2] pr-1"
                          data-editor-id="outcomePlateName"
                        >
                          <span class="bt2895">1</span>
                        </div>
                        <div class="bt2637 bt2896 flex-none text-xs self-center text-right leading-[1.2]">
                          <span class="bt2639">6.2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-[#4d4d4d] w-8 cursor-pointer h-10 flex bg-[#f9fafb] transition-all duration-300 ease-in-out items-center font-semibold ml-2 border-[#f9fafb] rounded-lg justify-center">
                  123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
