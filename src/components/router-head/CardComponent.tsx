import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { Icon } from "./SvgIcons";
import { useContent } from "@builder.io/qwik-city";
import { Bet, ThemeContext } from "~/store/my-context";

interface CardProps {
  title: string;
  status: string;
  score: number;
  eventImageUrl: string;
  odds: Array<{
    name: string;
    odds: Array<{ teamName: string; number: number }>;
  }>;
}

export const CardComponent = component$((props: CardProps) => {
  const isDropDownVisible = useSignal(false);
  const todos = useContext(ThemeContext);

  // Example function to add a new bet
  const handlePlaceBet = $(() => {
    const newBet: Bet = {
      id: crypto.randomUUID(),
      player: "Player 1",
      match: "Match A vs Match B",
      type: "Win",
      odds: 1.5,
      stake: 100,
    };

    todos.betsPlaced.push(newBet);
    todos.isBetOpen = true;

    console.log("betsPlaced.value", todos.betsPlaced);
  });

  return (
    <div
      class={`${
        isDropDownVisible.value ? "h-[204px]" : "h-[204px]"
      } relative ltralign-top`}
    >
      <div
        class={`text-[#4d4d4d] w-full border border-transparent opacity-100  pt-2 pb-2 bg-[#e3e8eb] shadow-none box-border  border-[#e3e8eb] ${
          !isDropDownVisible.value ? "rounded-t-lg" : "rounded-b-none"
        }`}
      >
        <div class="flex flex-col relative text-[10px] px-2">
          <div class="flex-1 text-[#4d4d4d] h-4 flex overflow-hidden relative text-xs box-border text-left break-all leading-4">
            <div class="bt2593 bt3172 bt2584 w-full leading-4 text-[rgba(77,77,77,0.5)]  flex text-xs items-center font-semibold antialiased">
              <span class="bt2594">
                <Icon name="sport-e-fighting-b" />
              </span>
              <span class="bt2596 bt3173 h-4 flex overflow-hidden text-xs break-all items-center leading-4 tracking-[0.03em]">
                {props.title}
                <Icon name="ic-rounded-arrow" />
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
                    <Icon name="favorite" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            class="text-[#4d4d4d] border-none cursor-pointer flex p-[8px_0_12px_8px] bg-none transition-all duration-200 ease-in-out font-normal border-[#f9fafb] rounded-md flex-col no-underline"
          >
            <div class="bt2576 gap-1 h-4 flex justify-between pointer-events-none">
              <div class="bt2577 text-[rgb(11,162,247)] text-xs font-semibold leading-4 whitespace-nowrap tracking-[0.24px] align-middle">
                <div
                  class="bt2614 bt3243"
                  data-editor-id="eventCardStatusLabel"
                >
                  {props.status}
                </div>
              </div>
              <div class="bt2579 bt2580 flex-none ml-0 mr-2">
                <Icon name="ic-live-simple" />
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
                        src={props.eventImageUrl}
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
                      {props.title}
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
                    <span class="bt2639">{props.score}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div class="flex items-end">
            <div class="flex-1 relative mt-2">
              <div class="w-[calc(100%+8px)] -m-1 flex flex-wrap">
                <div class="flex-grow-0 max-w-[50%] basis-1/2 p-1 box-border font-semibold">
                  <div
                    onClick$={handlePlaceBet}
                    class="text-[#4d4d4d] border border-[#f9fafb] cursor-pointer h-10 flex px-2 overflow-hidden relative bg-[#f9fafb] box-border transition-all duration-200 ease-in-out font-semibold leading-[30px] rounded-lg justify-between"
                  >
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
            <div
              class="text-[#4d4d4d] w-8 cursor-pointer h-10 flex bg-[#f9fafb] transition-all duration-300 ease-in-out items-center font-semibold ml-2 border-[#f9fafb] rounded-lg justify-center"
              onClick$={() =>
                (isDropDownVisible.value = !isDropDownVisible.value)
              }
            >
              <Icon name="arrow-down" />
            </div>
          </div>

          <div
            class={`${
              isDropDownVisible.value
                ? "h-max absolute p-2 left-0 w-full right-0 top-full z-50 bg-[#e3e8eb] "
                : "h-0"
            } w-full overflow-hidden transition-all duration-300 flex flex-col`}
          >
            <div class="w-full pb-6">
              {props.odds.map((item) => (
                <div class="bt2815 relative mt-2">
                  <div
                    class="bt2609 bt2610 bt2818 text-[#4d4d4d] m-0 z-4 relative box-border font-semibold mt-4 text-left pl-2 mb-2"
                    data-editor-id="simpleMarketTitle"
                    style="width: auto;"
                  >
                    <div
                      class="bt2611 w-full h-4 opacity-50 overflow-hidden text-xs box-border leading-4 rounded-sm"
                      style="mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);"
                    >
                      {item.name}
                    </div>
                  </div>
                  <div
                    class="flex flex-wrap"
                    style="width: calc(100% + 8px); margin: -4px;"
                  >
                    {/* {item.odds.map((odd) => (
                      <div
                        data-editor-id="outcomePlate"
                        class="bt2819 bt2822 p-1 box-border font-semibold flex-grow-0 max-w-1/3 basis-1/3"
                      >
                        <div class="bt2823 bt2602 text-[#4d4d4d] border cursor-pointer flex px-2 overflow-hidden relative bg-[#f9fafb] box-border transition-all duration-200 ease-in-out font-semibold leading-[30px] border-[#f9fafb] rounded-lg justify-between h-10">
                          <div class="bt2838 top-0 left-0 w-full h-full absolute"></div>
                          <div
                            class="bt2827 flex-1 text-[rgba(77,77,77,0.5)] flex text-xs transition-colors duration-100 ease-in-out items-center leading-[1.2] pr-1"
                            style="mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);"
                            data-editor-id="outcomePlateName"
                          >
                            <span class="bt2829 h-[1.2em] flex overflow-hidden flex-col flex-none text-xs self-center text-right leading-[1.2]">
                              {odd.teamName}
                            </span>
                          </div>
                          <div class="bt2593 bt2830 bt2594 h-[1.2em] flex overflow-hidden flex-col flex-none text-xs self-center text-right leading-[1.2]">
                            <span class="bt2595">{odd.number}</span>
                          </div>
                        </div>
                      </div>
                    ))} */}

                    {item.odds.map((oddItem, oddIndex) => (
                      <div
                        key={oddIndex + "items"}
                        class="flex-grow-0 max-w-[50%] basis-1/2 p-1"
                      >
                        <div class="text-[#4d4d4d] border items-center border-[#f9fafb] cursor-pointer h-10 flex px-2 overflow-hidden relative bg-[#f9fafb] box-border transition-all duration-200 ease-in-out font-semibold leading-[30px] rounded-lg justify-between">
                          <span class="flex-1 text-xs">{oddItem.teamName}</span>
                          <span class="bt2637 bt2896 flex-none text-xs self-center text-right leading-[1.2]">
                            {oddItem.number}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
