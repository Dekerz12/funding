import { TableRow, TableCell } from "@/components/ui/table";
import { useStore } from "@/lib/slice";

const Footer = () => {
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
    <>
      <TableRow>
        <TableCell className="border"></TableCell>
        <TableCell className="border"></TableCell>
      </TableRow>
      <TableRow className="section-deductions">
        <TableCell className="border font-bold">Total Deductions:</TableCell>
        <TableCell className="border font-bold">${totalDeduction}</TableCell>
      </TableRow>
      <TableRow className="section-closing">
        <TableCell className="border font-bold">
          Total Needed for Closing:
        </TableCell>
        <TableCell className="border font-bold">
          ${loan_amount - totalDeduction}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Footer;
