import { component$ } from '@builder.io/qwik';
import MenuItem from './MenuItem';
import MegaMenu from './MegaMenu';
import MultiLevelTag from './MultiLevelTag';
import { MaterialSymbolsLiveIcon } from './Icons';

export default component$(() => {
  return (
    <header class=" w-full h-16 flex p-2 sticky top-16 bg-white shadow-md box-border items-center justify-between z-20">
      <div class="container mx-auto ">
        <div class="w-full flex ">
          <div class="w-56 pb-2 flex gap-2 items-center">
            <MenuItem text="Home">
              <svg
                data-cy="ic-live"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style="fill: currentcolor; color: inherit; width: auto; height: 32px;"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 8C2.79086 8 1 9.79086 1 12V20C1 22.2091 2.79086 24 5 24H27C29.2091 24 31 22.2091 31 20V12C31 9.79086 29.2091 8 27 8H5ZM3 12C3 10.8954 3.89543 10 5 10H27C28.1046 10 29 10.8954 29 12V20C29 21.1046 28.1046 22 27 22H5C3.89543 22 3 21.1046 3 20V12ZM7.888 13.4H6V19H10.416V17.536H7.888V13.4ZM13.4655 13.4H11.5775V19H13.4655V13.4ZM20.9984 13.4L18.6304 19H16.7744L14.4064 13.4H16.4384L17.7744 16.672L19.1424 13.4H20.9984ZM26.4823 19V17.576H23.6822V16.84H26.0502V15.48H23.6822V14.824H26.3783V13.4H21.8263V19H26.4823Z"
                ></path>
              </svg>
            </MenuItem>
            <MenuItem text="Home" isLive={true}>
              <MaterialSymbolsLiveIcon style="fill: currentcolor; color: inherit; width: auto; height: 32px;" />
            </MenuItem>
            <MenuItem text="Home">
              <MaterialSymbolsLiveIcon style="fill: currentcolor; color: inherit; width: auto; height: 32px;" />
            </MenuItem>
            <MenuItem text="Home" isLive={true}>
              <MaterialSymbolsLiveIcon style="fill: currentcolor; color: inherit; width: auto; height: 32px;" />
            </MenuItem>
          </div>

          <MegaMenu />
        </div>
      </div>
    </header>
  );
});
