import { component$, QwikIntrinsicElements, useSignal } from "@builder.io/qwik";

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
    <div class=" mx-auto group relative">
      <MaterialSymbolsArrowDropDownRounded
        class="h-8 w-8"
        onClick$={() => (showMegaMenu.value = !showMegaMenu.value)}
      />
      {showMegaMenu.value && (
        <div
          class="fixed top-auto left-0 bg-black min-h-screen w-screen bg-opacity-50 p-4"
          onClick$={() => (showMegaMenu.value = false)}
        >
          <div
            class="w-full rounded-xl bg-white  h-80 flex flex-col"
            onClick$={(e) => e.stopPropagation()}
          ></div>
        </div>
      )}
    </div>
  );
});
