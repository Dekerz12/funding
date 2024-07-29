"use client";
import { Modal } from "@/components/Calculator/Modal";
import WireForm from "@/components/Calculator/WireForm";
import WireTable from "@/components/Calculator/WireTable";
import Docs from "@/components/Docs/Docs";
import Email from "@/components/Email/Email";
import Fees from "@/components/Fees/Fees";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { CircleDollarSign, FolderOpen, Mail } from "lucide-react";

const CalculatorPage = () => {
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

          <Modal name="Gather Docs">
            <Docs />
          </Modal>
        </div>
        <WireForm />
      </div>
      <WireTable />
    </div>
  );
};

export default CalculatorPage;
