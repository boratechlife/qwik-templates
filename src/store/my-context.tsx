// theme-context.ts
import { QRL, type Signal, createContextId } from '@builder.io/qwik';

// Define a structure for a bet
export interface Bet {
  id: string;
  player: string;
  match: string;
  type: string;
  odds: number;
  stake: number;
}

// Define a context that includes both theme and the count of bets
interface ThemeContextProps {
  theme: Signal<string>;
  betCount: Signal<number>;
  isBetSlipOpen: Signal<boolean>;
  betsPlaced: Signal<Bet[]>; // Changed to Signal for reactivity
  placeBet: QRL<(bet: Bet) => void>; // QRL for adding a new bet
  toggleSlip: QRL<() => void>; // QRL for the placeBet function
}

export const ThemeContext =
  createContextId<ThemeContextProps>('docs.theme-context');
