"use client";
import WireForm from "@/components/Calculator/WireForm";
import WireTable from "@/components/Calculator/WireTable";

const CalculatorPage = () => {
  return (
    <div className="flex-1 flex">
      <WireForm />
      <WireTable />
    </div>
  );
};

export default CalculatorPage;
