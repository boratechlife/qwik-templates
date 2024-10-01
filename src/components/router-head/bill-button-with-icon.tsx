import { component$, Slot } from '@builder.io/qwik';

interface PillButtonProps {
  text: string;
  hasImage?: boolean;
}

export const PillButtonWithIcon = component$<PillButtonProps>(
  ({ text, hasImage = true }) => {
    return (
      <div
        class="bt256 bt274 bt260 bt261 bt257 text-[#4d4d4d] cursor-pointer  justify-center h-8 flex px-3 relative text-sm bg-[#e3e8eb] shadow-none box-border transition-all duration-500 items-center font-semibold leading-4 select-none mr-2 rounded-full overflow-hidden max-w-[256px] pl-1"
        data-editor-id="pillButton"
      >
        {/* Default slot for icon */}
        {hasImage && (
          <div class="bt265 flex-shrink-0 h-6 flex z-2 items-center leading-6 mr-1">
            <div class="bt275 inline-block relative w-6 h-6">
              <Slot />
            </div>
          </div>
        )}

        {/* Text from prop */}
        <div class="bt266 flex-1 flex justify-center w-full overflow-hidden relative">
          <div class="bt267 px-3 block overflow-hidden text-ellipsis w-full whitespace-nowrap font-bold">
            {text}
          </div>
        </div>
      </div>
    );
  }
);
