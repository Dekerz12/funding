"use client";
import { useStore } from "@/lib/slice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import NexaClosing from "./NexaClosing";
import TracClosing from "./TracClosing";

const Email = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="nexa">Nexa Closing</TabsTrigger>
        <TabsTrigger value="trac">Trac Loan</TabsTrigger>
      </TabsList>
      <TabsContent value="nexa">
        <NexaClosing />
      </TabsContent>
      <TabsContent value="trac">
        <TracClosing />
      </TabsContent>
    </Tabs>
  );
};

export default Email;
