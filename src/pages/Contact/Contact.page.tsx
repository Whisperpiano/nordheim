import { motion } from "framer-motion";
import { contactVariants } from "./Contact.variants";
import ContactForm from "./components/ContactForm/ContactForm.component";
import usePageTitle from "../../hooks/title/usePageTitle";

export default function Contact() {
  usePageTitle("Nordheim | Contact us");
  return (
    <motion.section className="pt-[100px]" {...contactVariants.contact}>
      <div className="max-w-[650px] mx-auto pt-26 px-4">
        <div className="text-center py-10">
          <h1 className="text-neutral-950 font-condensed text-2xl font-semibold uppercase ">
            How can we help you?
          </h1>

          <p className="mt-4 text-neutral-700 font-sans text-sm font-light">
            Whether you have a question, need assistance, or just want to share
            your feedback, we’re here to help. Reach out to us and we’ll get
            back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </motion.section>
  );
}
