import { component$, QwikIntrinsicElements, useSignal } from "@builder.io/qwik";
import { NavbarItem } from "./NavbarItem";

export function MaterialSymbolsArrowDropDownRounded(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
      ></path>
    </svg>
  );
}

export default component$(() => {
  const showMegaMenu = useSignal(false);
  return (
    <div class=" mx-auto group w-full relative">
      <MaterialSymbolsArrowDropDownRounded
        class="h-8 w-8"
        onClick$={() => (showMegaMenu.value = !showMegaMenu.value)}
      />
      {showMegaMenu.value && (
        <div
          class="fixed lg:top-[120px] left-0 bg-black min-h-screen w-screen bg-opacity-50 p-4"
          onClick$={() => (showMegaMenu.value = false)}
        >
          <div
            class="text-[#4d4d4d] w-full flex p-4 pr-2 relative bg-white shadow-lg box-border items-center font-normal border border-[#f9fafb] rounded-xl flex-col h-80"
            onClick$={(e) => e.stopPropagation()}
          >
            <div class="bt1081 bt1078 max-w-md mb-[14px] gap-2 w-full flex">
              <div
                class="bt1085 flex-1 text-[#4d4d4d] flex p-1 bg-[#e3e8eb] box-border items-center rounded-[12px]"
                data-editor-id="expandedNavbarTabs"
              >
                <div
                  data-editor-id="expandedNavbarTab"
                  class="bt1086 bt1087 flex-1 text-[#4d4d4d] bg-white text-[rgba(77,77,77,0.5)] h-8 flex text-xs font-semibold leading-4 items-center rounded-md justify-center"
                >
                  <span>Sports</span>
                </div>
                <div
                  data-editor-id="expandedNavbarTab"
                  class="bt1086 flex-1 text-[rgba(77,77,77,0.5)] h-8 flex text-xs font-semibold leading-4 items-center rounded-md justify-center"
                >
                  <span>Esports</span>
                </div>
              </div>
            </div>

            <div class="w-full h-full box-border overflow-y-auto max-h-[calc(100vh-300px)]">
              <div class="w-full grid pt-[10px] grid-cols-[repeat(auto-fill,minmax(229px,1fr))]">
                <div>
                  <div class="bt1108 bt1120 bt1105 text-[rgba(77,77,77,0.5)] flex text-sm font-semibold leading-4 items-center justify-between w-full mr-0 mb-6">
                    <div class="bt1112 gap-2 w-full flex relative items-center mr-2">
                      <div
                        class="bt601 bt1115 text-[#FF4E4E] top-[-8px] left-4 right-auto w-5 h-5 flex z-2 absolute shadow-[0px_2px_6px_rgba(0,0,0,0.1)] rounded-full bg-white"
                        data-editor-id="navbarPin"
                      >
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
                      <svg
                        class="bt1113 min-w-[32px]"
                        data-editor-id="expandedNavbarIcon"
                        data-cy="sport-soccer"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        style="fill: currentcolor; color: inherit; width: auto; height: 32px;"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
                        ></path>
                      </svg>
                      <span
                        class="bt1116 bt1122 text-[rgba(77,77,77,0.5)] text-sm font-semibold leading-4"
                        data-editor-id="expandedNavbarSportLabel"
                      >
                        Soccer
                        <span
                          class="bt1117 bt1123 text-[rgb(77,77,77)] p-[2px_6px] text-xs bg-white ml-2 rounded-[10px] tracking-[0.03em]"
                          data-editor-id="expandedNavbarSportCount"
                        >
                          <span class="bt1118 opacity-70">6</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <NavbarItem text="Soccer" number={6}>
                  <div q:slot="badge-icon">
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
                  <div q:slot="icon">
                    <svg
                      class="bt1113 min-w-[32px]"
                      data-editor-id="expandedNavbarIcon"
                      data-cy="sport-soccer"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style="fill: currentcolor; color: inherit; width: auto; height: 32px;"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
                      ></path>
                    </svg>
                  </div>
                </NavbarItem>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
