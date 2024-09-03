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

export const firstfunding_docs = [
  " ",
  "Wire",
  "Commitment",
  "Protection",
  "Lock",
  "Approval",
  "Credit Report",
  "Appraisal",
  "UWM  > Menu > AUS > Look for Check mark > AUS result > Print",
  "Universal Loan",
  "Rate Note",
  "Deed Of Trust",
];

export const firstfunding_docs2 = [
  "Final Closing Disclosure -",
  "Wire Instructions -",
  "Title Commitment with Legal Description -",
  "ICL - CPL - EO -",
  "Investor Lock -",
  "Investor CTC - Delegated CTC -",
  "Credit Report -",
  "Appraisal - ",
  "DU Underwriting Findings -",
  "Loan Application -",
  "Note -",
  "Mortgage -",
];

export const pcb_docs = [

  { keyword: "N/A", doc_name: "Final Closing Disclosure -" },
  { keyword: "Wire", doc_name: "Wire instructions -" },
  { keyword: "Approval", doc_name: "Investor CTC - Delegated CTC -" },
  { keyword: "Lock", doc_name: "Investor lock -" },
  { keyword: "Protection", doc_name: "ICL - CPL - EO -" },
  { keyword: "Rate Note", doc_name: "NOTE -" },
  { keyword: "N/A", doc_name: "Wire Summary -" },
];

export const firstBank_docs = [


  { keyword: "Wire", doc_name: "Wire instructions -" },
  { keyword: "Approval", doc_name: "Investor CTC - Delegated CTC -" },
  { keyword: "Lock", doc_name: "Investor lock -" },
  { keyword: "Protection", doc_name: "ICL - CPL - EO -" },
  { keyword: "Optional", doc_name: "Appraisal -" },
  {
    keyword: "UWM  > Menu > AUS > Look for Check mark > AUS result > Print",
    doc_name: "AUS - DU Underwriting -",
  },
  { keyword: "Rate Note", doc_name: "Note -" },
  { keyword: "(Below Note)", doc_name: "Allonge -" },
  { keyword: "N/A", doc_name: "FNM 3.2 FIle -" },
];

export const originBank_docs = [

  { keyword: " ", doc_name: "Final Closing Disclosure -" },
  { keyword: "Wire", doc_name: "Wire instructions -" },
  { keyword: "Lock", doc_name: "Investor Lock -" },
  { keyword: "Appraisal", doc_name: "Appraisal - " },
  { keyword: "Approval", doc_name: "Approval Letter CTC -" },
  { keyword: "Protection", doc_name: "Closing Protection Letter -" },
  {
    keyword: "UWM  > Menu > AUS > Look for Check mark > AUS result > Print",
    doc_name: "AUS Underwriting Approval -",
  },
  { keyword: "Universal Loan", doc_name: "1003 Loan Application -" },
  { keyword: "Rate Note", doc_name: "Note -" },
  { keyword: "N/A", doc_name: "FNM 3.2 FIle -" },
];

export const generalFees = [
  "GRMA Fee for all Georgia Loans $10",
  "All Section A fees except (L) paid by others",
  "All section G fees",
  "All Fees payable to AXEN and Lender",
  "MERS",
  "Credit report (unless POC or Paid by others)",
  "Credit Check (section B)",
  "Collateral Desktop Analysis (Section B)",
  "Tax Service",
  "Flood Cert",
  "Mortage Insurance Premium (FHA)/ Mi Upfront / UFMIP Refund",
  "VA Funding Fee (VA Loans)",
  "Rural Development (USDA) example:  Guarantee, USDA technology",
  "HOA - confirm with closing assist",
  "Prepaid Interest",
  "Doc prep fee to SLG or Snap Docs",
];

export const otherBankFees = [
  "Undisclosed Debt Monitoring/UDM (Kind Lending)",
  "Alterations (EPM)",
  "Electronic Doc Signing Fee to Snapdocs (MLB)",
  "203K Fees (EPM, MLB)",
  "Repair Holdback  (MLB)",
  "Contingency Report (MLB)",
];

export const HKLFees = [
  "Temporary Rate Buydown (section h, k, l, payoffs and payments)",
  "Escrow holdback  (section k, l, payoffs and payments)",
  "Reno funds  (section k, l, payoffs and payments)",
  "Principal Reduction  (section k, l, payoffs and payments)",
  "Down Payment Assistance (section L) - negative in the wire summary",
  "Lender Appraisal Credit   (section k, l, payoffs and payments)",
];

export const windsor = [
  "Contract Processing fee",
  "Flood cert",
  "Fraud Service",
  "Credit Report",
  "VOE",
  "MERS",
];

export const feesAdd = [
  "Offset of fees (EPM)",
  "Appraisal credit",
  "MIP Refund",
  "Fees in Paid others (L)",
];

export const usLender = ["Proceeds of Subordinate Lien (section L adjustment)"];
export const newRez = ["Closing Coordination Fee  $295"];
export const balloon = ["Secondary Financing (L)"];
export const trac = ["Title - review, and closing (B)"];