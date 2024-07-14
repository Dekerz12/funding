"use client";
import { useStore } from "@/lib/slice";
import React from "react";

const TemplatesPage = () => {
  const wire = useStore((state) => state);
  const { selectedSections, loan_amount } = wire;
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
    <div className="mx-auto py-24">
      {/* prettier-ignore */}
      <p style={{ whiteSpace: "pre" }}>
        {`My name is ___ , your funder for this loan. Please confirm if we are balanced at $${loan_amount - totalDeduction}.
Your confirmation is required before we request and order the wire to prevent potential fees and delay.


Here is the wire breakdown for your reference:


Attached to this email is the CD containing the highlighted fees we are netting out of the wire. Let me know if there are any changes to the Final CD.
Please confirm the following:`}
 </p>
      <ul className="list-disc ml-12">
        <li>Are the attached Wire Instructions accurate?</li>
        <li>What time is the borrower scheduled to sign?</li>
        <li>ETA for the Signed Closing Package.</li>
      </ul>
      {`Furthermore, I have included the Funding Instructions in this email. Please review and adhere to the provided instructions.`}
    </div>
  );
};

export default TemplatesPage;
