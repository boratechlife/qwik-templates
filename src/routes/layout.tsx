import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import BaseHeader from "~/components/router-head/BaseHeader";
import TopHeader from "~/components/router-head/TopHeader";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <section>
      <BaseHeader></BaseHeader>
      <TopHeader />
      <Slot />

      <div class="left-0 right-0 bottom-0 h-full fixed pointer-events-none spt-bet-slip">
        <div class="box-border break-keep bt618 bt627 tap-highlight-transparent top-0 left-0 right-0 overflow-hidden absolute bottom-0">
          <div class="box-border break-keep tap-highlight-transparent w-[320px] bottom-[-120px] m-0 mx-[4px] absolute right-0 bt620 bt628">
            <div class="transition-all duration-300 ease-in-out opacity-100 translate-y-0 box-border break-keep tap-highlight-transparent left-0 right-0 bottom-[120px] absolute bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-shadow-none rounded-t-[6px] pointer-events-auto z-[101]">
              <div class="transition-all bt648 bt652 duration-300 ease-in-out translate-y-0 box-border break-keep tap-highlight-transparent">
                <div class="transition-[height] duration-300 ease-in-out will-change-[height] box-border break-keep tap-highlight-transparent h-auto bt655">
                  <div
                    class="bt659 text-white cursor-pointer h-[56px] flex px-[16px] z-[1] relative bg-[#0B4DF7] box-border items-center rounded-t-[6px] justify-between"
                    data-editor-id="betslipHeader"
                  >
                    <div class="bt661 flex-1 flex text-[16px] min-w-0 items-center font-semibold">
                      <div class="bt662 w-[32px] h-[32px] mr-[8px]">
                        <svg
                          data-cy="ic-betslip"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          style="fill: currentcolor; color: rgb(255, 255, 255); width: auto; height: 32px;"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.125 2C6.84683 2 5 3.8804 5 6.2V25.8C5 28.1196 6.84683 30 9.125 30H22.875C25.1532 30 27 28.1196 27 25.8V6.2C27 3.8804 25.1532 2 22.875 2H9.125ZM11.5 21C10.6716 21 10 21.6716 10 22.5C10 23.3284 10.6716 24 11.5 24H20.5C21.3284 24 22 23.3284 22 22.5C22 21.6716 21.3284 21 20.5 21H11.5ZM10 16.5C10 15.6716 10.6716 15 11.5 15H20.5C21.3284 15 22 15.6716 22 16.5C22 17.3284 21.3284 18 20.5 18H11.5C10.6716 18 10 17.3284 10 16.5ZM11.5 9C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12H20.5C21.3284 12 22 11.3284 22 10.5C22 9.67157 21.3284 9 20.5 9H11.5Z"
                          ></path>
                        </svg>
                      </div>
                      <span class="bt656 overflow-hidden text-[16px] !important mr-[4px] text-ellipsis">
                        Betslip
                      </span>
                      <svg
                        class="bt657 fill-current flex-none w-[16px] cursor-pointer h-[16px] opacity-50 ml-[4px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                      </svg>
                    </div>
                    <div class="bt664 flex basis-[126px] items-center justify-center">
                      <div
                        class="bt668 text-white text-[10px] !important text-right font-bold leading-[12px] mr-[8px] uppercase"
                        data-editor-id="quickBetSwitcherLabel"
                      >
                        Quick Bet
                      </div>
                      <div
                        class="bt670 bt665 cursor-pointer h-[24px] inline-block z-[1] relative shadow-none transition-background duration-300 border-2 border-white  rounded-[60px] w-[48px] bg-transparent  box-border"
                        data-editor-id="quickBetSwitcher"
                      >
                        <div
                          data-editor-id="quickBetSwitcherButton"
                          class="bt674 bt667 w-[18px] h-[18px] flex z-[2] absolute  shadow-none transition-transform duration-300 items-center rounded-full justify-center bg-white text-blue-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M8.225 21.775q-.2-.2-.225-.5q-.025-.3.15-.525L13 14l-8.1-.775q-.65-.05-.863-.675q-.212-.625.288-1.05L14.7 2.2q.225-.225.538-.213q.312.013.537.238q.2.2.225.5q.025.3-.15.525L11 10l8.1.775q.65.05.862.675q.213.625-.287 1.05L9.3 21.8q-.225.225-.537.212q-.313-.012-.538-.237Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="bt677 overflow-hidden relative"
                    style="max-height: 735px;"
                  >
                    <div>
                      <div class="bt685 flex flex-col">
                        <div
                          class="bt686 flex z-[3] overflow-auto flex-col overscroll-contain scroll-touch"
                          style="max-height: 695px;"
                        >
                          <div class="bt716 bt687 bt700 bt689 bt702 flex overflow-hidden flex-col min-h-[162px] max-h-[162px]">
                            <div class="bt717 text-[#4d4d4d] flex pt-[24px] px-[16px] border-t border-t-[rgba(77,77,77,0.1)] box-border flex-col min-w-full opacity-100 pointer-events-auto  bt694 bt695 bt697">
                              <div class="bt718 bt719 flex items-center justify-center h-[58px] mb-[30px]">
                                <svg
                                  width="48"
                                  height="48"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="bt720 min-w-[48px] mr-[16px]"
                                  data-editor-id="emptyBetSlipIcon"
                                >
                                  <g clip-path="url(#clip0_19728_23370)">
                                    <path
                                      opacity="0.3"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                      fill="#0B4DF7"
                                    ></path>
                                    <path
                                      opacity="0.7"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M39.1395 42.6234C35.0096 45.9848 29.7401 48 24 48C18.3243 48 13.1088 46.0298 9 42.7361V14H12C12 15.6569 13.3431 17 15 17C16.6569 17 18 15.6569 18 14H21C21 15.6569 22.3431 17 24 17C25.6569 17 27 15.6569 27 14H30C30 15.6569 31.3431 17 33 17C34.6569 17 36 15.6569 36 14H39.1395V42.6234ZM16.5 24C15.6716 24 15 24.6716 15 25.5C15 26.3284 15.6716 27 16.5 27H31.5C32.3284 27 33 26.3284 33 25.5C33 24.6716 32.3284 24 31.5 24H16.5ZM16.5 31C15.6716 31 15 31.6716 15 32.5C15 33.3284 15.6716 34 16.5 34H27.5C28.3284 34 29 33.3284 29 32.5C29 31.6716 28.3284 31 27.5 31H16.5Z"
                                      fill="#0B4DF7"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_19728_23370">
                                      <rect
                                        width="48"
                                        height="48"
                                        fill="white"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <div class="bt721 flex flex-col">
                                  <div class="bt722 text-[14px] font-semibold leading-[18px]">
                                    Place your bets
                                  </div>
                                  <div
                                    class="bt723 text-[12px] mt-[8px] font-semibold leading-[16px]"
                                    style="opacity: 0.7;"
                                  >
                                    Your selections will appear in this area
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="bt725 relative">
                              <div class="bt729 px-[16px] pb-[8px]">
                                <div class="bt739 text-[#4d4d4d] w-full flex text-[12px] box-border items-center font-semibold justify-between">
                                  <div class="bt741 flex-1 cursor-pointer flex p-[12px] relative bg-[rgba(77,77,77,0.1)] items-center rounded-[8px] justify-center">
                                    <svg
                                      class="bt742 box-border break-keep tap-highlight-transparent"
                                      data-cy="ic-settings"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style="fill: currentcolor; color: inherit; width: auto; height: 16px;"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.09468 0.378732C9.03904 0.156149 8.83905 0 8.60961 0H7.39039C7.16095 0 6.96096 0.156149 6.90532 0.378732L6.5209 1.9164C6.4768 2.0928 6.33986 2.22974 6.1667 2.28525C5.8509 2.38647 5.5465 2.51315 5.2559 2.66286C5.09422 2.74616 4.9005 2.74618 4.74454 2.6526L3.38501 1.83689C3.18828 1.71885 2.93645 1.74985 2.77421 1.91208L1.91209 2.7742C1.74986 2.93644 1.71886 3.18827 1.8369 3.385L2.65261 4.74452C2.74619 4.90049 2.74617 5.0942 2.66287 5.25589C2.51315 5.54649 2.38648 5.8509 2.28525 6.1667C2.22974 6.33986 2.09281 6.4768 1.9164 6.5209L0.378732 6.90532C0.156149 6.96096 0 7.16095 0 7.39039V8.60961C0 8.83905 0.156149 9.03904 0.378732 9.09468L1.9164 9.4791C2.09281 9.5232 2.22974 9.66014 2.28525 9.8333C2.38648 10.1491 2.51315 10.4535 2.66287 10.7441C2.74617 10.9058 2.74619 11.0995 2.65261 11.2555L1.8369 12.615C1.71886 12.8117 1.74986 13.0636 1.9121 13.2258L2.77422 14.0879C2.93645 14.2501 3.18828 14.2811 3.38502 14.1631L4.74453 13.3474C4.90049 13.2538 5.09421 13.2538 5.2559 13.3371C5.5465 13.4868 5.8509 13.6135 6.1667 13.7148C6.33986 13.7703 6.4768 13.9072 6.5209 14.0836L6.90532 15.6213C6.96096 15.8439 7.16095 16 7.39039 16H8.60961C8.83905 16 9.03904 15.8439 9.09468 15.6213L9.4791 14.0836C9.5232 13.9072 9.66014 13.7703 9.8333 13.7148C10.1491 13.6135 10.4535 13.4868 10.7441 13.3371C10.9058 13.2538 11.0995 13.2538 11.2555 13.3474L12.615 14.1631C12.8117 14.2811 13.0636 14.2501 13.2258 14.0879L14.0879 13.2258C14.2502 13.0636 14.2812 12.8117 14.1631 12.615L13.3474 11.2555C13.2538 11.0995 13.2538 10.9058 13.3371 10.7441C13.4868 10.4535 13.6135 10.1491 13.7148 9.8333C13.7703 9.66014 13.9072 9.5232 14.0836 9.4791L15.6213 9.09468C15.8439 9.03904 16 8.83904 16 8.60961V7.39039C16 7.16095 15.8439 6.96096 15.6213 6.90532L14.0836 6.5209C13.9072 6.4768 13.7703 6.33986 13.7148 6.1667C13.6135 5.8509 13.4868 5.5465 13.3371 5.2559C13.2538 5.09421 13.2538 4.9005 13.3474 4.74453L14.1631 3.385C14.2812 3.18826 14.2502 2.93643 14.0879 2.7742L13.2258 1.91208C13.0636 1.74984 12.8117 1.71884 12.615 1.83688L11.2555 2.6526C11.0995 2.74618 10.9058 2.74617 10.7441 2.66287C10.4535 2.51315 10.1491 2.38647 9.8333 2.28525C9.66014 2.22974 9.5232 2.09281 9.4791 1.9164L9.09468 0.378732ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                      ></path>
                                    </svg>
                                    <div
                                      class="bt743 flex opacity-50 leading-[15px] ml-[6px] rounded-t-[16px]"
                                      data-editor-id="betslipAcceptOddsLabel"
                                    >
                                      Odds Settings
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
