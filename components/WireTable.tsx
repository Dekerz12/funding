import { Table, TableBody } from "@/components/ui/table";
import Header from "./Header";
import Sections from "./Sections";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useStore } from "@/lib/slice";
import { format } from "date-fns";

const WireTable = () => {
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
    selectedSections,
  } = wire;

  return (
    <div className="basis-1/3 p-6 flex items-start mt-8 ">
      <Table>
        <TableBody>
          {/* Header */}
          <Header
            borrower={borrower}
            ln={loan_number}
            signing_date={format(signing_date, "MM/dd")}
            funding_date={format(funding_date, "MM/dd")}
            loan_amount={loan_amount}
          />

          {/* Sections */}
          {selectedSections.map((section, i) => (
            <Sections
              key={i}
              section_name={section.section_name}
              fees={section.fees}
            />
          ))}

          {/* Footer */}
          <Footer />
        </TableBody>
      </Table>
    </div>
  );
};

export default WireTable;
