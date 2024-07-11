import DatePicker from "./DatePicker";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useStore } from "@/lib/slice";
import { SectionSelector } from "./SectionSelector";
import { Button } from "./ui/button";

const WireForm = () => {
  const wire = useStore((state) => state);
  const {
    borrower,
    changeBorrower,
    changeFnDate,
    changeLoanAmount,
    changeLoanNumber,
    changeSnDate,
    funding_date,
    loan_amount,
    loan_number,
    signing_date,
  } = wire;

  return (
    <div className="flex-1 p-6 flex flex-col gap-4 mt-8 ">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="borrower">Borrower</Label>
        <Input
          type="text"
          value={borrower}
          id="borrower"
          placeholder="Borrower Name"
          onChange={(e) => changeBorrower(e.target.value)}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="ln">Loan Number</Label>
        <Input
          type="text"
          value={loan_number}
          id="ln"
          placeholder="Loan Number"
          onChange={(e) => changeLoanNumber(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Signing Date</Label>
        <DatePicker date={signing_date} setDate={changeSnDate} />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Funding Date</Label>
        <DatePicker date={funding_date} setDate={changeFnDate} />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="amount">Loan Amount</Label>
        <Input
          type="number"
          value={loan_amount}
          id="amount"
          placeholder="Loan Amount"
          onChange={(e) => changeLoanAmount(e.target.value)}
        />
      </div>

      <SectionSelector />
    </div>
  );
};

export default WireForm;
