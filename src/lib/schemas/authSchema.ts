import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  firstName: z.string().nonempty("Please enter your first name"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
  phone: z.string().optional(),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;
