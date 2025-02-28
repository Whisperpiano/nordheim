import { VariantsArray } from "../../../../../lib/schemas/productSchema";

import clsx from "clsx";

export default function ProductVariants({
  variants,
}: {
  variants: VariantsArray;
}) {
  const { volume, color } = variants[0];

  return (
    <div className="border-t border-gray-300 mt-4">
      <div className="mt-6">
        <fieldset>
          <div>
            <legend className="text-xs font-sans">
              <strong>Size: </strong>
              {volume}L
            </legend>
          </div>
          <div className="flex gap-2 items-center mt-2">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className="hover:opacity-65 transition-opacity duration-300"
              >
                <input
                  type="radio"
                  name="size"
                  value={variant.volume}
                  id={`size-${variant.volume}`}
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor={`size-${variant.volume}`}
                  className="cursor-pointer border border-neutral-300 peer-checked:border-neutral-800 peer-checked:bg-gray-100 font-sans text-sm font-normal inline-flex px-3 py-2 "
                >
                  {variant.volume}L
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <fieldset>
          <div>
            <legend className="text-xs font-sans">
              <strong>Color: </strong>
              {color}
            </legend>
          </div>
          <div className="flex gap-2.5 items-center mt-2">
            {variants.map((variant) => (
              <div
                key={variant.id + variant.color}
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <input
                  type="radio"
                  name="color"
                  value={variant.color}
                  id={`color-${variant.color}`}
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor={`color-${variant.color}`}
                  className={clsx(
                    "p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer"
                  )}
                  style={{ backgroundColor: variant.hex }}
                ></label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
