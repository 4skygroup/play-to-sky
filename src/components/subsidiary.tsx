import type { SubsidiaryType } from "../types/subsidiary";

export default function Subsidiary({
  src,
  alt,
  catchphrase,
  className,
  additionnalClassName,
}: SubsidiaryType) {
  return (
    <section
      className={
        additionnalClassName
          ? className + " " + additionnalClassName
          : className
      }
    >
      <div className="logo_subsection flex flex-col items-center text-2xl">
        <img src={src} alt={alt} />
        <div>
          <span className="block max-w-187.5 text-center break-normal">
            {catchphrase}
          </span>
          <div className="button flex flex-col items-center ">
            <button>En savoir plus</button>
          </div>
        </div>
      </div>
    </section>
  );
}
