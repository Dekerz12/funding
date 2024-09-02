"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import {
  firstfunding_docs,
  firstfunding_docs2,
  pcb_docs,
  firstBank_docs,
  originBank_docs,
} from "@/lib/data";
import { useStore } from "@/lib/slice";
import { Input } from "../ui/input";

const Docs = () => {
  const { toast } = useToast();
  const selectedBank = useStore((state) => state.selectedBank);
  const updateBank = useStore((state) => state.updateBank);
  const lastName = useStore((state) => state.borrowerLastName);
  const changeLastName = useStore((state) => state.updateLastName);
  return (
    <div className="mx-auto py-4">
      <Tabs defaultValue={selectedBank} className="">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="first_funding"
            onClick={() => {
              updateBank("first_funding");
            }}
          >
            First Funding
          </TabsTrigger>
          <TabsTrigger
            value="pcb"
            onClick={() => {
              updateBank("pcb");
            }}
          >
            PLAINS COMMERCE BANK
          </TabsTrigger>
          <TabsTrigger
            value="first_bank"
            onClick={() => {
              updateBank("first_bank");
            }}
          >
            FIRST BANK
          </TabsTrigger>
          <TabsTrigger
            value="origin_bank"
            onClick={() => {
              updateBank("origin_bank");
            }}
          >
            ORIGIN BANK
          </TabsTrigger>
        </TabsList>
        <TabsContent value="first_funding">
          <Card>
            <CardHeader>
              <CardTitle>Cheat Sheet</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex justify-evenly">
                <div>
                  <h1 className="font-bold mb-2 text-lg">
                    Get Final Closing Package
                  </h1>
                  <Button
                    onClick={(e: any) => {
                      navigator.clipboard.writeText(
                        `Final Closing Package - ${lastName}`
                      );
                      toast({
                        title: `Final Closing Package - ${lastName}`,
                        description: "Copied Successfully",
                      });
                    }}
                    key={"Final Closing Package"}
                  >
                    {"Final Closing Package"}
                  </Button>
                </div>
                <div>
                  <h1 className="font-bold mb-2 text-lg">Borrower Last Name</h1>
                  <Input
                    value={lastName}
                    onChange={(e) => {
                      changeLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div>
                  <h1 className="font-bold mb-2 text-lg">Copy Keyword</h1>

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
                  <h1 className="font-bold mb-2 text-lg">Copy Document Name</h1>
                  <div className="flex flex-col gap-2">
                    {firstfunding_docs2.map((doc) => {
                      return (
                        <Button
                          onClick={(e: any) => {
                            navigator.clipboard.writeText(
                              e.target.innerHTML + " " + lastName
                            );
                            toast({
                              title: e.target.innerHTML + " " + lastName,
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
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex justify-evenly">
                <div>
                  <h1 className="font-bold mb-2 text-lg">
                    Get Final Closing Package
                  </h1>
                  <Button
                    onClick={(e: any) => {
                      navigator.clipboard.writeText(
                        `Final Closing Package - ${lastName}`
                      );
                      toast({
                        title: `Final Closing Package - ${lastName}`,
                        description: "Copied Successfully",
                      });
                    }}
                    key={"Final Closing Package"}
                  >
                    {"Final Closing Package"}
                  </Button>
                </div>
                <div>
                  <h1 className="font-bold mb-2 text-lg">Borrower Last Name</h1>
                  <Input
                    value={lastName}
                    onChange={(e) => {
                      changeLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex ">
                <h1 className="font-bold mb-2 text-lg flex-1">Copy Keyword</h1>
                <h1 className="font-bold mb-2 text-lg flex-1">
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
                          navigator.clipboard.writeText(
                            e.target.innerHTML + " " + lastName
                          );
                          toast({
                            title: e.target.innerHTML + " " + lastName,
                            description: "Copied Successfully",
                          });
                        }}
                        key={doc.doc_name}
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
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex justify-evenly">
                <div>
                  <h1 className="font-bold mb-2 text-lg">
                    Get Final Closing Package
                  </h1>
                  <Button
                    onClick={(e: any) => {
                      navigator.clipboard.writeText(
                        `Final Closing Package - ${lastName}`
                      );
                      toast({
                        title: `Final Closing Package - ${lastName}`,
                        description: "Copied Successfully",
                      });
                    }}
                    key={"Final Closing Package"}
                  >
                    {"Final Closing Package"}
                  </Button>
                </div>
                <div>
                  <h1 className="font-bold mb-2 text-lg">Borrower Last Name</h1>
                  <Input
                    value={lastName}
                    onChange={(e) => {
                      changeLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex ">
                <h1 className="font-bold mb-2 text-lg flex-1">Copy Keyword</h1>
                <h1 className="font-bold mb-2 text-lg flex-1">
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
                          navigator.clipboard.writeText(
                            e.target.innerHTML + " " + lastName
                          );
                          toast({
                            title: e.target.innerHTML + " " + lastName,
                            description: "Copied Successfully",
                          });
                        }}
                        key={doc.doc_name}
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
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex justify-evenly">
                <div>
                  <h1 className="font-bold mb-2 text-lg">
                    Get Final Closing Package
                  </h1>
                  <Button
                    onClick={(e: any) => {
                      navigator.clipboard.writeText(
                        `Final Closing Package - ${lastName}`
                      );
                      toast({
                        title: `Final Closing Package - ${lastName}`,
                        description: "Copied Successfully",
                      });
                    }}
                    key={"Final Closing Package"}
                  >
                    {"Final Closing Package"}
                  </Button>
                </div>
                <div>
                  <h1 className="font-bold mb-2 text-lg">Borrower Last Name</h1>
                  <Input
                    value={lastName}
                    onChange={(e) => {
                      changeLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex ">
                <h1 className="font-bold mb-2 text-lg flex-1">Copy Keyword</h1>
                <h1 className="font-bold mb-2 text-lg flex-1">
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
                          navigator.clipboard.writeText(
                            e.target.innerHTML + " " + lastName
                          );
                          toast({
                            title: e.target.innerHTML + " " + lastName,
                            description: "Copied Successfully",
                          });
                        }}
                        key={doc.doc_name}
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
