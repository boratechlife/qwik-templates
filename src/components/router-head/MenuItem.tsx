import { component$, Slot } from "@builder.io/qwik";

interface IconWithTextProps {
  text: string;
  isLive?: boolean;
}

export default component$<IconWithTextProps>(({ text, isLive = false }) => {
  return (
    <div class="w-full group">
      <div class="flex relative text-gray-800">
        <div class=" flex-none text-[rgba(77,77,77,0.5)] w-8 h-8 flex p-0 relative items-center rounded-md flex-col justify-center">
          {isLive && (
            <div class="absolute top-[-8px] left-4 right-auto w-5 h-5 flex z-2 shadow-lg rounded-full bg-white text-[#FF4E4E]">
              <svg
                data-cy="ic-badge-hot"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: currentcolor; color: rgb(255, 78, 78); width: auto; height: 19px;"
              >
                <g clip-path="url(#clip0)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 17C7.22222 17 5 14.6667 5 11.75C5 9.41667 6.33333 6.96667 6.88889 6.03333L6.91752 5.98815C7.30336 5.37884 8.80974 3 10 3C10.3333 3 10.5556 3.23333 10.5556 3.58333C10.5556 4.91785 10.9544 6.2105 11.6507 7.28383C11.8687 6.95056 12.038 6.59205 12.1111 6.20829C12.1414 6.04947 12.254 5.92524 12.3951 5.85444C12.6716 5.68422 13.0012 5.74385 13.1667 6.03333C13.9444 7.31667 14.5 8.71667 14.8333 9.94167C14.9444 10.5833 15 11.225 15 11.75C15 14.6667 12.7778 17 10 17ZM10 15.8333C10.9444 15.8333 11.6667 15.075 11.6667 14.0833C11.6667 13.9449 11.6319 13.7699 11.5898 13.5583C11.5787 13.5025 11.5672 13.4442 11.5556 13.3833C11.5034 13.137 11.4146 12.8779 11.3006 12.6119C11.2583 12.6572 11.2138 12.7003 11.1671 12.7412L11.1667 12.7417C11.1111 12.8583 10.9444 12.9167 10.8333 12.9167C10.6667 12.9167 10.5 12.8583 10.3889 12.7417C10.0063 12.2304 9.73257 11.6733 9.58136 11.0849C9.0461 11.7867 8.33333 13.0597 8.33333 14.0833C8.33333 15.075 9.05556 15.8333 10 15.8333Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path d="M0 0H20V20H0V0Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}

          <Slot />
        </div>

        {/* Tooltip with text prop */}
        <div class="absolute -bottom-8 -left-4 shadow-md  hidden group-hover:block text-sm px-2 py-1 w-max rounded bg-white">
          {text}
        </div>
      </div>
    </div>
  );
});
