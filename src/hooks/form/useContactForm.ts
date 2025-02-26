import { useForm } from "react-hook-form";
import {
  ContactFormData,
  contactSchema,
} from "../../lib/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const validatedData = contactSchema.safeParse(data);

    if (!validatedData.success) {
      console.error("Form Validation Error:", validatedData.error);
      return;
    }
    console.log("Form Validation Success:", validatedData.data);

    reset();

    window.scrollTo({ top: 0, behavior: "smooth" });

    toast.success(
      `Thank you for contacting us! We'll get back to you as soon as possible.`
    );
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
}
