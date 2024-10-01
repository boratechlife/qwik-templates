import { component$ } from "@builder.io/qwik";

export const FixedOverlay = component$(
  (props: { closeDropDown$: (event: MouseEvent) => void }) => {
    return (
      <div
        class="fixed inset-0 bg-transparent z-10"
        onClick$={props.closeDropDown$}
      ></div>
    );
  }
);
