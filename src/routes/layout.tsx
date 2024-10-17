import {
  $,
  component$,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
  useStore,
} from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import BaseHeader from '~/components/router-head/BaseHeader';
import Betslip from '~/components/router-head/Betslip';
import TopHeader from '~/components/router-head/TopHeader';
import { Bet, ThemeContext } from '~/store/my-context';

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
  // Create signals for the theme and bet count
  const theme = useSignal('dark');
  const betCount = useSignal(2);
  const isBetSlipOpen = useSignal(true);

  const toggleSlip = $(() => {
    isBetSlipOpen.value = !isBetSlipOpen.value;
    console.log('what is happening', !isBetSlipOpen.value);
  });

  const betsPlaced = useSignal<Bet[]>([]);
  // Function to place a bet
  const placeBet = $((bet: Bet) => {
    betsPlaced.value = [...betsPlaced.value, bet];
    betCount.value++;
  });

  // Provide both theme and bet count in the context
  useContextProvider(ThemeContext, {
    theme,
    betCount,
    placeBet,
    isBetSlipOpen,
    toggleSlip,
    betsPlaced,
  });

  return (
    <section>
      <BaseHeader></BaseHeader>
      <TopHeader />
      <Slot />

      <button
        class="absolute bottom-4 left-4"
        onClick$={() =>
          placeBet({
            id: '1',
            player: 'Nishikori, Kei',
            match: 'Nishikori vs Simon',
            type: 'Winner',
            odds: 2.57,
            stake: 10,
          })
        }
      >
        HALLO WORLD
      </button>

      <Betslip />
    </section>
  );
});
