import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import Button from "../../../components/Button/Button.component";
import React, { useState } from "react";
import { contactCategories } from "../../../constants";

export default function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  console.log(selectedCategory);
  return (
    <form className="mx-auto mt-8 mb-16 flex flex-col gap-6">
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
          onChange={handleSelectCategory}
          classNames={{
            popoverContent: "rounded-none bg-neutral-50",
            trigger: "py-5 bg-neutral-50",
          }}
        >
          {contactCategories.map((category) => (
            <SelectItem
              key={category.key}
              classNames={{
                base: "rounded-none",
              }}
            >
              {category.label}
            </SelectItem>
          ))}
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

      <Button variant="primary" size="md" font="primary" shape="square">
        Send message
      </Button>
    </form>
  );
}
