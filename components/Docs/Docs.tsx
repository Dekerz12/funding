"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const firstfunding_docs = [
  "DT Closing",
  "N/A",
  "Wire",
  "Credit Report",
  "Appraisal",
  "Commitment",
  "Protection",
  "Lock",
  "Approval",
  "UWM  > Menu > AUS > Look for Check mark > AUS result > Print",
  "Universal Loan",
  "Rate Note",
  "Deed Of Trust",
];

const firstfunding_docs2 = [
  "Final Closing Package - ",
  "Final Closing Disclosure -",
  "Wire Instructions -",
  "Credit Report -",
  "Appraisal - ",
  "Title Commitment with Legal Description -",
  "ICL - CPL - EO -",
  "Investor Lock -",
  "Investor CTC - Delegated CTC -",
  "DU Underwriting Findings -",
  "Loan Application -",
  "Note -",
  "Mortgage",
];

const pcb_docs = [
  { keyword: "DT Closing", doc_name: "Final Closing Package -" },
  { keyword: "N/A", doc_name: "Final Closing Disclosure -" },
  { keyword: "Wire", doc_name: "Wire instructions -" },
  { keyword: "Approval", doc_name: "Investor CTC - Delegated CTC -" },
  { keyword: "Lock", doc_name: "Investor lock -" },
  { keyword: "Protection", doc_name: "ICL - CPL - EO -" },
  { keyword: "Rate Note", doc_name: "NOTE -" },
  { keyword: "N/A", doc_name: "Wire Summary -" },
];

const firstBank_docs = [
  { keyword: "DT Closing", doc_name: "Final Closing Package -" },
  { keyword: "N/A", doc_name: "Final Closing Disclosure -" },
  { keyword: "Wire", doc_name: "Wire instructions -" },
  { keyword: "Approval", doc_name: "Investor CTC - Delegated CTC -" },
  { keyword: "Lock", doc_name: "Investor lock -" },
  { keyword: "Protection", doc_name: "ICL - CPL - EO -" },
  { keyword: "Optional", doc_name: "Appraisal -" },
  {
    keyword: "UWM  > Menu > AUS > Look for Check mark > AUS result > Print",
    doc_name: "AUS - DU Underwriting -",
  },
  { keyword: "Rate Note", doc_name: "Note -" },
  { keyword: "(Below Note)", doc_name: "Allonge -" },
  { keyword: "N/A", doc_name: "FNM 3.2 FIle -" },
];

const originBank_docs = [
  { keyword: "DT Closing", doc_name: "Final Closing Package -" },
  { keyword: "N/A", doc_name: "Final Closing Disclosure -" },
  { keyword: "Wire", doc_name: "Wire instructions -" },

  { keyword: "Lock", doc_name: "Investor Lock -" },
  { keyword: "Appraisal", doc_name: "Appraisal - (Full Pages)" },
  { keyword: "Approval", doc_name: "Approval Letter CTC -" },
  { keyword: "Protection", doc_name: "Closing Protection Letter -" },
  {
    keyword: "UWM  > Menu > AUS > Look for Check mark > AUS result > Print",
    doc_name: "AUS Underwriting Approval -",
  },
  { keyword: "Universal Loan", doc_name: "1003 Loan Application -" },
  { keyword: "Rate Note", doc_name: "NOTE -" },
  { keyword: "N/A", doc_name: "FNM 3.2 FIle -" },
];

