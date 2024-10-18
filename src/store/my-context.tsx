import { createContextId } from "@builder.io/qwik";

export interface Bet {
  id: string;
  player: string;
  match: string;
  type: string;
  odds: number;
  stake: number;
}

export interface UserStore {
  items: string[];
  isBetOpen: boolean;
  betsPlaced: Bet[]; // Store for betsPlaced
}

export const ThemeContext = createContextId<UserStore>("docs.theme-context");
