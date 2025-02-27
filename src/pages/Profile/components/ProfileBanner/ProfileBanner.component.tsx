import { RiLogoutBoxLine } from "react-icons/ri";
import Button from "../../../../components/Button/Button.component";
import { useLogout } from "../../../../hooks/auth/useLogout";

export default function ProfileBanner({ userName }: { userName: string }) {
  const { handleLogout } = useLogout();
  return (
    <article className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-6 md:py-20 mb-10 border border-gray-300 mt-6 text-center md:text-left">
      <div className=" font-condensed uppercase flex flex-col gap-3 md:gap-1.5">
        <h1 className="text-neutral-950 text-2xl font-semibold ">
          Hi there, {userName}!
        </h1>
        <p className="text-neutral-500 font-medium">
          Welcome to your Nordheim account page
        </p>
      </div>
      <Button
        variant="secondary"
        size="md"
        font="primary"
        shape="square"
        onClick={handleLogout}
        className="bg-neutral-200/50 flex items-center gap-2 justify-center mt-6 w-full md:w-fit"
      >
        <RiLogoutBoxLine size={15} className="text-neutral-800" />
        Log out
      </Button>
    </article>
  );
}
