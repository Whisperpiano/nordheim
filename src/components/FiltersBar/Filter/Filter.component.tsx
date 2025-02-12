import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { Slider } from "@heroui/slider";
import { useModalStore } from "../../store/modalStore";

export default function Filter() {
  const isFiltersOpen = useModalStore((state) => state.isFiltersOpen);
  const setFiltersOpen = useModalStore((state) => state.setFiltersOpen);

  return (
    <Drawer
      isOpen={isFiltersOpen}
      onOpenChange={() => setFiltersOpen(!isFiltersOpen)}
      size="sm"
      placement="right"
      classNames={{
        backdrop: "bg-black/50",
        base: "bg-neutral-50 rounded-none",
        closeButton: "translate-y-2.5 cursor-pointer",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="uppercase font-sans font-medium flex items-center text-xl gap-3">
              Filters
            </DrawerHeader>

            <DrawerBody>
              <Accordion
                selectionMode="multiple"
                defaultSelectedKeys={["1", "2", "3", "4"]}
                itemClasses={{
                  base: "border-b border-neutral-200 first:border-t",
                  title:
                    "font-condensed font-medium uppercase text-sm mb-3 tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500",
                  indicator:
                    "transition-colors data-[open=true]:text-neutral-950 text-neutral-500",
                  content:
                    "text-neutral-950 font-sans text-sm font-light pt-0 pb-4",
                  trigger: "cursor-pointer",
                }}
                className="px-0 mt-8"
              >
                <AccordionItem key="1" aria-label="Color" title="Color">
                  <div className="flex gap-2 items-center mt-2 ml-2">
                    <div>
                      <input
                        type="radio"
                        name="color"
                        value="grey"
                        id="grey"
                        className="hidden peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="grey"
                        className="p-4 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-amber-700 peer-checked:outline-offset-2 cursor-pointer"
                      ></label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                        id="orange"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="orange"
                        className="p-4 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-amber-700 peer-checked:outline-offset-2 cursor-pointer"
                      ></label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="color"
                        value="blue"
                        id="blue"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="blue"
                        className="p-4 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-amber-700 peer-checked:outline-offset-2 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem
                  key="2"
                  aria-label="Size / capacity"
                  title="Size / capacity"
                >
                  <ul>
                    <li className="flex items-center gap-2">Small (0 - 15L)</li>
                    <li className="flex items-center gap-2">
                      Medium (15L - 30L)
                    </li>
                    <li className="flex items-center gap-2">
                      Large (30L - 45L)
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Gender" title="Gender">
                  <ul>
                    <li className="flex items-center gap-2">Men</li>
                    <li className="flex items-center gap-2">Women</li>
                    <li className="flex items-center gap-2">Unisex</li>
                  </ul>
                </AccordionItem>

                <AccordionItem key="4" aria-label="Price" title="Price">
                  <Slider
                    className="max-w-md"
                    defaultValue={[100, 500]}
                    formatOptions={{ style: "currency", currency: "USD" }}
                    label="Price Range"
                    maxValue={1000}
                    minValue={0}
                    step={50}
                  />
                </AccordionItem>
              </Accordion>
            </DrawerBody>
            <DrawerFooter className="flex flex-col gap-4 border-t border-neutral-300 py-8">
              <button
                onClick={onClose}
                className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer"
              >
                View results
              </button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
