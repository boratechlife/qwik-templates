import { component$ } from '@builder.io/qwik';
import { Icon } from './SvgIcons';

// Define BetSlipItem component with bet prop
export const BetSlipItem = component$(
  ({
    bet,
  }: {
    bet: {
      player: string;
      match: string;
      type: string;
      odds: number;
      stake: number;
    };
  }) => {
    return (
      <div class="bt8539 bt8545 relative mb-4 mt-2">
        <div class="bt8541 overflow-hidden relative rounded-[6px]">
          <div class="bt8560 bt8550 bt8552 bt8554 relative">
            <div>
              <div
                class="bt8562 bt8556 text-[#4d4d4d] flex overflow-visible relative bg-[#e3e8eb] transition-transform duration-300 font-normal rounded-[6px]"
                data-editor-id="betslipSelection"
              >
                <div
                  class="bt8586 flex-none text-[#4d4d4d] w-[40px] cursor-pointer flex bg-[#e0e1e2] items-center rounded-l-[6px] justify-center"
                  data-editor-id="betslipSelectionRemoveButton"
                >
                  <Icon name="closeIcon" />
                </div>
                <a class="bt8567 flex-1 block p-[8px_16px_8px_8px] z-10 relative box-border no-underline">
                  <div class="bt8591 cursor-pointer">
                    <div class="bt8593 flex items-center mb-1">
                      <div class="bt8594" data-editor-id="betslipSelectionIcon">
                        <Icon name="sport-aotennis-b" />
                      </div>
                      <span class="bt8599 text-[#4d4d4d] text-[12px] font-semibold leading-4 align-middle">
                        {bet.player}
                      </span>
                    </div>
                    <div>
                      <div class="bt8600 text-[rgba(77,77,77,0.74)] text-[10px] font-normal leading-4 tracking-[0.6px]">
                        {bet.match}
                      </div>
                      <div class="bt8600 text-[rgba(77,77,77,0.74)] text-[10px] font-normal leading-4 tracking-[0.6px]">
                        {bet.type}
                      </div>
                    </div>
                  </div>
                  <div class="bt8572 flex gap-2 items-center">
                    <div
                      class="bt8575 bt8576 font-bold text-red-500 flex-1 flex items-center"
                      data-editor-id="betslipSelectionOdd"
                    >
                      <div class="bt8569 inline-flex items-center font-semibold leading-6">
                        {bet.odds}
                      </div>
                    </div>
                    <div class="bt8568 flex z-10 relative min-h-[24px] items-center gap-2 justify-end">
                      <div class="bt8606 bt8612">
                        <form novalidate class="bt8607 bt8609">
                          <label
                            class="bt8614 flex relative"
                            data-editor-id="betslipStakeInput"
                          >
                            <input
                              class="bt8620 bt9243 rounded text-[#4d4d4d] bg-white text-right pr-6 shadow-none pl-0"
                              placeholder="0"
                              inputmode="decimal"
                              type="text"
                              pattern="\d*"
                              maxlength="10"
                              value={bet.stake.toString()}
                              style="height: 20px; width: 100%;"
                            />
                            <i class="bt8617 bt8618 absolute right-2">€</i>
                          </label>
                        </form>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
