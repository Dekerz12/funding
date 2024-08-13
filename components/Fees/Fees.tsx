import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  generalFees,
  otherBankFees,
  HKLFees,
  windsor,
  feesAdd,
  usLender,
  newRez,
  balloon,
  trac,
} from "@/lib/data";

const Fees = () => {
  return (
    <div className="flex-1 gap-4 p-12 flex">
      <Card>
        <CardHeader>
          <CardTitle>Fees We Always Net</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {generalFees.map((fee) => (
              <p key={fee} className="text-base">
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
                <p key={fee} className="text-base">
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
            <div className="flex flex-col gap-2">
              {otherBankFees.map((fee) => (
                <p key={fee} className="text-base">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>HKL Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 list-disc ml-4">
              {HKLFees.map((fee) => (
                <li key={fee} className="text-base">
                  {fee}
                </li>
              ))}
            </ul>
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
                <p key={fee} className="text-base">
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
                <p key={fee} className="text-base">
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
                <p key={fee} className="text-base">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>For Balloon - UWM Lender</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {balloon.map((fee) => (
                <p key={fee} className="text-base">
                  {fee}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>For Trac Loans - UWM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {trac.map((fee) => (
                <p key={fee} className="text-base">
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

export default Fees;
