import { TableRow, TableCell } from "@/components/ui/table";
interface HeaderProps {
  borrower: string;
  ln: string;
  signing_date: string;
  funding_date: string;
  loan_amount: number;
}

const Header = ({
  borrower,
  funding_date,
  ln,
  signing_date,
  loan_amount,
}: HeaderProps) => {
  return (
    <>
      {/* Header */}
      <TableRow className="section-border">
        <TableCell className="border">Borrower</TableCell>
        <TableCell className="border">{borrower}</TableCell>
      </TableRow>
      <TableRow className="section-border">
        <TableCell className="border font-bold">Loan Number</TableCell>
        <TableCell className="border">{ln}</TableCell>
      </TableRow>
      <TableRow className="section-border">
        <TableCell className="border font-bold">Signing Date</TableCell>
        <TableCell className="border">{signing_date}</TableCell>
      </TableRow>
      <TableRow className="section-border">
        <TableCell className="border font-bold">Funding Date</TableCell>
        <TableCell className="border">{funding_date}</TableCell>
      </TableRow>
      <TableRow className="sections text-wrap">
        <TableCell className="border"></TableCell>
        <TableCell className="border font-bold">
          Calculation of Amount Needed by Settlement Agent for Closing
        </TableCell>
      </TableRow>
      <TableRow className="sections-bordered">
        <TableCell className="border">Loan Amount</TableCell>
        <TableCell className="border">${loan_amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="border"></TableCell>
        <TableCell className="border"></TableCell>
      </TableRow>
    </>
  );
};

export default Header;
