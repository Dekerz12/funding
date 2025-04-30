import { useStore } from "@/lib/slice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const NexaClosing = () => {
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
    <div className="mx-auto py-12">
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
      <div className="">
        <h1 className="font-bold text-xl mb-4">Subject Line</h1>
        <p className="mb-8">
          NEXA100 Funding Wire - {loan_number} - {borrower} - {property}
        </p>

        <p>
          NEXA NDC Funding Wire - {loan_number} - {borrower} - {property}
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-xl mb-4">Template</h1>
        <p>Hi Title Team,</p>

        <p className="italic">
          To avoid confusion and ensure a prompt response, please reply only to
          this email thread regarding the funding wire.
        </p>
        <p className="font-bold ">Please confirm the following:</p>

        <ul className="list-disc ml-12">
          <li>
            Are we balanced at $
            {(loan_amount - totalDeduction).toLocaleString()} The wire breakdown
            is included below for reference.
          </li>
          <li>
            What&apos;s the best number to call to verify the wire instructions?
          </li>
          <li>When and where is the borrower scheduled to sign?</li>
        </ul>

        <p className="text-red-500 font-bold">
          Your confirmation is required before we request and order the wire to
          prevent potential fees and delays.
        </p>

        <p>
          Attached to this email is the CD containing the highlighted fees we
          are netting out of the wire. Let me know if there are any changes to
          the Final CD.
        </p>

        <p className="text-base">
          Furthermore, I have included the Funding Instructions in this email.
          Please review and adhere to the provided instructions.
        </p>

        <p className="italic">
          Please note: You will receive a separate email from the Reviewer of
          this loan outlining the requirements to authorize funding prior to
          disbursement.
        </p>
      </div>
    </div>
  );
};

export default NexaClosing;
