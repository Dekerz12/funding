import { useStore } from "@/lib/slice";
import { format } from "date-fns";
import React from "react";

const TracClosing = () => {
  const wire = useStore((state) => state);
  const { selectedSections, loan_amount, borrower, loan_number, funding_date } =
    wire;

  const formatSelection = selectedSections.map((section) => {
    if (Array.isArray(section.fees) && section.fees.length) {
      return section.fees.reduce((acc, curr) => acc + curr.amount, 0);
    }
    return 0;
  });
  const totalDeduction = !!formatSelection
    ? formatSelection.reduce((acc, curr) => acc + curr, 0)
    : 0;
  return (
    <div className="mx-auto py-12">
      <div className="">
        <h1 className="font-bold text-xl mb-4">Subject Line</h1>
        <p className="mb-8">
          {loan_number} - {borrower}
        </p>
      </div>

      <div className="">
        <div className="space-y-4">
          <h1 className="font-bold text-xl mb-4">Template</h1>
          <p>Hi Team,</p>

          <p>
            Requesting wire order for this file
            <b>
              {loan_number} - {borrower}
            </b>
            .
          </p>

          <ul className="mb-8">
            <li>
              Loan Amount:{" "}
              <b>
                $
                {new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                }).format(loan_amount)}
              </b>
            </li>
            <li>
              Wire Amount:{" "}
              <b>
                $
                {new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                }).format(loan_amount - totalDeduction)}
              </b>{" "}
              <span>(please see the wire summary below)</span>
            </li>
            <li>Bank: First Funding</li>
            <li>Date: {format(funding_date, "MM/dd")}</li>
          </ul>

          <p className="font-medium">Wire Summary with netted-out fees:</p>
        </div>
      </div>
    </div>
  );
};

export default TracClosing;
