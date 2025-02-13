import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Tooltip } from "@heroui/tooltip";
import { RiQuestionLine } from "react-icons/ri";

export default function DeliverySection() {
  return (
    <>
      <div>
        <h2 className="text-lg font-sans font-medium mb-3">Delivery</h2>

        <div className="flex flex-col gap-3">
          <Select
            label="Country/Region"
            radius="none"
            variant="faded"
            isInvalid={false}
            defaultSelectedKeys={["1"]}
            classNames={{
              popoverContent: "rounded-none bg-neutral-50",
              trigger: "py-5 bg-neutral-50",
            }}
          >
            <SelectItem
              key={"1"}
              classNames={{
                base: "rounded-none",
              }}
            >
              Norway
            </SelectItem>
          </Select>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="First name"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={false}
            />
            <Input
              label="Last name"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={false}
            />
          </div>
          <Input
            label="Company"
            type="text"
            variant="faded"
            radius="none"
            className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
            isInvalid={false}
          />
          <Input
            label="Address"
            type="text"
            variant="faded"
            radius="none"
            className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
            isInvalid={false}
          />
          <Input
            label="Apartment, suite, etc. (optional)"
            type="text"
            variant="faded"
            radius="none"
            className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
            isInvalid={false}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Postal code"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={false}
            />
            <Input
              label="City"
              type="text"
              variant="faded"
              radius="none"
              className={" [&_[data-slot='input-wrapper']]:bg-neutral-50"}
              isInvalid={false}
            />
          </div>

          <Input
            label="Phone"
            type="text"
            variant="faded"
            radius="none"
            className=" [&_[data-slot='input-wrapper']]:bg-neutral-50"
            isInvalid={false}
            endContent={
              <Tooltip
                content="In case we need to contact you about your order"
                showArrow={true}
                color="foreground"
                offset={12}
                classNames={{
                  content: "rounded-none p-4 text-xs max-w-[200px] text-center",
                }}
              >
                <span>
                  <RiQuestionLine
                    size={20}
                    className="-translate-y-2 text-neutral-400 cursor-pointer"
                  />
                </span>
              </Tooltip>
            }
          />
        </div>
      </div>
    </>
  );
}
