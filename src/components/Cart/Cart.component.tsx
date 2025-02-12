import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { RiAddLine, RiCircleFill, RiSubtractLine } from "react-icons/ri";
import { useModalStore } from "../../store/modalStore";

export default function Cart() {
  const isCartOpen = useModalStore((state) => state.isCartOpen);
  const setCartOpen = useModalStore((state) => state.setCartOpen);
  return (
    <Drawer
      isOpen={isCartOpen}
      onOpenChange={() => setCartOpen(!isCartOpen)}
      size="lg"
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
            <DrawerHeader className="uppercase font-sans font-medium flex items-center text-xl gap-3">
              Cart
              <span className="text-xs px-2 py-0.5 bg-neutral-950 text-neutral-50">
                3
              </span>
            </DrawerHeader>

            <DrawerBody>
              <div className="border-y border-neutral-300 py-4">
                <p className="px-6 text-neutral-500 font-sans text-sm font-normal">
                  Spend 235 kr more and get free shipping!
                </p>
              </div>

              <div className="flex flex-col gap-6 px-6 py-4">
                <article className="flex gap-4 items-center">
                  <img
                    src="/city.jpg"
                    alt="City"
                    className="aspect-square w-[120px] object-cover"
                  />
                  <section className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-950 text-sm font-medium font-condensed">
                        Huger Backpack
                      </span>
                      <span className="text-neutral-500 text-sm font-medium font-condensed">
                        2995 kr
                      </span>
                    </div>
                    <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                      S / Grey
                    </span>
                    <div className="flex justify-between items-center mt-3">
                      <div className="border border-neutral-300 inline-flex ">
                        <button className="px-2.5 py-2 text-gray-700 cursor-pointer">
                          <RiSubtractLine />
                        </button>
                        <span className="px-2.5 py-2 text-sm font-normal">
                          1
                        </span>
                        <button className="px-2.5 py-2 text-gray-700 cursor-pointer ">
                          <RiAddLine />
                        </button>
                      </div>
                      <button className="text-xs  font-sans font-normal text-neutral-600 underline underline-offset-3 cursor-pointer">
                        Remove
                      </button>
                    </div>
                  </section>
                </article>

                <article className="flex gap-4 items-center">
                  <img
                    src="/city.jpg"
                    alt="City"
                    className="aspect-square w-[120px] object-cover"
                  />
                  <section className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-950 text-sm font-medium font-condensed">
                        Huger Backpack
                      </span>
                      <span className="text-neutral-500 text-sm font-medium font-condensed">
                        2995 kr
                      </span>
                    </div>
                    <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                      S / Grey
                    </span>
                    <div className="flex justify-between items-center mt-3">
                      <div className="border border-neutral-300 inline-flex ">
                        <button className="px-2.5 py-2 text-gray-700 cursor-pointer">
                          <RiSubtractLine />
                        </button>
                        <span className="px-2.5 py-2 text-sm font-normal">
                          1
                        </span>
                        <button className="px-2.5 py-2 text-gray-700 cursor-pointer ">
                          <RiAddLine />
                        </button>
                      </div>
                      <button className="text-xs  font-sans font-normal text-neutral-600 underline underline-offset-3 cursor-pointer">
                        Remove
                      </button>
                    </div>
                  </section>
                </article>

                <article className="flex gap-4 items-center">
                  <img
                    src="/city.jpg"
                    alt="City"
                    className="aspect-square w-[120px] object-cover"
                  />
                  <section className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-950 text-sm font-medium font-condensed">
                        Huger Backpack
                      </span>
                      <span className="text-neutral-500 text-sm font-medium font-condensed">
                        2995 kr
                      </span>
                    </div>
                    <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                      S / Grey
                    </span>
                    <div className="flex justify-between items-center mt-3">
                      <div className="border border-neutral-300 inline-flex ">
                        <button className="px-2.5 py-2 text-gray-700 cursor-pointer">
                          <RiSubtractLine />
                        </button>
                        <span className="px-2.5 py-2 text-sm font-normal">
                          1
                        </span>
                        <button className="px-2.5 py-2 text-gray-700 cursor-pointer ">
                          <RiAddLine />
                        </button>
                      </div>
                      <button className="text-xs  font-sans font-normal text-neutral-600 underline underline-offset-3 cursor-pointer">
                        Remove
                      </button>
                    </div>
                  </section>
                </article>
              </div>
            </DrawerBody>
            <DrawerFooter className="flex flex-col gap-4 border-t border-neutral-300 py-8">
              <p className="text-neutral-500 font-sans text-sm font-normal mb-2">
                Taxes and shipping calculated at checkout
              </p>
              <button
                onClick={onClose}
                className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer"
              >
                Checkout
                <span className="mx-6">
                  <RiCircleFill size={5} />
                </span>
                2595 kr
              </button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
