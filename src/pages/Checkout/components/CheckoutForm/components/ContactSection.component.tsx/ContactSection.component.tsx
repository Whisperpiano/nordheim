import { Input } from "@heroui/input";

export default function ContactSection() {
  return (
    <>
      <h2 className="text-lg font-sans font-medium mb-3">Contact</h2>
      <Input
        label="Email address"
        type="email"
        variant="faded"
        radius="none"
        className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
        isInvalid={false}
      />
    </>
  );
}
