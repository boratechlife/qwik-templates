import { component$ } from "@builder.io/qwik";

export const PillButton = component$(
  (props: { toggleDropdown$: () => void }) => {
    return (
      <div
        class="pill-button bt239 bt242 bt241 text-[#4d4d4d] cursor-pointer h-8 flex pr-8 relative text-sm bg-[#e3e8eb] shadow-none box-border transition-all duration-500 items-center font-semibold leading-4 select-none mr-2 rounded-[18px]"
        data-editor-id="pillButton"
        onClick$={props.toggleDropdown$} // Call the toggle function when clicked
      >
        <div class="bt249 flex-1 w-full overflow-hidden relative ml-3">
          <div class="bt251 w-full inline-block z-1 whitespace-nowrap">All</div>
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
    );
  }
);
