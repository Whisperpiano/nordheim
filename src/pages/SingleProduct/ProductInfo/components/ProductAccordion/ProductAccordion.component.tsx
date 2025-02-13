import { Accordion, AccordionItem } from "@heroui/accordion";
import { RiCheckLine } from "react-icons/ri";

export default function ProductAccordion() {
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
        Experience the perfect balance between functionality and style with our
        premium Nordheim backpack. Designed for both urban adventures and
        outdoor expeditions, this eco-friendly backpack combines modern
        aesthetics with durable, sustainable materials.
      </AccordionItem>

      <AccordionItem key="2" aria-label="Features" title="Features">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <RiCheckLine size={16} /> Made from recycled and water-resistant
            nylon.
          </li>
          <li className="flex items-center gap-2">
            <RiCheckLine size={16} /> Padded compartment fits laptops up to 15".
          </li>
          <li className="flex items-center gap-2">
            <RiCheckLine size={16} /> Ergonomic shoulder straps with breathable
            padding.
          </li>
          <li className="flex items-center gap-2">
            <RiCheckLine size={16} /> Functional design
          </li>
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
