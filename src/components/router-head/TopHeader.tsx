import { component$ } from "@builder.io/qwik";
import MenuItem from "./MenuItem";
import MegaMenu from "./MegaMenu";
import MultiLevelTag from "./MultiLevelTag";

export default component$(() => {
  return (
    <header class="py-2.5 bg-gray-200">
      <div class="container mx-auto ">
        <div class="w-full flex">
          <MenuItem />
          <MegaMenu />
        </div>
        <div class="w-full flex">
          <div class="w-max">
            <MultiLevelTag />
          </div>
        </div>
      </div>
    </header>
  );
});
