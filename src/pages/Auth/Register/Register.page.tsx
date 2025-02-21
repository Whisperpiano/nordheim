import { Input } from "@heroui/input";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Button from "../../../components/Button/Button.component";
import buttonVariants from "../../../components/Button/Button.styles";

export default function Register() {
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
          <form>
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">
              Create account
            </h1>
            <div className="flex flex-col gap-6 md:pt-0 pt-2">
              <Input
                label="First name"
                type="email"
                size="md"
                variant="underlined"
              />
              <Input
                label="Last name"
                type="email"
                size="md"
                variant="underlined"
              />
              <Input
                label="Email address"
                type="email"
                size="md"
                variant="underlined"
              />
              <Input
                label="Password"
                type="password"
                size="md"
                variant="underlined"
              />
              <Input
                label="Phone"
                type="password"
                size="md"
                variant="underlined"
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
