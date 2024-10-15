import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { GameCard } from "~/components/router-head/GameCard";

export default component$(() => {
  return (
    <>
      <div class="flex-1 w-full h-full flex p-4 relative box-border min-h-[calc(100vh-96px)] flex-col">
        <div class="bt45 mt-0 mx-[16px] mb-0">
          <div
            class="bt2964 bt3634 w-full overflow-hidden relative"
            style="height: 32px;"
          >
            <div class="bt2966 w-full overflow-x-auto overflow-y-hidden pb-[50px]">
              <div
                class="bt2965 inline-block whitespace-nowrap align-top"
                style="height: 32px;"
              >
                <div class="bt3635 flex gap-2 items-center">
                  <div
                    class="bt3636 bt3637 h-[32px] flex px-[12px] text-[12px] box-border items-center font-bold leading-[16px] mr-[8px] rounded-[18px] tracking-[2px] uppercase text-[#4d4d4d] bg-[#f9fafb]"
                    data-editor-id="headerNavigationButton"
                  >
                    <div
                      data-editor-id="pillButtonHotIcon"
                      class="flex items-center mr-[8px] text-[#FF4E4E]"
                    >
                      <svg
                        data-cy="ic-hot-title"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style="fill: currentcolor; color: inherit; width: auto; height: 16px;"
                      >
                        <path d="M3 4.28571C3 3.57563 3.57563 3 4.28571 3H8.14286C8.85294 3 9.42857 3.57563 9.42857 4.28571V10.7143C9.42857 11.4244 8.85294 12 8.14286 12H4.28571C3.57563 12 3 11.4244 3 10.7143V4.28571Z"></path>
                        <path d="M12 12C12 11.2899 12.5756 10.7143 13.2857 10.7143H19.7143C20.4244 10.7143 21 11.2899 21 12V19.7143C21 20.4244 20.4244 21 19.7143 21H13.2857C12.5756 21 12 20.4244 12 19.7143V12Z"></path>
                        <path d="M3 15.8571C3 15.1471 3.57563 14.5714 4.28571 14.5714H8.14286C8.85294 14.5714 9.42857 15.1471 9.42857 15.8571V19.7143C9.42857 20.4244 8.85294 21 8.14286 21H4.28571C3.57563 21 3 20.4244 3 19.7143V15.8571Z"></path>
                        <path d="M12 4.28571C12 3.57563 12.5756 3 13.2857 3H19.7143C20.4244 3 21 3.57563 21 4.28571V6.85714C21 7.56722 20.4244 8.14286 19.7143 8.14286H13.2857C12.5756 8.14286 12 7.56722 12 6.85714V4.28571Z"></path>
                      </svg>
                    </div>
                    Highlights
                  </div>
                  <div
                    class="bt3636 text-[rgba(77,77,77,0.7)] h-[32px] flex px-[12px] text-[12px] bg-[rgba(249,250,251,0.7)] box-border items-center font-bold leading-[16px] mr-[8px] rounded-[18px] tracking-[2px] uppercase"
                    data-editor-id="headerNavigationButton"
                  >
                    <div
                      data-editor-id="pillButtonScheduleIcon"
                      class="bt3639 bt3643 flex items-center mr-[8px] text-[rgba(77,77,77,0.5)]"
                    >
                      <svg
                        data-cy="ic-schedule-title"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style="fill: currentcolor; color: inherit; width: auto; height: 16px;"
                      >
                        <g opacity="1">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 4C1 3.89645 1.00525 3.79412 1.01549 3.69327C1.16912 2.1805 2.4467 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4ZM13 6H3V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6Z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    Schedule
                  </div>
                  <div
                    class="bt3636 text-[rgba(77,77,77,0.7)] h-[32px] flex px-[12px] text-[12px] bg-[rgba(249,250,251,0.7)] box-border items-center font-bold leading-[16px] mr-[8px] rounded-[18px] tracking-[2px] uppercase"
                    data-editor-id="headerNavigationButton"
                  >
                    <div
                      data-editor-id="pillButtonTopBetsIcon"
                      class="bt3639 bt3646 flex items-center mr-[8px] text-[rgba(77,77,77,0.5)]"
                    >
                      <svg
                        data-cy="ic-top-bets"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                        style="fill: currentcolor; color: inherit; width: auto; height: 16px;"
                      >
                        <path d="M1 0C0.447715 0 0 0.447715 0 1V4C0 4.55228 0.447716 5 1 5H13C13.5523 5 14 4.55228 14 4V1C14 0.447715 13.5523 0 13 0H1Z"></path>
                        <path d="M0 8C0 7.44771 0.447715 7 1 7H13C13.5523 7 14 7.44772 14 8V9C14 9.55229 13.5523 10 13 10H1C0.447716 10 0 9.55228 0 9V8Z"></path>
                        <path d="M0 13C0 12.4477 0.447715 12 1 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H1C0.447716 14 0 13.5523 0 13Z"></path>
                      </svg>
                    </div>
                    Bets Feed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bt3667 w-full py-6 flex"
          style="margin-left: 0px; margin-right: 0px; padding-right: 16px; "
        >
          <div
            class="bt3657    flex w-full relative"
            data-editor-id="heroBanner"
          >
            <div class="bt7480 w-full">
              <div class="bt7481 bt7482 bt7483 w-full ">
                <div class="bt7491 bt7484 bt7492 w-full relative">
                  <img
                    src="https://demoapi.betby.com/api/v1/promo/banner/brand/1653815133341880320/image/2300633295534301185"
                    class="bt7493 w-full h-full object-cover rounded-xl"
                    alt="banner"
                    height={100}
                    width={200}
                  />
                  <div class="bt7485 absolute top-1/2  text-white px-4 transform -translate-y-1/2">
                    <div
                      class="bt7494 bt7487 font-bold"
                      style="font-size: 36px;"
                    >
                      100% Cash Out
                    </div>
                    <div class="bt7488" style="font-size: 16px;">
                      An option to lock in profits or stop losses by cashing out
                      a bet early
                    </div>
                    <div class="bt7489"></div>
                  </div>
                </div>

                <div class="bt7486">
                  <div class="bt7498 bt7490" style="font-size: 12px;">
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
