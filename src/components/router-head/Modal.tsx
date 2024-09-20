import { $, component$, type QRL, Slot, useSignal } from "@builder.io/qwik";

interface ModalProps {
  showModal: boolean;
  onClose: QRL<() => void>;
}

export const Modal = component$((props: ModalProps) => {
  const modalVisible = useSignal(props.showModal);

  const handleClose = $(() => {
    modalVisible.value = false;
    props.onClose();
  });

  return (
    <div>
      {props.showModal && (
        <div class="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
          <div class="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            {/* Close button */}
            <button
              class="absolute top-4 right-4 text-gray-700 bg-black"
              onClick$={handleClose}
            >
              Xclose
            </button>
            {/* Modal Content Slot */}
            <div class="bg-red-500">
              Here is th contnt
              <Slot name="head" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export const Modal2 = component$(() => {
  return (
    <div class="fixed top-0 inset-0 h-full bg-opacity-50  w-full bottom-0 bg-black ">
      <Slot />
    </div>
  );
});
