import { RadioGroup } from "@heroui/radio";
import { CustomRadio } from "../../../../../../components/HeroUI/CustomRadio/CustomRadio.component";

import { Controller } from "react-hook-form";
import { ShippingSectionProps } from "./ShippingSection.types";

export default function ShippingSection({ control }: ShippingSectionProps) {
  return (
    <>
      <h2 className="text-lg font-sans font-medium mb-3">Shipping method</h2>

      <Controller
        name="shipping"
        defaultValue="economy"
        control={control}
        render={({ field }) => {
          return (
            <RadioGroup {...field}>
              <CustomRadio description="4 business days" value="economy">
                <p className="flex justify-between items-center gap-2">
                  DHL Economy Select Home Delivery<span>kr 69.00</span>
                </p>
              </CustomRadio>
              <CustomRadio description="2 business days" value="home">
                <p className="flex justify-between items-center gap-2">
                  DHL Express Home Delivery<span>kr 159.00</span>
                </p>
              </CustomRadio>
            </RadioGroup>
          );
        }}
      />

      <p className="p-5 border-2 border-neutral-200 text-neutral-700 font-sans text-sm font-light">
        Enter your shipping address to view available shipping methods.
      </p>
    </>
  );
}
