import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const fees_net = [];

const generalFees = [
  "GRMA Fee for all Georgia Loans $10",
  "All Section A fees except (L) paid by others",
  "All section G fees",
  "All Fees payable to AXEN and Lender",
  "MERS",
  "Credit report (unless POC or Paid by others)",
  "Credit Check (section B)",
  "Tax Service",
  "Flood Cert",
  "Mortage Insurance Premium (FHA)/ Mi Upfront / UFMIP Refund",
  "VA Funding Fee (VA Loans)",
  "Rural Development (USDA) example:  Guarantee, USDA technology",
  "HOA - confirm with closing assist",
  "Prepaid Interest",
  "All section G fees",
  "Doc prep fee to focus fulfillment",
];

const otherBankFees = [
  "Undisclosed Debt Monitoring/UDM (Kind Lending)",
  "Alterations (EPM)",
  "Electronic Doc Signing Fee to Snapdocs (MLB)",
  "203K Fees (EPM, MLB)",
  "Repair Holdback  (MLB)",
  "Contingency Report (MLB)",
];

const HKLFees = [
  "Temporary Rate Buydown (section h, k, l, payoffs and payments)",
  "Escrow holdback  (section k, l, payoffs and payments)",
  "Reno funds  (section k, l, payoffs and payments)",
  "Principal Reduction  (section k, l, payoffs and payments)",
  "Down Payment Assistance (section L) - negative in the wire summary",
  "Lender Appraisal Credit   (section k, l, payoffs and payments)",
];

const windsor = [
  "Contract Processing fee",
  "Flood cert",
  "Fraud Service",
  "Credit Report",
  "VOE",
  "MERS",
];

const feesAdd = [
  "Offset of fees (EPM)",
  "Appraisal credit",
  "MIP Refund",
  "Fees in Paid others (L)",
];

const usLender = ["Proceeds of Subordinate Lien (section L adjustment"];
const newRez = ["Closing Coordination Fee  $295"];

const FeesPage = () => {
  return (
    <div className="flex-1 gap-4 p-12 flex">
      <Card>
        <CardHeader>
          <CardTitle>Fees We Always Net</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {generalFees.map((fee) => (
              <p key={fee} className="text-lg">
                {fee}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Fees We Always Add</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {feesAdd.map((fee) => (
                <p key={fee} className="text-lg">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Other Bank Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {otherBankFees.map((fee) => (
                <p key={fee} className="text-lg">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>For Windsor Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {windsor.map((fee) => (
                <p key={fee} className="text-lg">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>For US Bank Lender Only</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {usLender.map((fee) => (
                <p key={fee} className="text-lg">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>For NewRez Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {newRez.map((fee) => (
                <p key={fee} className="text-lg">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeesPage;
