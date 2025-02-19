import { z } from "zod";

export const checkoutSchema = z.object({
  // Contact section
  email: z.string().email("Please enter a valid email address"),

  // Delivery section
  country: z.literal("norway", {
    errorMap: () => ({ message: "Country/Region: cannot be empty" }),
  }),
  firstName: z.string().nonempty("Enter a first name"),
  lastName: z.string().nonempty("Enter a last name"),
  company: z.string().optional(),
  address: z.string().nonempty("Enter an address"),
  apartment: z.string().optional(),
  postalCode: z.string().nonempty("Enter a postal code"),
  city: z.string().nonempty("Enter a city"),
  phone: z
    .string()
    .nonempty("Enter a phone number")
    .regex(/^\d+$/, "Phone number must contain only numbers"),

  // Shipping section
  shipping: z.enum(["economy", "home"]),

  // Payment section
  payment: z.enum(["card", "klarna", "googlepay"]),
  cardNumber: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
