import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PillButtonWithIcon } from "~/components/router-head/bill-button-with-icon";
import { CardComponent } from "~/components/router-head/CardComponent";
import { DropDownMenu } from "~/components/router-head/DropdownMenu";
import { EFightingComponent } from "~/components/router-head/TitleCard";

export default component$(() => {
  return (
    <>
      <div class="flex-1 w-full h-full flex p-4 relative box-border min-h-[calc(100vh-96px)] flex-col">
        <EFightingComponent />

        <div class="flex flex-wrap gap-2 items-center">
          <DropDownMenu />

          <PillButtonWithIcon text="Valhalla Cup 2024 Week #40">
            <img
              src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg"
              alt="Flag"
              height="24"
              width="24"
              class="bt276"
            />
          </PillButtonWithIcon>

          <PillButtonWithIcon
            text="Popular"
            hasImage={false}
          ></PillButtonWithIcon>

          <PillButtonWithIcon text="Valhalla Cup 2024 Week #40">
            <img
              src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg"
              alt="Flag"
              height="24"
              width="24"
              class="bt276"
            />
          </PillButtonWithIcon>
        </div>

        <div class="grid grid-cols-1  lg:grid-cols-4 mt-4 gap-4">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
