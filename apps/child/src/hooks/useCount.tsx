import { StoreApi, create } from "zustand";
import PubStore from "zustand-pub";

const pubStore = new PubStore("key");

type CountState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Define your global state using Zustand

const store = pubStore.defineStore<CountState>("count", (set) => ({
  count: 0,
  increment: () => set((state: CountState) => ({ count: state.count + 1 })),
  decrement: () => set((state: CountState) => ({ count: state.count - 1 })),
}));

export const useCount = create<StoreApi<CountState>>(store);
