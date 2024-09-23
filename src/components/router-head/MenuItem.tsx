import { component$, Slot } from "@builder.io/qwik";

interface IconWithTextProps {
  text: string;
}

export default component$<IconWithTextProps>(({ text }) => {
  return (
    <div class="w-full group">
      <div class="flex relative text-gray-800">
        <div class="absolute -top-2 right-0 text-red-500 h-10 rounded-full bg-white w-10 flex items-center justify-center">
          <Slot />
        </div>

        {/* Tooltip with text prop */}
        <div class="absolute -bottom-10 hidden group-hover:block text-sm px-2 rounded bg-white">
          {text}
        </div>
      </div>
    </div>
  );
});
