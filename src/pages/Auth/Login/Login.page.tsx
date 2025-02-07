import { Input } from "@heroui/input";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <section className="mt-14 grid grid-cols-12 items-center gap-16">
        <img
          src="/login.jpg"
          alt="Login"
          className="w-full col-span-6 max-h-[calc(100vh-56px)] min-h-[calc(100vh-56px)]  object-cover "
        />
        <article className="col-span-6 flex flex-col gap-6 px-16">
          <form>
            <h1 className="font-sans text-5xl font-semibold tracking-tighter mb-6  ">
              Log in
            </h1>
            <div className="flex flex-col gap-4">
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
            <div className=" mt-8 w-[120px]">
              <button
                className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer "
                type="submit"
              >
                Login
              </button>
            </div>

            <p className=" mt-6 text-xs font-sans font-normal text-neutral-600 underline underline-offset-4 cursor-pointer">
              Forgot your password?
            </p>
          </form>

          <div>
            <h2 className="text-neutral-950 font-sans text-xl font-semibold mb-3 border-t border-neutral-300/50 pt-10">
              Don't have an account?
            </h2>
            <p className="mt-4 text-neutral-700 font-sans text-sm font-light">
              Create an account to keep track of your orders and more.
            </p>
            <div className="mt-6 w-[120px]">
              <Link
                to="/account/register"
                className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer "
                type="submit"
              >
                Register
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
