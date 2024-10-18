import {
  $,
  component$,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import BaseHeader from "~/components/router-head/BaseHeader";
import Betslip from "~/components/router-head/Betslip";
import TopHeader from "~/components/router-head/TopHeader";
import { Bet, ThemeContext, UserStore } from "~/store/my-context";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  useContextProvider(
    ThemeContext,
    useStore<UserStore>({
      items: ["Learn Qwik"],
      isBetOpen: false,
      betsPlaced: [],
    })
  );
  return (
    <section>
      <BaseHeader></BaseHeader>
      <TopHeader />
      <Slot />

      <Betslip />
    </section>
  );
});
