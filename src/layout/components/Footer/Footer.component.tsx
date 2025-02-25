import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTiktokFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Logo from "../../../components/Logo/Logo.component";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral-950 text-neutral-50 ">
        <section className="px-4 max-w-[1440px] mx-auto">
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <p className="font-semibold font-condensed text-base uppercase">
                Designed to explore, built to last
              </p>

              <div className="flex flex-col gap-4 mt-5">
                <p className="text-neutral-50/70 text-sm font-normal font-sans ">
                  At Nordheim, we blend timeless Scandinavian design with
                  unmatched functionality. Each backpack is a testament to our
                  commitment to quality, sustainability, and thoughtful
                  craftsmanship.
                </p>
                <p className="text-neutral-50/70 text-sm font-normal font-sans ">
                  From the rugged trails of the mountains to the bustling
                  streets of the city, Nordheim gear adapts effortlessly to your
                  lifestyle, offering durability, comfort, and style in every
                  detail.
                </p>
                <p className="text-neutral-50/70 text-sm font-normal font-sans ">
                  Proudly designed in Norway, Nordheim supports eco-friendly
                  practices and local production, ensuring our products reflect
                  both our values and your adventurous spirit.
                </p>
                <p className="text-neutral-50/70 text-sm font-normal font-sans ">
                  Because your journey deserves a companion as strong and
                  versatile as you.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-semibold font-condensed text-base uppercase">
                  Sign up for 15% off
                </p>
                <p className="text-neutral-50/70 text-sm font-normal font-sans mt-5 ">
                  Get exclusive access to the latest drops, offers an styling
                  tips direct to your inbox.
                </p>
              </div>
              <div className="mt-10 md:mt-6">
                <p className="font-semibold font-condensed text-base uppercase">
                  Quick links
                </p>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 mt-5 text-neutral-50/70 text-sm font-light font-sans">
                  <li>
                    <ul className="flex flex-col gap-2">
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Help Center
                      </li>
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        FAQs
                      </li>
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Track your Order
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex flex-col gap-2">
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Contact Us
                      </li>
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Returns
                      </li>
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Warranty
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex flex-col gap-2">
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Terms
                      </li>
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Privacy
                      </li>
                      <li className="cursor-pointer hover:underline underline-offset-4 hover:text-neutral-50 transition-all duration-300">
                        Cookies
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative pb-5 border-t border-gray-500/50 pt-5">
            <Logo />

            <span className="text-neutral-50/70 text-xs font-condensed font-normal uppercase absolute flex justify-center items-end inset-0 pb-5 pointer-events-none">
              &copy; 2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
            </span>

            <nav
              aria-label="Social media links"
              className="mb-10 md:mb-0 mt-6 md:mt-0 md:ml-auto flex gap-4"
            >
              <Link
                to="https://www.facebook.com/nordheim/"
                target="_blank"
                className="hover:text-neutral-50/65 transition-colors duration-300"
              >
                <span className="sr-only">Facebook page</span>
                <RiFacebookCircleFill size={22} />
              </Link>
              <Link
                to="https://www.instagram.com/nordheim/"
                target="_blank"
                className="hover:text-neutral-50/65 transition-colors duration-300"
              >
                <span className="sr-only">Instagram page</span>
                <RiInstagramLine size={22} />
              </Link>
              <Link
                to="https://www.twitter.com/@nordheim"
                target="_blank"
                className="hover:text-neutral-50/65 transition-colors duration-300"
              >
                <span className="sr-only">Twitter page</span>
                <RiTwitterXFill size={22} />
              </Link>
              <Link
                to="https://www.tiktok.com/@nordheim"
                target="_blank"
                className="hover:text-neutral-50/65 transition-colors duration-300"
              >
                <span className="sr-only">TikTok page</span>
                <RiTiktokFill size={22} />
              </Link>
            </nav>
          </div>
        </section>
      </footer>
    </>
  );
}
