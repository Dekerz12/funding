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
  "J. TOTAL CLOSING COSTS (Borrower-Paid)",
  "K. Due from Borrower at Closing",
  "L. Paid Already by or on Behalf of Borrower at Closing",
];

export const sectionsNames = sections.map((section) => ({
  id: section,
  label: section[0],
}));

const data = [
  "MERS",
  "Underwriting Fee",
  "Credit report",
  "Tax Service",
  "Flood Cert",
  "GRMA Fee for all Georgia Loans $10",
  "Fraud Sevice",
  "VOE and invoice. If unsure, ask the LO or Processor",
  "Mortage Insurance Premium (FHA)/ Mi Upfront / UFMIP Refund",
  "VA Funding Fee",
  "Rural Development (USDA) example:  Guarantee, USDA technology",
  "HOA - confirm with closing assist",
  "Prepaid Interest",
  "Temporary Rate Buydown",
  "Escrow holdback",
  "Reno funds",
  "Principal Reduction",
  "Undisclosed Debt Monitoring/UDM",
  "Electronic Doc Signing Fee to Snapdocs",
  "Doc prep fee to focus fulfillment",
  "Down Payment Assistance",
  "Lender Appraisal Credit",
  "Alterations",
  "203K Fees",
  "All Fees payable to AXEN and Lender",
  "Secondary Financing",
  "Offset of fees",
  "Appraisal credit",
  "MIP Refund",
  "Fees in Paid others",
  "Contract Processing fee",
  "Proceeds of Subordinate Lien",
];

export const suggestions = data.map((suggestion) => ({
  value: suggestion,
  label: suggestion,
}));
