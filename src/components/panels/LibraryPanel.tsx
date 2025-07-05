import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function LibraryPanel({
  SECTION_LIBRARY,
  handleAddSection,
  RenderSectionPreview,
}: any) {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-3">
        {SECTION_LIBRARY.map((section: any, idx: number) => (
          <Accordion
            type="single"
            collapsible
            key={idx}
            className="border-b-2 pb-1"
          >
            <AccordionItem
              value={section.type}
              className="border-none cursor-pointer"
            >
              <AccordionTrigger className="font-bold text-sm lg:text-base">
                {section.name}
              </AccordionTrigger>
              <AccordionContent>
                {section.variants.map((variant: any, vIdx: number) => (
                  <Card
                    key={vIdx}
                    className="flex w-full gap-2 mb-2 cursor-pointer p-2 hover:bg-gray-50"
                  >
                    <div
                      className="cursor-pointer w-full"
                      onClick={() => handleAddSection(section.type, vIdx)}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddSection(section.type, vIdx)}
                        className="w-full justify-start text-xs lg:text-sm"
                      >
                        {variant.name}
                      </Button>
                      <div className="mt-2 scale-75 lg:scale-90 origin-top-left">
                        <RenderSectionPreview
                          section={{
                            type: section.type,
                            props: variant.defaultProps,
                          }}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