const Docs = () => {
  const { toast } = useToast();
  return (
    <div className="mx-auto">
      <Tabs defaultValue="first_funding" className="">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="first_funding">First Funding</TabsTrigger>
          <TabsTrigger value="pcb">PLAINS COMMERCE BANK</TabsTrigger>
          <TabsTrigger value="first_bank">FIRST BANK</TabsTrigger>
          <TabsTrigger value="origin_bank">ORIGIN BANK</TabsTrigger>
        </TabsList>
        <TabsContent value="first_funding">
          <Card>
            <CardHeader>
              <CardTitle>Cheat Sheet</CardTitle>
              <CardDescription>
                Search these keywords to get files from UWM.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <div>
                  <h1 className="font-bold mb-4 text-lg">Copy Keyword</h1>
                  <div className="flex flex-col gap-2">
                    {firstfunding_docs.map((doc) => {
                      return (
                        <Button
                          onClick={(e: any) => {
                            navigator.clipboard.writeText(e.target.innerHTML);
                            toast({
                              title: e.target.innerHTML,
                              description: "Copied Successfully",
                            });
                          }}
                          key={doc}
                        >
                          {doc}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h1 className="font-bold mb-4 text-lg">Copy Document Name</h1>
                  <div className="flex flex-col gap-2">
                    {firstfunding_docs2.map((doc) => {
                      return (
                        <Button
                          onClick={(e: any) => {
                            navigator.clipboard.writeText(e.target.innerHTML);
                            toast({
                              title: e.target.innerHTML,
                              description: "Copied Successfully",
                            });
                          }}
                          key={doc}
                        >
                          {doc}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="mt-2">{`(Lending pad > Search Loan number > Open > Gear Icon > Export > FNM > Download)`}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pcb">
          <Card>
            <CardHeader>
              <CardTitle>Cheat Sheet</CardTitle>
              <CardDescription>
                Search these keywords to get files from UWM.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex ">
                <h1 className="font-bold mb-4 text-lg flex-1">Copy Keyword</h1>
                <h1 className="font-bold mb-4 text-lg flex-1">
                  Copy Document Name
                </h1>
              </div>

              <div className="flex flex-col gap-2">
                {pcb_docs.map((doc) => {
                  return (
                    <div key={doc.doc_name} className="flex gap-2">
                      <Button
                        className="flex-1"
                        onClick={(e: any) => {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          toast({
                            title: e.target.innerHTML,
                            description: "Copied Successfully",
                          });
                        }}
                      >
                        {doc.keyword}
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={(e: any) => {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          toast({
                            title: e.target.innerHTML,
                            description: "Copied Successfully",
                          });
                        }}
                      >
                        {doc.doc_name}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="first_bank">
          <Card>
            <CardHeader>
              <CardTitle>Cheat Sheet</CardTitle>
              <CardDescription>
                Search these keywords to get files from UWM.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex ">
                <h1 className="font-bold mb-4 text-lg flex-1">Copy Keyword</h1>
                <h1 className="font-bold mb-4 text-lg flex-1">
                  Copy Document Name
                </h1>
              </div>

              <div className="flex flex-col gap-2">
                {firstBank_docs.map((doc) => {
                  return (
                    <div key={doc.doc_name} className="flex gap-2">
                      <Button
                        className="flex-1"
                        onClick={(e: any) => {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          toast({
                            title: e.target.innerHTML,
                            description: "Copied Successfully",
                          });
                        }}
                      >
                        {doc.keyword}
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={(e: any) => {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          toast({
                            title: e.target.innerHTML,
                            description: "Copied Successfully",
                          });
                        }}
                      >
                        {doc.doc_name}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="origin_bank">
          <Card>
            <CardHeader>
              <CardTitle>Cheat Sheet</CardTitle>
              <CardDescription>
                Search these keywords to get files from UWM.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex ">
                <h1 className="font-bold mb-4 text-lg flex-1">Copy Keyword</h1>
                <h1 className="font-bold mb-4 text-lg flex-1">
                  Copy Document Name
                </h1>
              </div>

              <div className="flex flex-col gap-2">
                {originBank_docs.map((doc) => {
                  return (
                    <div key={doc.doc_name} className="flex gap-2">
                      <Button
                        className="flex-1"
                        onClick={(e: any) => {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          toast({
                            title: e.target.innerHTML,
                            description: "Copied Successfully",
                          });
                        }}
                      >
                        {doc.keyword}
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={(e: any) => {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          toast({
                            title: e.target.innerHTML,
                            description: "Copied Successfully",
                          });
                        }}
                      >
                        {doc.doc_name}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Docs;
