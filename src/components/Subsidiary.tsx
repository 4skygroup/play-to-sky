import type { SubsidiaryType } from "../types/subsidiary";

export default function Subsidiary({
  src,
  alt,
  catchphrase,
  className,
  additionnalClassName,
  index,
}: SubsidiaryType) {
  return (
    <section
      className={
        additionnalClassName
          ? `${className} ${additionnalClassName} group ${index === "drox360" && "border-b-white border-b-2 border-b-solid"}`
          : `${className} group ${index === "drox360" && "border-b-white border-b-2 border-b-solid"}`
      }
      id={index}
    >
      <div className="logo_subsection flex flex-col items-center text-2xl">
        <img src={src} alt={alt} className="w-125 aspect-square" />
        <div className="flex flex-col gap-y-10">
          <span className="block max-w-187.5 text-center break-normal">
            {catchphrase}
          </span>
          <div className="button flex flex-col items-center overflow-hidden">
            <button
              className={`border border-solid font-bold text-base rounded-sm uppercase px-2 py-1.5 w-fit translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer ${index === "visuance" ? "border-black" : "border-white"}`}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
