import { component$ } from "@builder.io/qwik";

interface BannerOutcomePlateProps {
  outcomeName: string;
  outcomeValue: string;
}

export const BannerOutcomePlate = component$(
  (props: BannerOutcomePlateProps) => {
    return (
      <div
        data-editor-id="bannerOutcomePlate"
        class="bt584 bt587 p-[4px] box-border font-semibold flex-grow-0 max-w-[33.333%] flex-[0_0_33.333%]"
      >
        <div class="bt588 bt650 cursor-pointer h-[32px] flex px-[8px] overflow-hidden relative box-border transition-all duration-200 ease-in-out text-white border-0 bg-[rgba(255,255,255,0.3)] font-semibold border-transparent rounded-[4px] leading-[30px] justify-between">
          <div class="bt603 top-0 left-0 w-full h-full absolute"></div>
          <div
            class="bt592 bt649 flex-1 flex text-[12px] mask-image-[linear-gradient(90deg,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] transition-colors duration-100 ease-in-out items-center leading-[1.2] pr-[4px] text-white"
            data-editor-id="bannerOutcomePlateName"
          >
            <span class="bt594 h-[1.2em] overflow-hidden box-border break-all">
              {props.outcomeName}
            </span>
          </div>
          <div class="bt511 bt595 h-[1.2em] flex overflow-hidden flex-col flex-none text-[12px] self-center text-right leading-[1.2]">
            <span class="bt513">{props.outcomeValue}</span>
          </div>
        </div>
      </div>
    );
  }
);
