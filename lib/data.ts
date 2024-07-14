export const sections = [
  "A. Origination Charges",
  "B. Services Borrower Did Not Shop For",
  "C. Services Borrower Did Shop For",
  "D. TOTAL LOAN COSTS (Borrower-Paid)",
  "E. Taxes and Other Government Fees",
  "F. Prepaids",
  "G. Initial Escrow Payment at Closing",
  "H. Other",
  "I. TOTAL OTHER COSTS (Borrower-Paid)",
  "J. Lender Credits",
  "K. Due from Borrower at Closing",
  "L. Paid Already by or on Behalf of Borrower at Closing",
];

export const sectionsNames = sections.map((section) => ({
  id: section,
  label: section[0],
}));
