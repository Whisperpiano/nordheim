export default function ProductVariants() {
  return (
    <div className="border-t border-neutral-300/50 mt-4">
      <div className="mt-6">
        <fieldset>
          <div>
            <legend className="text-xs font-sans">
              <strong>Size: </strong>15L
            </legend>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <div>
              <input
                type="radio"
                name="size"
                value="15"
                id="size-15"
                className="hidden peer"
                defaultChecked
              />
              <label
                htmlFor="size-15"
                className="cursor-pointer border border-neutral-300 peer-checked:border-neutral-800 peer-checked:bg-gray-100 font-sans text-sm font-normal inline-flex px-3 py-2"
              >
                15L
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                value="30"
                id="size-30"
                className="hidden peer"
              />
              <label
                htmlFor="size-30"
                className="cursor-pointer border border-neutral-300 peer-checked:border-neutral-800 peer-checked:bg-gray-100 font-sans text-sm font-normal inline-flex px-3 py-2"
              >
                30L
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="size"
                value="45"
                id="size-45"
                className="hidden peer"
              />
              <label
                htmlFor="size-45"
                className="cursor-pointer border border-neutral-300 peer-checked:border-neutral-800 peer-checked:bg-gray-100 font-sans text-sm font-normal inline-flex px-3 py-2"
              >
                45L
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <fieldset>
          <div>
            <legend className="text-xs font-sans">
              <strong>Color: </strong>Grey
            </legend>
          </div>
          <div className="flex gap-2.5 items-center mt-2">
            <div>
              <input
                type="radio"
                name="color"
                value="grey"
                id="grey"
                className="hidden peer"
                defaultChecked
              />
              <label
                htmlFor="grey"
                className="p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer bg-white"
              ></label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="orange"
                id="orange"
                className="hidden peer"
              />
              <label
                htmlFor="orange"
                className="p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer bg-blue-900"
              ></label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="blue"
                id="blue"
                className="hidden peer"
              />
              <label
                htmlFor="blue"
                className="p-3.5 border border-neutral-300 inline-flex rounded-full peer-checked:outline peer-checked:outline-neutral-800 peer-checked:outline-offset-2 outline-1 cursor-pointer bg-yellow-950"
              ></label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
