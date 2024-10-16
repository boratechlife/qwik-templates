import { component$ } from "@builder.io/qwik";
import { BannerOutcomePlate } from "./BannerOutcomePlate";

export const GameCard = component$(() => {
  return (
    <div
      class="bt327 content-box"
      style="height: 152px; margin-left: 0px; margin-right: 0px; padding-right: 16px; width: 360px; min-width: 360px;"
    >
      <div class="bt339 flex-none h-full overflow-hidden box-content">
        <div class="bt341 w-full h-full overflow-hidden rounded-[12px]">
          <div
            class="bt351 bt352 text-white w-full h-full overflow-hidden relative bg-none rounded-[12px]"
            data-editor-id="banner"
          >
            <div class="bt353 w-full cursor-pointer h-full relative bg-[#e3e8eb]">
              <div class="bt362 top-0 left-0 w-full h-full flex z-1 absolute bg-cover justify-center bg-center">
                <img
                  src="https://demoapi.betby.com/api/v1/promo/banner/brand/1653815133341880320/image/2313017981531205633"
                  class="bt356 w-[100%] h-full object-cover rounded-[12px]"
                  alt="banner"
                  width={200}
                  height={150}
                />
              </div>
              <div class="bt363 bt364 top-0 left-0 w-full h-full flex p-[6px_8px_8px] z-2 absolute box-border transition-opacity duration-500 flex-col bg-cover bg-center bg-black bg-opacity-50">
                <div class="bt374 w-full h-[19px] flex relative items-center font-semibold mb-[6px]">
                  <div class="bt377 flex-1 text-white flex overflow-hidden relative text-[11px] text-left mr-[8px]">
                    <div
                      class="bt381 w-full overflow-hidden mask-image-[linear-gradient(90deg,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] whitespace-nowrap"
                      data-editor-id="bannerCategory"
                    >
                      <div class="bt382 bt387 text-white h-[16px] flex opacity-50 text-[12px] items-center font-semibold antialiased">
                        <span class="bt383 inline-block mr-[4px]">
                          <svg
                            class="bt384 bt378 block opacity-100"
                            data-cy="sport-soccer"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style="fill: currentcolor; color: inherit; width: auto; height: 16px;"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
                            ></path>
                          </svg>
                        </span>
                        <span class="bt385 bt388 h-[16px] flex overflow-hidden text-[12px] break-all items-center leading-[16px] tracking-[0.03em]">
                          International
                          <svg
                            class="bt386 mx-[2px] opacity-50 rotate-[-90deg]"
                            data-cy="ic-rounded-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style="fill: currentcolor; color: inherit; width: auto; height: 8px;"
                          >
                            <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                          UEFA Nations League
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bt379 flex-none text-white flex overflow-hidden relative text-[11px] text-left mr-0 justify-end">
                    <div
                      class="bt391 bt394 bt380 bt393 text-[12px] font-semibold leading-[16px] whitespace-nowrap tracking-[0.24px] align-middle text-inherit !opacity-50"
                      data-editor-id="eventCardStatusLabel"
                    >
                      <span>Today, 21:45</span>
                    </div>
                  </div>
                </div>
                <div class="bt358 flex-1 flex no-underline">
                  <div class="bt367 flex-1 flex items-start pr-[16px] flex-col justify-start">
                    <div class="bt372 order-1 w-[32px] max-h-[36px] pr-[8px] pb-[8px]">
                      <div
                        class="bt395 inline-block relative"
                        style="width: 32px; height: 32px;"
                      >
                        <img
                          src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/POL.svg"
                          alt=""
                          height="32"
                          width="32"
                          class="bt396 w-[100%] h-full object-cover rounded-[12px] block"
                        />
                      </div>
                    </div>
                    <div class="bt371 text-white order-2 overflow-hidden text-[13px] break-words font-medium leading-[18px] line-clamp-2">
                      Poland
                    </div>
                  </div>
                  <div class="bt369 flex-1 flex items-end pl-[16px] pr-0 flex-col justify-start">
                    <div class="bt372 order-1 w-[32px] max-h-[36px] pl-[8px] pr-0 pb-[8px]">
                      <div
                        class="bt395 inline-block relative"
                        style="width: 32px; height: 32px;"
                      >
                        <img
                          src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/HRV.svg"
                          alt=""
                          height="32"
                          width="32"
                          class="bt396 w-full h-full object-cover rounded-[12px] block"
                        />
                      </div>
                    </div>
                    <div class="bt371 text-white order-2 overflow-hidden text-[13px] break-words font-medium leading-[18px] line-clamp-2">
                      Croatia
                    </div>
                  </div>
                </div>
                <div class="bt359 flex-1 flex items-end pl-[16px] pr-0 flex-col justify-start">
                  <div class="bt580 relative mt-[8px]">
                    <div class="bt582 w-[calc(100%+8px)] m-[-4px] flex flex-wrap">
                      <div
                        data-editor-id="bannerOutcomePlate"
                        class="bt584 bt587 p-[4px] box-border font-semibold flex-grow-0 max-w-[33.333%] flex-[0_0_33.333%]"
                      >
                        <div class="bt588 bt650 cursor-pointer h-[32px] flex px-[8px] overflow-hidden relative box-border transition-all duration-200 ease-in-out leading-[30px] text-white border-0 bg-[rgba(255,255,255,0.3)] font-semibold border-transparent rounded-[4px] justify-between">
                          <div class="bt603 top-0 left-0 w-full h-full absolute"></div>
                          <div
                            class="bt592 bt649 flex-1 flex text-[12px] mask-image-[linear-gradient(90deg,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] transition-colors duration-100 ease-in-out items-center leading-[1.2] pr-[4px] text-white"
                            data-editor-id="bannerOutcomePlateName"
                          >
                            <span class="bt594 h-[1.2em] overflow-hidden box-border break-all">
                              1
                            </span>
                          </div>
                          <div class="bt511 bt595 bt512 h-[1.2em] flex overflow-hidden flex-col flex-none text-[12px] self-center text-right leading-[1.2]">
                            <span class="bt513">3.1</span>
                          </div>
                        </div>
                      </div>
                      <BannerOutcomePlate
                        outcomeName="draw"
                        outcomeValue="3.4"
                      />
                      <div
                        data-editor-id="bannerOutcomePlate"
                        class="bt584 bt587  p-[4px] box-border font-semibold flex-grow-0 max-w-[33.333%] flex-[0_0_33.333%]"
                      >
                        <div class="bt588 bt650  cursor-pointer h-[32px] flex px-[8px] overflow-hidden relative box-border transition-all duration-200 ease-in-out text-white border-0 bg-[rgba(255,255,255,0.3)] font-semibold border-transparent rounded-[4px] leading-[30px] justify-between">
                          <div class="bt603 bt603 top-0 left-0 w-full h-full absolute"></div>
                          <div
                            class="bt592 bt649 flex-1 flex text-[12px] mask-image-[linear-gradient(90deg,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] transition-colors duration-100 ease-in-out items-center leading-[1.2] pr-[4px] text-white"
                            data-editor-id="bannerOutcomePlateName"
                          >
                            <span class="bt594 h-[1.2em] overflow-hidden box-border break-all">
                              2
                            </span>
                          </div>
                          <div class="bt511 bt595 h-[1.2em] flex overflow-hidden flex-col flex-none text-[12px] self-center text-right leading-[1.2]">
                            <span class="bt513">2.31</span>
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
  );
});
