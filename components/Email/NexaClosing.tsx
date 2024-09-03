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
          NEXA CLOSING - {borrower} - {loan_number} - {property}
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-xl mb-4">Template</h1>
        <p>Hi Title Team,</p>
        <div>
          {" "}
          <p>
            My name is {funder}, your funder for this loan.{" "}
            <span className="font-bold">
              Please confirm if we are balanced at{" "}
              <span className="text-2xl">
                ${(loan_amount - totalDeduction).toLocaleString()}
              </span>
              .
            </span>
          </p>
          <p className="font-bold ">
            Your confirmation is required before we request and order the wire
            to prevent potential fees and delay.
          </p>
        </div>

        <p>Here is the wire breakdown for your reference:</p>

        <p>
          Attached to this email is the CD containing the highlighted fees we
          are netting out of the wire. Let me know if there are any changes to
          the Final CD.
        </p>
      </div>

      <p className="font-bold mt-4">Please confirm the following:</p>

      <ul className="list-disc ml-12 mt-4 mb-4 font-bold">
        <li>Are the attached Wire Instructions accurate?</li>
        <li>What time is the borrower scheduled to sign?</li>
        <li>ETA for the Signed Closing Package.</li>
      </ul>
      <span className="font-bold text-base">
        Furthermore, I have included the Funding Instructions in this email.
        Please review and adhere to the provided instructions.
      </span>
    </div>
  );
};

export default NexaClosing;
