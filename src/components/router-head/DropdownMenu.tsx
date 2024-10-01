import { component$, useSignal, $, QwikMouseEvent } from "@builder.io/qwik";
import { DropDownContent } from "./dropdown-content";
import { PillButton } from "./pill-button";
import { FixedOverlay } from "./FixedOverlay";

export const DropDownMenu = component$(() => {
  const isDropDownVisible = useSignal(false); // Manages dropdown visibility

  // Function to close dropdown when clicking outside
  const closeDropDown$ = $((event: QwikMouseEvent) => {
    // Check if the click is outside the dropdown content and button
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector(".dropdown-content");
    const button = document.querySelector(".pill-button");

    if (
      dropdown &&
      !dropdown.contains(target) &&
      button &&
      !button.contains(target)
    ) {
      isDropDownVisible.value = false;
    }
  });

  return (
    <div class="relative">
      <div class="w-max flex box-border whitespace-nowrap mb-2 relative">
        <div class="flex z-3 left-[-53.0469px]">
          {/* Pass the toggle function to PillButton */}
          <PillButton
            toggleDropdown$={() =>
              (isDropDownVisible.value = !isDropDownVisible.value)
            }
          />
          {isDropDownVisible.value && (
            <>
              <FixedOverlay closeDropDown$={closeDropDown$} />{" "}
              {/* The fixed transparent section */}
              <DropDownContent /> {/* The dropdown content */}
            </>
          )}
        </div>
      </div>
    </div>
  );
});
