"use client";
import { useStore } from "@/lib/slice";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { Fee } from "@/lib/store";

const SectionForm = ({
  section_name,
  fees,
}: {
  section_name: string;
  fees: Fee[] | null;
}) => {
  const wire = useStore((state) => state);
  const { selectedSections, updateSelections, addFee, deleteFee, updateFee } =
    wire;
  const form = useForm();
  const { toast } = useToast();

  function onSubmit(data: any) {
    // Convert object to array of key-value pairs
    Object.keys(data).forEach(
      (key) => data[key] === undefined && delete data[key]
    );
    const arr = Object.entries(data);

    // Initialize an empty result object
    const result: any = {};

    // Iterate through the array and group items by index
    arr.forEach(([key, value]) => {
      const match = key.match(/(name|amount)(\d+)/);
      if (match) {
        const [, type, index] = match;
        const propName = `item${index}`;
        if (!result[propName]) {
          result[propName] = {};
        }
        result[propName][type] = value;
      }
    });

    // Convert the grouped result object back to an array
    const groupedArray = Object.values(result) as {
      name: string;
      amount: string;
    }[];

    const payload = groupedArray.map((group, i) => ({
      id: i,
      name: group.name,
      amount: parseFloat(group.amount),
    }));

    // Sum
    // groupedArray.reduce(
    //   (accumulator, currentValue) =>
    //     accumulator + parseFloat(currentValue.amount),
    //   0
    // )
    console.log(data);

    updateFee(section_name, payload as Fee[]);
    toast({
      title: `Section ${section_name[0]}`,
      description: "Updated Successfully",
    });
  }

  return (
    <div key={section_name}>
      {" "}
      <div className="space-x-4">
        <label>{section_name}</label>{" "}
        <Button
          onClick={() => {
            addFee(section_name, Array.isArray(fees) ? fees.length : 0);
          }}
        >
          Add Fee
        </Button>
      </div>
      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {Array.isArray(fees) &&
            fees.map((fee, i) => (
              <div
                key={i + section_name}
                className="flex gap-2 mt-4 items-center"
              >
                <FormField
                  control={form.control}
                  name={`name${i}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`amount${i}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="number" placeholder="Amount" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Trash
                  className="text-red-500 cursor-pointer"
                  onClick={() => {
                    deleteFee(section_name, fee.id);
                    form.unregister(`name${fee.id}`);
                    form.unregister(`amount${fee.id}`);
                  }}
                />
              </div>
            ))}
          {Array.isArray(fees) && fees.length ? (
            <Button type="submit">
              Update Section {section_name[0]} total
            </Button>
          ) : null}
        </form>
      </Form>
    </div>
  );
};

export default SectionForm;
