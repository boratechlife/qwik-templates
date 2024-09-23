import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function MaterialSymbolsCloseRounded(
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
        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsLiveIcon(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      data-cy="ic-live"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      key={key}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 8C2.79086 8 1 9.79086 1 12V20C1 22.2091 2.79086 24 5 24H27C29.2091 24 31 22.2091 31 20V12C31 9.79086 29.2091 8 27 8H5ZM3 12C3 10.8954 3.89543 10 5 10H27C28.1046 10 29 10.8954 29 12V20C29 21.1046 28.1046 22 27 22H5C3.89543 22 3 21.1046 3 20V12ZM7.888 13.4H6V19H10.416V17.536H7.888V13.4ZM13.4655 13.4H11.5775V19H13.4655V13.4ZM20.9984 13.4L18.6304 19H16.7744L14.4064 13.4H16.4384L17.7744 16.672L19.1424 13.4H20.9984ZM26.4823 19V17.576H23.6822V16.84H26.0502V15.48H23.6822V14.824H26.3783V13.4H21.8263V19H26.4823Z"
      ></path>
    </svg>
  );
}
