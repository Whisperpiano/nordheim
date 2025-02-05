import {
  RiArrowRightLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTiktokFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Logo from "../../../components/Logo/Logo.component";

export default function Footer() {
  return (
    <footer className="px-4 pt-10 bg-neutral-950 text-neutral-50">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="font-semibold font-condensed text-base uppercase">
            Designed to explore, built to last
          </h2>
          <div className="flex flex-col gap-4 mt-4 mr-32">
            <p className="text-neutral-50/70 text-sm font-normal font-sans ">
              At Nordheim, we blend timeless Scandinavian design with unmatched
              functionality. Each backpack is a testament to our commitment to
              quality, sustainability, and thoughtful craftsmanship.
            </p>
            <p className="text-neutral-50/70 text-sm font-normal font-sans ">
              From the rugged trails of the mountains to the bustling streets of
              the city, Nordheim gear adapts effortlessly to your lifestyle,
              offering durability, comfort, and style in every detail.
            </p>
            <p className="text-neutral-50/70 text-sm font-normal font-sans ">
              Proudly designed in Norway, Nordheim supports eco-friendly
              practices and local production, ensuring our products reflect both
              our values and your adventurous spirit.
            </p>
            <p className="text-neutral-50/70 text-sm font-normal font-sans ">
              Because your journey deserves a companion as strong and versatile
              as you.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-semibold font-condensed text-base uppercase">
              Sign up for 15% off
            </h2>
            <p className="text-neutral-50/70 text-sm font-normal font-sans mt-4 ">
              Get exclusive access to the latest drops, offers an styling tips
              direct to your inbox.
            </p>
            <button className="font-medium font-condensed text-sm uppercase flex gap-1 mt-4">
              Sign up
              <RiArrowRightLine size={16} />
            </button>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold font-condensed text-base uppercase">
              Support
            </h2>
            <div className="grid grid-cols-3 mt-4">
              <div className="text-neutral-50/70 text-sm font-medium font-sans flex flex-col gap-2">
                <span>Help Center</span>
                <span>FAQs</span>
                <span>Track your Order</span>
              </div>
              <div className="text-neutral-50/70 text-sm font-medium font-sans flex flex-col gap-2 ">
                <span>Contact Us</span>
                <span>Returns</span>
                <span>Warranty</span>
              </div>
              <div className="text-neutral-50/70 text-sm font-medium font-sans flex flex-col gap-2 ">
                <span>Terms</span>
                <span>Privacy</span>
                <span>Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center relative pt-20 pb-5">
        <Logo />

        <span className="text-neutral-50/70 text-xs font-condensed font-normal uppercase absolute flex justify-center items-end inset-0 pb-5">
          &copy; 2025 - NORDHEIM TEAM. ALL RIGHTS RESERVED
        </span>

        <div className="ml-auto flex gap-4">
          <button>
            <RiFacebookCircleFill size={22} />
          </button>
          <button>
            <RiInstagramLine size={22} />
          </button>
          <button>
            <RiTwitterXFill size={22} />
          </button>
          <button>
            <RiTiktokFill size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
}
