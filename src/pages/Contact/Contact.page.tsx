import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import {
  RiFootprintLine,
  RiInfinityLine,
  RiLandscapeLine,
  RiLeafLine,
} from "react-icons/ri";

export default function Contact() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-14 max-w-[600px] mx-auto "
      >
        <div className="text-center py-16">
          <h1 className="text-neutral-950 font-condensed text-3xl font-semibold mb-6 uppercase ">
            How can we help you?
          </h1>

          <p className="mt-4 text-neutral-700 font-sans text-sm font-light">
            Whether you have a question, need assistance, or just want to share
            your feedback, we’re here to help. Reach out to us and we’ll get
            back to you as soon as possible.
          </p>
        </div>
        <form className="mx-auto mt-8 flex flex-col gap-6">
          <Input
            label="Email"
            type="email"
            variant="faded"
            radius="none"
            labelPlacement="outside"
            placeholder="Enter your email address"
            className={
              "[&_[data-slot='input-wrapper']]:py-5 [&_[data-slot='input-wrapper']]:bg-neutral-50"
            }
            isInvalid={false}
            isRequired
          />
          <div className="grid grid-cols-3 gap-3">
            <Input
              label="Subject"
              type="email"
              variant="faded"
              radius="none"
              labelPlacement="outside"
              placeholder="Enter the subject of your message"
              className="[&_[data-slot='input-wrapper']]:py-5 [&_[data-slot='input-wrapper']]:bg-neutral-50 col-span-2"
              isInvalid={false}
              isRequired
            />

            <Select
              label="Category"
              radius="none"
              variant="faded"
              placeholder="-"
              labelPlacement="outside"
              isRequired
              className="col-span-1"
              isInvalid={false}
              classNames={{
                popoverContent: "rounded-none bg-neutral-50",
                trigger: "py-5 bg-neutral-50",
              }}
            >
              <SelectItem
                classNames={{
                  base: "rounded-none",
                }}
              >
                Hola
              </SelectItem>
              <SelectItem
                classNames={{
                  base: "rounded-none",
                }}
              >
                Hola
              </SelectItem>
              <SelectItem
                classNames={{
                  base: "rounded-none",
                }}
              >
                Hola
              </SelectItem>
            </Select>
          </div>

          <Textarea
            label="Message"
            radius="none"
            variant="faded"
            placeholder="Write your message here"
            labelPlacement="outside"
            isRequired
            isInvalid={false}
            classNames={{
              innerWrapper: "min-h-[500px]",
              input: "min-h-[500px]",
              inputWrapper: "bg-neutral-50",
            }}
          />

          <button
            type="submit"
            className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer mt-3 mb-16"
          >
            Send message
          </button>
        </form>
      </motion.section>

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
