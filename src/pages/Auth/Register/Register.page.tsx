import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useRegister } from "../../../hooks/auth/useRegister";
import { motion } from "framer-motion";

import { Input } from "@heroui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormData,
  registerFormSchema,
} from "../../../lib/schemas/authSchema";

import Button from "../../../components/Button/Button.component";
import buttonVariants from "../../../components/Button/Button.styles";
import ImageAuth from "../components/ImageAuth/ImageAuth.component";

export default function Register() {
  const { mutate: registerUserMutation } = useRegister();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerFormSchema) });

  const onSubmit = (data: RegisterFormData) => {
    registerUserMutation(data);
    reset();
  };

  return (
    <>
      <section className="mt-[100px] grid grid-cols-1 md:grid-cols-12 items-center">
        <ImageAuth
          format="both"
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

          <div className="mb-10">
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
