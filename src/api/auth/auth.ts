import { toast } from "sonner";
import { supabase } from "../../lib/supabase/client";
import { RegisterFormData } from "../../pages/Auth/Register/Register.page";
import { z } from "zod";
import { LoginFormData } from "../../pages/Auth/Login/Login.page";

const registerFormSchema = z.object({
  firstName: z.string().nonempty("Please enter your first name"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 8 characters long")
    .nonempty("Password is required"),
  phone: z.string().optional(),
});

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

export default async function registerUser(data: RegisterFormData) {
  const dataValidation = registerFormSchema.safeParse(data);

  if (!dataValidation.success) {
    toast.error("Error validating user data.");
    return null;
  }

  const { email, password, firstName, lastName, phone } = dataValidation.data;

  const { data: userData, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  const user = userData.user;

  if (user) {
    const { data: userProfile, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: user.id,
          first_name: firstName ?? null,
          last_name: lastName ?? null,
          phone: phone ?? null,
        },
      ])
      .select("*");

    if (profileError) {
      toast.error("Error creating user profile.");
      console.error("Profile creation error:", profileError);
      throw new Error(profileError.message);
    }

    return userProfile;
  }
}

export async function loginUser(data: LoginFormData) {
  const dataValidation = loginFormSchema.safeParse(data);

  if (!dataValidation.success) {
    toast.error("Error validating user data.");
    return null;
  }

  const { email, password } = dataValidation.data;

  const { data: userData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  const user = userData.user;

  if (user) {
    const { data: userProfile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profileError) {
      toast.error("Error creating user profile.");
      throw new Error(profileError.message);
    }

    console.log(userProfile);

    return userProfile;
  }
}

export async function getUserSession() {
  const { data: session, error } = await supabase.auth.getSession();

  if (error) {
    toast.error("Error getting user session.");
    throw new Error(error.message);
  }

  return session;
}

export async function getUser() {
  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }
  return user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return null;
}
