import { Input } from "@heroui/input";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Button from "../../../components/Button/Button.component";
import buttonVariants from "../../../components/Button/Button.styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser } from "../../../api/auth/auth";
import { toast } from "sonner";
import { useAuthStore } from "../../../store/authStore";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Login() {
  const navigate = useNavigate();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginFormSchema) });

  const { mutate: loginUserMutation } = useMutation({
    mutationFn: (data: LoginFormData) => loginUser(data),
    onSuccess: () => {
      setIsLoggedIn(true);
      toast.success("Logged in successfully!");
      navigate("/account/profile");
    },
    onError: (error) => {
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Error logging in.");
      }
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginUserMutation(data);
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

  // const { mutate: getUserProfileMutation } = useMutation({
  //   mutationFn: () => getUserProfile(),
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: () => {
  //     toast.error("Error getting user profile.");
  //   },
  // });

  // const { mutate: getSession } = useMutation({
  //   mutationFn: () => getUserSession(),
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: () => {
  //     toast.error("Error getting user profile.");
  //   },
  // });

  const handleLogout = () => {
    logoutUserMutation();
    setIsLoggedIn(false);
  };

  return (
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
          {/* <button type="button" onClick={getSession}>
            get session
          </button> */}
          {/* <button type="button" onClick={getUserProfileMutation}>
            reset
          </button>  */}
          <button type="button" onClick={handleLogout}>
            logoutkurwa
          </button>
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">
            Log in
          </h1>
          <div className="flex flex-col gap-6 md:pt-0 pt-2">
            <Input
              label="Email address"
              type="email"
              size="md"
              variant="underlined"
              isInvalid={Boolean(errors.email)}
              errorMessage={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Password"
              type="password"
              size="md"
              variant="underlined"
              isInvalid={Boolean(errors.password)}
              errorMessage={errors.password?.message}
              {...register("password")}
            />
          </div>
          <div className="mt-8">
            <Button
              variant="primary"
              size="md"
              font="primary"
              shape="square"
              type="submit"
              className="w-[120px]"
            >
              Login
            </Button>
          </div>

          <p className="mt-6 text-xs font-sans font-normal text-neutral-600 underline underline-offset-4 cursor-pointer">
            Forgot your password?
          </p>
        </form>

        <div className="mt-10 md:mt-0">
          <h2 className="text-neutral-950 font-sans text-xl font-semibold mb-3 border-t border-neutral-300/50 pt-10">
            Don't have an account?
          </h2>
          <p className="mt-4 text-neutral-700 font-sans text-sm font-light">
            Create an account to keep track of your orders and more.
          </p>
          <div className="mt-6 w-[120px]">
            <Link
              to="/account/register"
              className={buttonVariants({
                variant: "primary",
                size: "md",
                font: "primary",
                shape: "square",
              })}
            >
              Register
            </Link>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
