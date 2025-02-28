import { brandValues } from "../../../config/config";

export default function BrandValues() {
  return (
    <section className="border-y border-neutral-300 py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center max-w-[1440px] mx-auto">
        {brandValues.map(({ value, descripton, icon: Icon }, i) => (
          <div className="p-8" key={i}>
            <Icon size={28} className="text-neutral-950/50 mx-auto mb-5" />
            <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
              {value}
            </h3>
            <p className="text-neutral-950 font-sans text-xs font-normal">
              {descripton}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
