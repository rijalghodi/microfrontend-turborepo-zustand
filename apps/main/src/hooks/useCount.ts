// react
import PubStore from "zustand-pub";
import { create } from "zustand";

type CountState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
const pubStore = new PubStore("key");
const store = pubStore.getStore<CountState>("count");
export const useCount = create(store || {});
