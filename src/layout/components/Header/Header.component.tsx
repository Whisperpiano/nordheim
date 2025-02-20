import AnnouncementBar from "./AnnouncementBar/AnnouncementBar.component";
import LogoHeader from "./LogoHeader/LogoHeader.component";
import MainNav from "./MainNav/MainNav.component";
import SecondaryNav from "./SecondaryNav/SecondaryNav.component";

export default function Header() {
  return (
    <header className="flex flex-col fixed top-0 w-full z-50 border-b border-neutral-300">
      <AnnouncementBar text="Free shipping on orders 900 NOK +" />

      <section className="bg-neutral-50 text-neutral-900 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <LogoHeader />
          <MainNav />
        </div>
        <SecondaryNav />
      </section>
    </header>
  );
}
