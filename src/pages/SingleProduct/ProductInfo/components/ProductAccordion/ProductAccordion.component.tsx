import { Accordion, AccordionItem } from "@heroui/accordion";
import { RiCheckLine } from "react-icons/ri";
import { ProductAccordionProps } from "./ProductAccordion.types";
import { accordionStyles } from "./ProductAccordion.styles";
import { formatWeight } from "./ProductAccordion.utils";

export default function ProductAccordion({
  description,
  features,
  variants,
}: ProductAccordionProps) {
  const { volume, weight, dimensions } = variants[0];

  return (
    <Accordion
      selectionMode="single"
      defaultSelectedKeys={["1"]}
      itemClasses={accordionStyles}
      className="px-0 mt-8"
    >
      <AccordionItem key="1" aria-label="Description" title="Description">
        {description}
      </AccordionItem>

      <AccordionItem key="2" aria-label="Features" title="Features">
        <ul className="flex flex-col gap-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <RiCheckLine size={16} /> {feature}
            </li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem key="3" aria-label="Specifications" title="Specifications">
        <ul className="flex flex-col gap-2">
          <li>
            <strong className="font-medium">Volume: </strong>
            <span>{volume}L</span>
          </li>
          <li>
            <strong className="font-medium">Dimensions: </strong>
            <span>{dimensions} (H x W x D)</span>
          </li>
          <li>
            <strong className="font-medium">Weight: </strong>
            <span>{formatWeight(weight)} KG</span>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
