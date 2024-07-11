"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { sectionsNames } from "@/lib/data";
import { useStore } from "@/lib/slice";

import { Input } from "./ui/input";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { useForm } from "react-hook-form";
import SectionForm from "./SectionForm";

const items = sectionsNames;

export function SectionSelector() {
  const wire = useStore((state) => state);
  const { selectedSections, updateSelections, setShowTable } = wire;
  const form = useForm();

  return (
    <div>
      <div className="flex gap-2">
        {items.map((item: any) => (
          <div key={item.id} className="flex gap-2 items-center">
            <Checkbox
              checked={
                !!selectedSections.find(
                  (section) => section.section_name === item.id
                )
              }
              onCheckedChange={(checked: any) => {
                if (
                  selectedSections.find(
                    (section) => section.section_name === item.id
                  )
                ) {
                  const selections = [...selectedSections];
                  updateSelections(
                    selections.filter(
                      (section) => section.section_name !== item.id
                    )
                  );
                  return;
                }

                updateSelections([
                  ...selectedSections,
                  {
                    section_name: item.id,
                    sum: 0,
                    fees: null,
                  },
                ]);
              }}
            />
            {item.label}
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {selectedSections
          .sort(function (a, b) {
            if (a.section_name < b.section_name) {
              return -1;
            }
            if (a.section_name > b.section_name) {
              return 1;
            }
            return 0;
          })
          .map((section, i) => (
            <div key={section.section_name}>
              <SectionForm
                fees={section.fees}
                section_name={section.section_name}
              />
            </div>
          ))}
      </div>

      <Button
        className="mt-8"
        disabled={!selectedSections.some((section) => !!section.fees)}
        onClick={() => setShowTable()}
      >
        Generate Table
      </Button>
    </div>
  );
}
