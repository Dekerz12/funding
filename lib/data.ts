export const sections = [
  "A. Origination Charges",
  "B. Services Borrower Did Not Shop For",
  "F. Prepaids",
  "G. Initial Escrow Payment at Closing",
  "H. Other",
  "J. Lender Credits",
  "K. Due from Borrower at Closing",
  "L. Paid Already by or on Behalf of Borrower at Closing",
];

export const sectionsNames = sections.map((section) => ({
  id: section,
  label: section[0],
}));
