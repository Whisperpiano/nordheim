import { HomeButtonProps } from "./HomeButton.types";

const HomeButton = ({ string }: HomeButtonProps) => {
  return (
    <h2
      className={`relative h-16 ${
        string === "city" ? "w-28" : "w-52"
      } px-8 text-neutral-50 font-condensed text-2xl sm:text-3xl`}
    >
      <span className="absolute inset-0 flex justify-center items-center uppercase font-semibold tracking-tight group-hover:tracking-widest transition-all duration-300 ease-in">
        {string}
      </span>
      <span className="absolute opacity-0 w-0 h-0 top-0 right-0 border-t-2 border-r-2 group-hover:w-6 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 ease-in"></span>
      <span className="absolute opacity-0 w-0 h-0 bottom-0 left-0 border-b-2 border-l-2 group-hover:w-6 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 ease-in"></span>
    </h2>
  );
};

export default HomeButton;
