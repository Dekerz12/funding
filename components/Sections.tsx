import { TableRow, TableCell } from "@/components/ui/table";
import { Fee } from "@/lib/slice";
import React from "react";

const Sections = ({
  section_name,
  fees,
}: {
  section_name: string;
  fees: Fee[] | null;
}) => {
  // need section name,fees name fees amount

  return (
    <React.Fragment>
      <TableRow className="sections-bordered">
        <TableCell className="border">{section_name}</TableCell>
        <TableCell className="border">
          ${fees?.reduce((acc, curr) => acc + curr.amount, 0) || 0}
        </TableCell>
      </TableRow>

      {Array.isArray(fees) && fees.length && fees.some((fee) => fee.amount > 0)
        ? fees.map((fee) => (
            <TableRow key={fee.name} className="sections">
              <TableCell className="border">{fee.name}</TableCell>
              <TableCell className="border">${fee.amount}</TableCell>
            </TableRow>
          ))
        : null}
    </React.Fragment>
  );
};

export default Sections;
