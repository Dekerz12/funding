"use client";
import { Modal } from "@/components/Calculator/Modal";
import WireForm from "@/components/Calculator/WireForm";
import WireTable from "@/components/Calculator/WireTable";
import Email from "@/components/Email/Email";
import Fees from "@/components/Fees/Fees";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { copyTable } from "@/lib/utils";

const CalculatorPage = () => {
  const { toast } = useToast();
  return (
    <div className="flex-1 flex p-8">
      <div>
        <div className="flex gap-4">
          <Modal name="Fees">
            <Fees />
          </Modal>

          <Modal name="Email Template">
            <Email />
          </Modal>

          <Button
            onClick={() => {
              copyTable();
              toast({
                title: "Table Copied Successfully",
              });
            }}
          >
            Copy Table
          </Button>
        </div>
        <WireForm />
      </div>
      <WireTable />
    </div>
  );
};

export default CalculatorPage;
