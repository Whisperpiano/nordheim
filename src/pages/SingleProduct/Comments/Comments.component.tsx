import { RiCheckLine, RiStarFill, RiStarHalfFill } from "react-icons/ri";

export default function Comments() {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between border-t border-neutral-300 py-10">
        <h2 className="text-neutral-950 text-2xl font-semibold font-condensed uppercase">
          Customer reviews
        </h2>

        <div className="flex gap-2 items-center mt-1">
          <div className="flex  items-center">
            <RiStarFill size={24} />
            <RiStarFill size={24} />
            <RiStarFill size={24} />
            <RiStarFill size={24} />
            <RiStarHalfFill size={24} />
          </div>
          <span className="text-neutral-500 font-sans text-sm font-normal">
            4.97 out of 5
          </span>
        </div>
      </div>

      <article className="border-t border-neutral-300 py-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Tore E. Larsen</span>
          <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
            <span>
              <RiCheckLine size={16} />
            </span>
            Verified
          </span>
        </div>
        <div className="flex items-center mt-1">
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarHalfFill size={16} />
        </div>
        <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
          Flott å reise med
        </h3>
        <p className="text-neutral-950 font-sans text-sm font-light mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>

      <article className="border-t border-neutral-300 py-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Ole-Kristian H</span>
          <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
            <span>
              <RiCheckLine size={16} />
            </span>
            Verified
          </span>
        </div>
        <div className="flex items-center mt-1">
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarHalfFill size={16} />
        </div>
        <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
          Beautiful quality bag
        </h3>
        <p className="text-neutral-950 font-sans text-sm font-light mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>

      <article className="border-t border-neutral-300 py-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Tore E. Larsen</span>
          <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
            <span>
              <RiCheckLine size={16} />
            </span>
            Verified
          </span>
        </div>
        <div className="flex items-center mt-1">
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarHalfFill size={16} />
        </div>
        <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
          Flott å reise med
        </h3>
        <p className="text-neutral-950 font-sans text-sm font-light mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>

      <article className="border-t border-b border-neutral-300 py-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Ole-Kristian H</span>
          <span className="flex items-center gap-1 text-xs uppercase font-condensed font-medium px-2 py-1 border border-neutral-400">
            <span>
              <RiCheckLine size={16} />
            </span>
            Verified
          </span>
        </div>
        <div className="flex items-center mt-1">
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarFill size={16} />
          <RiStarHalfFill size={16} />
        </div>
        <h3 className="text-neutral-950 text-lg font-semibold font-sans mt-3 ">
          Beautiful quality bag
        </h3>
        <p className="text-neutral-950 font-sans text-sm font-light mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>

      <div className="max-w-[120px] mx-auto mt-8">
        <button className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer">
          Read more
        </button>
      </div>
    </section>
  );
}
