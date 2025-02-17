import { Accordion, AccordionItem } from "@heroui/accordion";
import { RiCheckLine } from "react-icons/ri";

interface ProductAccordionProps {
  description: string;
  features: string[];
}
export default function ProductAccordion({
  description,
  features,
}: ProductAccordionProps) {
  return (
    <Accordion
      selectionMode="single"
      defaultSelectedKeys={["1"]}
      itemClasses={{
        base: "first:border-t border-gray-300 last:border-b",
        title:
          "font-condensed font-medium uppercase text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500",
        indicator:
          "transition-colors data-[open=true]:text-neutral-950 text-neutral-500",
        content: "text-neutral-950 font-sans text-sm font-light pt-0 pb-6",
        trigger: "cursor-pointer",
      }}
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
            <span>20 L</span>
          </li>
          <li>
            <strong className="font-medium">Dimensions: </strong>
            <span>45 x 29 x 14.5 CM (H x W x D)</span>
          </li>
          <li>
            <strong className="font-medium">Weight: </strong>
            <span>0.891 KG</span>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
