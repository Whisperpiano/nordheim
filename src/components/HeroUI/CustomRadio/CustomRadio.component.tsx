import { Radio } from "@heroui/radio";
import { cn } from "../../../utils/cn";
import { CustomRadioProps } from "./CustomRadio.types";

export const CustomRadio: React.FC<CustomRadioProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "flex max-w-[1000px] m-0 bg-content1 hover:border-gray-400/50 items-center bg-transparent",
          "cursor-pointer rounded-none gap-4 p-4 border-2 ",
          "data-[selected=true]:border-gray-400"
        ),
        label: cn("text-neutral-950 font-sans text-sm font-medium"),
        description: cn("text-neutral-500 font-sans text-xs font-medium"),
        labelWrapper: cn("w-full"),
        control: cn("bg-neutral-700"),
        wrapper: cn("group-data-[selected=true]:border-neutral-700"),
      }}
    >
      {children}
    </Radio>
  );
};
