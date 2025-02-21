import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import Button from "../../../components/Button/Button.component";
import { contactCategories } from "../../../constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormData,
  contactSchema,
} from "../../../lib/schemas/contactSchema";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      console.error("Form Validation Error:", result.error);
      return;
    }
    console.log("Form Validation Success:", result.data);

    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });

    toast.success("Message sent successfully!");
  };

  return (
    <form
      className="mx-auto mt-8 mb-16 flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name */}
      <Input
        label="Name"
        type="text"
        variant="faded"
        radius="none"
        labelPlacement="outside"
        placeholder="Enter your name"
        className="[&_[data-slot='input-wrapper']]:py-5 [&_[data-slot='input-wrapper']]:bg-neutral-50 col-span-2"
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
        {...register("name")}
      />
      {/* Email */}
      <Input
        label="Email"
        type="email"
        variant="faded"
        radius="none"
        labelPlacement="outside"
        placeholder="Enter your email address"
        className="[&_[data-slot='input-wrapper']]:py-5 [&_[data-slot='input-wrapper']]:bg-neutral-50"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email")}
      />

      {/* Subject */}
      <Input
        label="Subject"
        type="text"
        variant="faded"
        radius="none"
        labelPlacement="outside"
        placeholder="Enter the subject of your message"
        className="[&_[data-slot='input-wrapper']]:py-5 [&_[data-slot='input-wrapper']]:bg-neutral-50 col-span-2"
        isInvalid={!!errors.subject}
        errorMessage={errors.subject?.message}
        {...register("subject")}
      />

      {/* Category */}
      <Select
        label="Category"
        radius="none"
        variant="faded"
        placeholder="-"
        labelPlacement="outside"
        className="col-span-1"
        isInvalid={!!errors.category}
        errorMessage={errors.category?.message}
        defaultSelectedKeys={["order"]}
        {...register("category")}
        classNames={{
          popoverContent: "rounded-none bg-neutral-50",
          trigger: "py-5 bg-neutral-50",
        }}
      >
        {contactCategories.map((category) => (
          <SelectItem
            key={category.key}
            value={category.key}
            classNames={{ base: "rounded-none" }}
          >
            {category.label}
          </SelectItem>
        ))}
      </Select>

      {/* Message */}
      <Textarea
        label="Message"
        radius="none"
        variant="faded"
        placeholder="Write your message here"
        labelPlacement="outside"
        isInvalid={!!errors.message}
        errorMessage={errors.message?.message}
        {...register("message")}
        classNames={{
          innerWrapper: "min-h-[250px]  md:min-h-[450px]",
          input: "min-h-[250px] md:min-h-[450px]",
          inputWrapper: "bg-neutral-50",
        }}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        font="primary"
        shape="square"
      >
        Send message
      </Button>
    </form>
  );
}
