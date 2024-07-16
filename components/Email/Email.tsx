"use client";
import { useStore } from "@/lib/slice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Email = () => {
  const wire = useStore((state) => state);
  const {
    selectedSections,
    loan_amount,
    borrower,
    loan_number,
    funder,
    changeFunder,
    property,
    changeProperty,
  } = wire;
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
      <div className="flex flex-col gap-2 mb-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="funder_name">Funder</Label>
          <Input
            type="text"
            value={funder}
            id="funder_name"
            placeholder="Funder Name"
            onChange={(e) => changeFunder(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="ln">Property</Label>
          <Input
            type="text"
            value={property}
            id="property"
            placeholder="Property"
            onChange={(e) => changeProperty(e.target.value)}
          />
        </div>
      </div>

      <p className="mb-8">
        AXEN CLOSING - {borrower} - {loan_number} - {property}
      </p>
      {/* prettier-ignore */}
      <p style={{ whiteSpace: "pre" }}>
          {`My name is ${funder}, your funder for this loan. Please confirm if we are balanced at $${(loan_amount - totalDeduction).toLocaleString()}.
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

export default Email;
