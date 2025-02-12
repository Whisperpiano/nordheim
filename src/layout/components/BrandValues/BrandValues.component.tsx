import { brandValues } from "../../../constants";

export default function BrandValues() {
  return (
    <section className="flex text-center border-y border-neutral-300 py-10 mt-3">
      {brandValues.map(({ value, descripton, icon: Icon }, i) => (
        <div className="p-10" key={i}>
          <Icon size={28} className="text-neutral-950/50 mx-auto mb-5" />
          <h3 className="font-condensed font-medium text-neutral-950/75 uppercase text-sm mb-3">
            {value}
          </h3>
          <p className="text-neutral-950 font-sans text-xs font-normal">
            {descripton}
          </p>
        </div>
      ))}
    </section>
  );
}
