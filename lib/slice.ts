import { create } from "zustand";
import { CalculatorSlice } from "./store";
import { createCalculatorSlice } from "./store";
export const useStore = create<CalculatorSlice>()((...a) => ({
  ...createCalculatorSlice(...a),
}));
