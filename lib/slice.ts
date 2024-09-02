import { create } from "zustand";
import { CalculatorSlice, createDocsSlice, DocsSlice } from "./store";
import { createCalculatorSlice } from "./store";
export const useStore = create<CalculatorSlice & DocsSlice>()((...a) => ({
  ...createCalculatorSlice(...a),...createDocsSlice(...a)
}));
