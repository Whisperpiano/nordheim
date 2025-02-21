import { Input } from "@heroui/input";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Button from "../../../components/Button/Button.component";
import buttonVariants from "../../../components/Button/Button.styles";

export default function Login() {
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
        <form>
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">
            Log in
          </h1>
          <div className="flex flex-col gap-6 md:pt-0 pt-2">
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
