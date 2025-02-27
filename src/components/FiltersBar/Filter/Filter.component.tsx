import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { Slider } from "@heroui/slider";
import { useModalStore } from "../../../store/modalStore";
import { useState } from "react";
import { RiCircleFill } from "react-icons/ri";

// Filter not implemented yet

export default function Filter() {
  const [selectedSize, setSelectedSize] = useState<string>("");
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
        body: "px-0",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="uppercase font-sans font-medium flex items-center text-xl gap-3 border-b border-neutral-300">
              Filters
            </DrawerHeader>

            <DrawerBody>
              <Accordion
                selectionMode="multiple"
                defaultSelectedKeys={["1", "2", "3", "4"]}
                itemClasses={{
                  base: "px-6",
                  title:
                    "font-condensed font-medium uppercase text-sm tracking-widest transition-colors data-[open=true]:text-neutral-950 text-neutral-500",
                  indicator:
                    "transition-colors data-[open=true]:text-neutral-950 text-neutral-500",
                  content: "text-neutral-950 font-sans text-sm font-light pb-6",
                }}
              >
                <AccordionItem key="1" aria-label="Color" title="Color">
                  <div className="flex gap-2.5 items-center">
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
                        className="p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer bg-white"
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
                        className="p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer bg-blue-900"
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
                        className="p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer bg-yellow-950"
                      ></label>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem
                  key="2"
                  aria-label="Size / capacity"
                  title="Size / capacity"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <input
                        checked={selectedSize === "small"}
                        id="small"
                        type="checkbox"
                        value={"small"}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="small"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Default checkbox
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        checked={selectedSize === "medium"}
                        id="medium"
                        type="checkbox"
                        value={"medium"}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="medium"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Checked state
                      </label>
                    </div>
                    <div className="flex items-center relative">
                      <input
                        checked={selectedSize === "big"}
                        id="big"
                        type="checkbox"
                        value={"big"}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="hidden"
                      />
                      <RiCircleFill
                        size={8}
                        className={`absolute transition-opacity duration-200 ${
                          selectedSize === "big" ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <label
                        htmlFor="big"
                        className={`w-full cursor-pointer text-sm font-normal text-neutral-600  transition-transform duration-300 ${
                          selectedSize === "big"
                            ? "translate-x-4 text-neutral-900"
                            : ""
                        }`}
                      >
                        Big (30L - 45L)
                      </label>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Gender" title="Gender">
                  <ul className="flex flex-col gap-2.5 text-sm font-normal">
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
