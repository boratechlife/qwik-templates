import { component$, Slot } from '@builder.io/qwik';

interface NavbarItemProps {
  text: string;
  number: number;
}

export const NavbarItem = component$((props: NavbarItemProps) => {
  return (
    <div class="flex text-[rgba(77,77,77,0.5)] text-sm font-semibold leading-4 items-center justify-between w-full mr-0 mb-6">
      <div class="gap-2 w-full flex relative items-center mr-2">
        {/* Notification Badge */}
        <div class="text-[#FF4E4E] top-[-8px] left-4 right-auto w-5 h-5 flex z-2 absolute shadow-[0px_2px_6px_rgba(0,0,0,0.1)] rounded-full bg-white">
          <Slot name="badge-icon" />
        </div>

        {/* Icon */}
        <div class="min-w-[32px]">
          <Slot name="icon" />
        </div>

        {/* Text and Number */}
        <span class="text-[rgba(77,77,77,0.5)] text-sm font-semibold leading-4">
          {props.text}
          <span class="text-[rgb(77,77,77)] p-[2px_6px] text-xs bg-white ml-2 rounded-[10px] tracking-[0.03em]">
            <span class="opacity-70">{props.number}</span>
          </span>
        </span>
      </div>
    </div>
  );
});
