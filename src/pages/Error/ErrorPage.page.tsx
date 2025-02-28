import { Link } from "react-router";
import { RiInformationLine } from "react-icons/ri";
import usePageTitle from "../../hooks/title/usePageTitle";

export default function ErrorPage() {
  usePageTitle("Nordheim | Error");
  return (
    <>
      <section className="h-[calc(100vh-56px)] flex flex-col items-center justify-center mt-[100px] px-4 text-center">
        <RiInformationLine size={64} className="text-neutral-600" />
        <h1 className="text-neutral-600 text-2xl font-medium uppercase font-condensed mt-6">
          404 - Page not found
        </h1>
        <p className="text-neutral-500 font-sans text-sm font-normal mt-4">
          Sorry, the page you’re looking for doesn’t exist. If you thing
          something is broken, report a problem.
        </p>
        <div className="my-6 w-[150px] mx-auto">
          <Link
            to={"/"}
            className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer "
          >
            Go back home
          </Link>
        </div>
      </section>
    </>
  );
}
