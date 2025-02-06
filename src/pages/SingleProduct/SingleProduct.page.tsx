import {
  RiAddLine,
  RiCheckLine,
  RiFileTextLine,
  RiFootprintLine,
  RiInfinityLine,
  RiLandscapeLine,
  RiLeafLine,
  RiLoopLeftLine,
  RiStarFill,
  RiStarHalfFill,
  RiSubtractLine,
  RiTruckLine,
} from "react-icons/ri";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function SingleProduct() {
  return (
    <>
      <article className="grid grid-cols-12 gap-16 mt-16 p-4">
        <img
          src="/mountain.jpg"
          alt="Mountain"
          className="object-cover aspect-[4/5] w-full col-span-7 max-h-[calc(100vh-100px)]"
        />
        <section className="col-span-5 px-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
              Huger Backpack
            </h1>
            <span className="text-neutral-500 font-sans text-lg font-normal">
              2995 kr
            </span>
            <div className="flex gap-2 items-center mt-1">
              <div className="flex  items-center">
                <RiStarFill size={16} />
                <RiStarFill size={16} />
                <RiStarFill size={16} />
                <RiStarFill size={16} />
                <RiStarHalfFill size={16} />
              </div>
              <span className="text-neutral-500 font-sans text-sm font-normal">
                5 reviews
              </span>
            </div>
          </div>

          <div>
            <div className="mt-8">
              <fieldset>
                <div>
                  <legend className="text-sm font-sans">
                    <strong>Size: </strong>15L
                  </legend>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <div>
                    <input
                      type="radio"
                      name="size"
                      value="15"
                      id="size-15"
                      className="hidden peer"
                      defaultChecked
                    />
                    <label
                      htmlFor="size-15"
                      className="cursor-pointer border border-neutral-300 peer-checked:border-red-500 font-condensed text-sm font-normal inline-flex px-4 py-2"
                    >
                      15L
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="size"
                      value="30"
                      id="size-30"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="size-30"
                      className="cursor-pointer border border-neutral-300 peer-checked:border-red-500 font-condensed text-sm font-normal inline-flex px-4 py-2"
                    >
                      30L
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="size"
                      value="45"
                      id="size-45"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="size-45"
                      className="cursor-pointer border border-neutral-300 peer-checked:border-red-500 font-condensed text-sm font-normal inline-flex px-4 py-2"
                    >
                      45L
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="mt-6">
              <fieldset>
                <div>
                  <legend className="text-sm font-sans">
                    <strong>Color: </strong>Grey
                  </legend>
                </div>
                <div className="flex gap-2 items-center mt-2">
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
              </fieldset>
            </div>
          </div>

          <div className="border border-neutral-300 inline-flex mt-8 ">
            <button className="px-2.5 py-2 text-gray-700 cursor-pointer">
              <RiSubtractLine />
            </button>
            <span className="px-2.5 py-2 text-sm font-normal">1</span>
            <button className="px-2.5 py-2 text-gray-700 cursor-pointer ">
              <RiAddLine />
            </button>
          </div>

          <div className="mt-8">
            <button className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer">
              Add to cart
            </button>

            <div className="flex justify-between items-center mt-2 ms-1">
              <span className="text-neutral-800 font-sans text-xs font-normal">
                Buy now pay later with <strong>Klarna</strong>
              </span>
              <span className="flex items-center text-xs font-medium text-neutral-950 me-1">
                <span className="flex w-2.5 h-2.5 bg-green-600 rounded-full me-1.5 shrink-0"></span>
                In stock
              </span>
            </div>
          </div>

          <Accordion
            selectionMode="single"
            defaultSelectedKeys={["1"]}
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
            <AccordionItem key="1" aria-label="Description" title="Description">
              Experience the perfect balance between functionality and style
              with our premium Nordheim backpack. Designed for both urban
              adventures and outdoor expeditions, this eco-friendly backpack
              combines modern aesthetics with durable, sustainable materials.
            </AccordionItem>

            <AccordionItem key="2" aria-label="Features" title="Features">
              <ul>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} /> Made from recycled and
                  water-resistant nylon.
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} /> Padded compartment fits laptops up
                  to 15".
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} /> Ergonomic shoulder straps with
                  breathable padding.
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} /> Functional design
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Specifications"
              title="Specifications"
            >
              <ul>
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

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col gap-3">
              <RiFileTextLine
                className="mx-auto text-neutral-950/75"
                size={20}
              />
              <span className="text-center font-condensed text-neutral-950/50 uppercase text-xs font-medium">
                2 year warranty
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <RiTruckLine className="mx-auto text-neutral-950/75" size={20} />
              <span className="text-center font-condensed text-neutral-950/50 uppercase text-xs font-medium">
                Free shipoping
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <RiLoopLeftLine
                className="mx-auto text-neutral-950/75"
                size={20}
              />
              <span className="text-center font-condensed text-neutral-950/50 uppercase text-xs font-medium">
                Free returns
              </span>
            </div>
          </div>
        </section>
      </article>

      <section className="p-4">
        <div className="flex items-center justify-between border-t border-neutral-300 py-10">
          <h2 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
            Customer reviews
          </h2>

          <div className="flex gap-2 items-center mt-1">
            <div className="flex  items-center">
              <RiStarFill size={24} />
              <RiStarFill size={24} />
              <RiStarFill size={24} />
              <RiStarFill size={24} />
              <RiStarHalfFill size={24} />
            </div>
            <span className="text-neutral-500 font-sans text-sm font-normal">
              4.97 out of 5
            </span>
          </div>
        </div>

        <article className="border-t border-neutral-300 py-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Tore E. Larsen</span>
            <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
              <span>
                <RiCheckLine size={16} />
              </span>
              Verified
            </span>
          </div>
          <div className="flex items-center mt-1">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarHalfFill size={16} />
          </div>
          <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
            Flott å reise med
          </h3>
          <p className="text-neutral-950 font-sans text-sm font-light mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </article>

        <article className="border-t border-neutral-300 py-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Ole-Kristian H</span>
            <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
              <span>
                <RiCheckLine size={16} />
              </span>
              Verified
            </span>
          </div>
          <div className="flex items-center mt-1">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarHalfFill size={16} />
          </div>
          <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
            Beautiful quality bag
          </h3>
          <p className="text-neutral-950 font-sans text-sm font-light mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </article>

        <article className="border-t border-neutral-300 py-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Tore E. Larsen</span>
            <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
              <span>
                <RiCheckLine size={16} />
              </span>
              Verified
            </span>
          </div>
          <div className="flex items-center mt-1">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarHalfFill size={16} />
          </div>
          <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
            Flott å reise med
          </h3>
          <p className="text-neutral-950 font-sans text-sm font-light mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </article>

        <article className="border-t border-b border-neutral-300 py-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Ole-Kristian H</span>
            <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
              <span>
                <RiCheckLine size={16} />
              </span>
              Verified
            </span>
          </div>
          <div className="flex items-center mt-1">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarHalfFill size={16} />
          </div>
          <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
            Beautiful quality bag
          </h3>
          <p className="text-neutral-950 font-sans text-sm font-light mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </article>

        <div className="max-w-[120px] mx-auto mt-8">
          <button className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer">
            Read more
          </button>
        </div>
      </section>

      <section className="flex text-center border-y border-neutral-300 py-10 mt-3">
        <div className="p-10">
          <RiLandscapeLine
            size={28}
            className="text-neutral-950/50 mx-auto mb-5"
          />
          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            Nordic craftsmanship
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Designed in Norway, inspired by the rugged landscapes of the North.
            Every detail reflects precision, durability, and timeless
            Scandinavian aesthetics
          </p>
        </div>
        <div className="p-10">
          <RiFootprintLine
            size={28}
            className="text-neutral-950/50 mx-auto mb-5"
          />

          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            FOR ADVENTURE
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Versatile backpacks engineered for both urban and outdoor explorers.
            Whether in the city or the mountains, Nordheim moves with you
          </p>
        </div>
        <div className="p-10">
          <RiLeafLine size={28} className="text-neutral-950/50 mx-auto mb-5" />

          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            SUSTAINABLY BUILT
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Eco-friendly materials and responsible production ensure a minimal
            footprint. Thoughtfully crafted for those who care about the planet.
          </p>
        </div>
        <div className="p-10">
          <RiInfinityLine
            size={28}
            className="text-neutral-950/50 mx-auto mb-5"
          />

          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            NMINIMAL & FUNCTIONAL
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            Sleek, modern designs that blend elegance with practicality. Every
            backpack is made to adapt seamlessly to your lifestyle.
          </p>
        </div>
      </section>
    </>
  );
}
