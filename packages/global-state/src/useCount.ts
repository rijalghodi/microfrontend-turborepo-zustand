// shared/zustandStore.js

import { create } from "zustand";

type CountState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Define your global state using Zustand
export const useCount = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state: CountState) => ({ count: state.count + 1 })),
  decrement: () => set((state: CountState) => ({ count: state.count - 1 })),
}));
