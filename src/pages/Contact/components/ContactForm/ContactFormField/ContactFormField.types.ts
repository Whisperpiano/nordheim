import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactFormData } from "../../../../../lib/schemas/contactSchema";

export interface ContactFormFieldProps {
  as: "input" | "textarea" | "select";
  type: "text" | "email" | "number";
  label: string;
  placeholder: string;
  registerName: "email" | "subject" | "message" | "name" | "category";
  errors: FieldErrors<ContactFormData>;
  register: UseFormRegister<ContactFormData>;
}
