import { useContactForm } from "../../../../hooks/form/useContactForm";

import Button from "../../../../components/Button/Button.component";
import ContactFormField from "./components/ContactFormField/ContactFormField.component";

export default function ContactForm() {
  const { register, handleSubmit, errors } = useContactForm();

  return (
    <form
      className="mx-auto mt-8 mb-16 flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      {/* Name */}
      <ContactFormField
        as="input"
        type="text"
        label="Name"
        placeholder="Enter your name"
        registerName="name"
        register={register}
        errors={errors}
      />

      {/* Email */}
      <ContactFormField
        as="input"
        type="email"
        label="Email"
        placeholder="Enter your email address"
        registerName="email"
        register={register}
        errors={errors}
      />

      {/* Subject */}
      <ContactFormField
        as="input"
        type="text"
        label="Subject"
        placeholder="Enter the subject of your message"
        registerName="subject"
        register={register}
        errors={errors}
      />

      {/* Category */}
      <ContactFormField
        as="select"
        type="text"
        label="Category"
        placeholder="-"
        registerName="category"
        register={register}
        errors={errors}
      />

      {/* Message */}
      <ContactFormField
        as="textarea"
        type="text"
        label="Message"
        placeholder="Write your message here"
        registerName="message"
        register={register}
        errors={errors}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        font="primary"
        shape="square"
      >
        Send message
      </Button>
    </form>
  );
}
