import { StateCreator } from "zustand";

export interface Fee {
  id: number;
  name: string;
  amount: number;
}

export interface CalculatorSlice {
  // Header
  borrower: string;
  loan_number: string;
  signing_date: Date;
  funding_date: Date;
  loan_amount: number;
  funder: string;
  changeFunder: (name: any) => void;
  property: string;
  changeProperty: (name: any) => void;
  changeBorrower: (name: any) => void;
  changeLoanNumber: (number: any) => void;
  changeFnDate: (date: any) => void;
  changeSnDate: (date: any) => void;
  changeLoanAmount: (number: any) => void;
  // Section Selector
  selectedSections: {
    section_name: string;
    fees: Fee[] | null;
  }[];
  updateSelections: (arr: any) => void;
  addFee: (name: string, id: number) => void;
  deleteFee: (name: string, id: number) => void;
  updateFee: (name: string, arr: Fee[]) => void;
}

export const createCalculatorSlice: StateCreator<
  CalculatorSlice,
  [],
  [],
  CalculatorSlice
> = (set) => ({
  borrower: "",
  funder: "",
  property: "",
  loan_number: "",
  signing_date: new Date(),
  funding_date: new Date(),
  loan_amount: 0,
  changeFunder: (name: any) => set((state) => ({ funder: name })),
  changeProperty: (name: any) => set((state) => ({ property: name })),
  changeBorrower: (name: any) => set((state) => ({ borrower: name })),
  changeLoanNumber: (number: any) => set((state) => ({ loan_number: number })),
  changeFnDate: (date: any) => set((state) => ({ funding_date: date })),
  changeSnDate: (date: any) => set((state) => ({ signing_date: date })),
  changeLoanAmount: (number: any) => set((state) => ({ loan_amount: number })),
  selectedSections: [
    {
      section_name: "A. Origination Charges",
      fees: null,
    },
    {
      section_name: "B. Services Borrower Did Not Shop For",
      fees: null,
    },
    {
      section_name: "F. Prepaids",
      fees: null,
    },
    {
      section_name: "G. Initial Escrow Payment at Closing",
      fees: null,
    },
  ],
  updateSelections: (arr: any) => set((state) => ({ selectedSections: arr })),
  addFee: (name: string, id: number) =>
    set((state) => {
      const index = state.selectedSections.findIndex(
        (section) => section.section_name === name
      ); // copy the array
      const newArr = [...state.selectedSections];
      if (!newArr[index].fees) {
        newArr[index].fees = [
          {
            id,
            name: "",
            amount: 0,
          },
        ];
        return { selectedSections: newArr };
      }

      if (Array.isArray(newArr[index].fees) && newArr[index].fees !== null) {
        newArr[index].fees?.push({
          id,
          name: "",
          amount: 0,
        });
        return { selectedSections: newArr };
      }

      return { selectedSections: state.selectedSections };
    }),
  deleteFee: (name: string, id: number) =>
    set((state) => {
      const index = state.selectedSections.findIndex(
        (section) => section.section_name === name
      ); // copy the array
      const newArr = [...state.selectedSections];

      if (Array.isArray(newArr[index].fees) && newArr[index] !== null) {
        newArr[index].fees = newArr[index]!.fees!.filter(
          (fee) => fee.id !== id
        );

        return { selectedSections: newArr };
      }

      return { selectedSections: state.selectedSections };
    }),
  updateFee: (name: string, arr: Fee[]) =>
    set((state) => {
      const index = state.selectedSections.findIndex(
        (section) => section.section_name === name
      ); // copy the array
      const newArr = [...state.selectedSections];

      if (Array.isArray(newArr[index].fees) && newArr[index] !== null) {
        newArr[index].fees = arr;

        return { selectedSections: newArr };
      }

      return { selectedSections: state.selectedSections };
    }),
});
