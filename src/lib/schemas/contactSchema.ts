import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty("Name: cannot be empty")
    .min(3, "Name must be at least 3 characters"),
  email: z
    .string()
    .nonempty("Email: cannot be empty")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .nonempty("Subject: cannot be empty")
    .min(3, "Subject must be at least 3 characters"),
  category: z
    .string()
    .refine(
      (val) =>
        ["order", "shipping", "return", "questions", "other"].includes(val),
      {
        message: "Category: cannot be empty",
      }
    ),
  message: z
    .string()
    .nonempty("Message: cannot be empty")
    .min(3, "Message must be at least 3 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
