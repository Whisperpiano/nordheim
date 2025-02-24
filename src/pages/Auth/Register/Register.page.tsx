import { Input } from "@heroui/input";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Button from "../../../components/Button/Button.component";
import buttonVariants from "../../../components/Button/Button.styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import registerUser, { logoutUser } from "../../../api/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "../../../store/authStore";

const registerFormSchema = z.object({
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

export default function Register() {
  const navigate = useNavigate();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerFormSchema) });

  const { mutate: registerUserMutation } = useMutation({
    mutationFn: (data: RegisterFormData) => registerUser(data),
    onSuccess: () => {
      setIsLoggedIn(true);
      navigate("/account/profile");
      toast.success("User created successfully! Please log in.");
    },
    onError: (error) => {
      if (error.message.includes("rate limit")) {
        toast.error("Too many requests. Please try again later.");
      } else if (error.message.includes("already registered")) {
        toast.error("Email already exists. Please log in.");
      } else {
        toast.error("Error creating user from database.");
      }
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerUserMutation(data);
    reset();
  };

  const { mutate: logoutUserMutation } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      toast.success("Logged out successfully!");
    },
    onError: () => {
      toast.error("Error logging out.");
    },
  });

  const handleLogout = () => {
    logoutUserMutation();
  };

  return (
    <>
      <section className="mt-[100px] grid grid-cols-1 md:grid-cols-12 items-center">
        <img
          src="/login.jpg"
          alt="Login"
          className="w-full col-span-6 max-h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] object-cover md:block hidden"
        />
        <motion.article
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="max-w-[600px] w-full mx-auto md:max-w-full col-span-1 md:col-span-6 flex flex-col gap-6 px-4 md:px-10 xl:px-12 2xl:px-16 md:mt-0 mt-10 lg:order-2 order-1"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">
              Create account
            </h1>
            <button type="button" onClick={handleLogout}>
              logout
            </button>
            <div className="flex flex-col gap-6 md:pt-0 pt-2">
              <Input
                label="First name *"
                type="text"
                size="md"
                variant="underlined"
                isInvalid={Boolean(errors.firstName)}
                errorMessage={errors.firstName?.message}
                {...register("firstName")}
              />
              <Input
                label="Last name"
                type="text"
                size="md"
                variant="underlined"
                isInvalid={Boolean(errors.lastName)}
                errorMessage={errors.lastName?.message}
                {...register("lastName")}
              />
              <Input
                label="Email address *"
                type="email"
                size="md"
                variant="underlined"
                isInvalid={Boolean(errors.email)}
                errorMessage={errors.email?.message}
                {...register("email")}
              />
              <Input
                label="Password *"
                type="password"
                size="md"
                variant="underlined"
                isInvalid={Boolean(errors.password)}
                errorMessage={errors.password?.message}
                {...register("password")}
              />
              <Input
                label="Phone"
                type="text"
                size="md"
                variant="underlined"
                isInvalid={Boolean(errors.phone)}
                errorMessage={errors.phone?.message}
                {...register("phone")}
              />
            </div>
            <div className=" mt-8 ">
              <Button
                variant="primary"
                size="md"
                font="primary"
                shape="square"
                className="w-[120px]"
                type="submit"
              >
                Register
              </Button>
            </div>

            <p className=" mt-6 text-xs font-sans font-normal text-neutral-600">
              By creating an account you agree to our terms and conditions. Read
              our{" "}
              <span className="underline underline-offset-4 cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </form>

          <div>
            <h2 className="text-neutral-950 font-sans text-xl font-semibold mb-3 border-t border-neutral-300/50 pt-10">
              Already have an account?
            </h2>

            <div className="mt-6 w-[120px]">
              <Link
                to="/account/login"
                className={buttonVariants({
                  variant: "primary",
                  size: "md",
                  font: "primary",
                  shape: "square",
                })}
              >
                Login
              </Link>
            </div>
          </div>
        </motion.article>
      </section>
    </>
  );
}
