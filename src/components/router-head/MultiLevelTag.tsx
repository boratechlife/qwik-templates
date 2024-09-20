import { component$ } from "@builder.io/qwik";
import { MaterialSymbolsArrowDropDownRounded } from "./MegaMenu";

export default component$(() => {
  return (
    <div
      class="w-full flex bg-gray-300 px-3 py-1 rounded-2xl justify-between items-center group relative"
      tabIndex={1}
    >
      <div class="absolute hidden group-focus-within:block top-full h-64 w-64 bg-white shadow left-0 rounded">
        <ul class="flex flex-col w-full p-4">
          <li class="flex flex-col group" tabIndex={1}>
            <div class="flex gap-2 items-center w-full justify-between">
              <div class="flex gap-4 items-center">
                <span class="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center">
                  1
                </span>
                <span class="font-bold">All</span>
                <span class="h-5 w-5 rounded-full flex items-center justify-center bg-gray-300 text-black">
                  1
                </span>
              </div>

              <span class="flex w-6 h-6">
                <MaterialSymbolsArrowDropDownRounded class="w-full h-full" />
              </span>
            </div>
            <div class="drop hidden group-focus:h-64 w-full bg-red-500">
              123
            </div>
          </li>
        </ul>
      </div>
      <div class="flex gap-2 items-center">
        <span>All</span>
        <span class="h-5 w-5 rounded-full flex items-center justify-center bg-white text-black">
          1
        </span>

        <span class="flex w-6 h-6">
          <MaterialSymbolsArrowDropDownRounded class="w-full h-full" />
        </span>
      </div>
    </div>
  );
});
