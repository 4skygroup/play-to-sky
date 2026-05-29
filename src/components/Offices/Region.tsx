import { Link } from "react-router";
import type { RegionType } from "../../types/region";
import { useTranslations } from "../../utils/useTranslations";

export default function Region({ name, expression, link, cities }: RegionType) {
  const t = useTranslations();

  return (
    // On garde ta logique de largeur (xs:w-125) mais on s'assure que le composant ne dépasse pas l'écran sur mobile avec w-full ou w-[90%]
    <div className="flex gap-y-10 sm:gap-y-15 flex-col items-center w-[90%] xs:w-125 py-8 sm:py-10 px-4 sm:px-12.5 border border-dark-gray border-solid rounded-sm mx-auto">

      <div className="flex justify-between w-full">
        <div>
          <h2 className="uppercase text-3xl sm:text-4xl font-bold">{name}</h2>
          <span className="text-sm sm:text-base">{expression}</span>
        </div>
        <div className="flex flex-col items-center gap-y-1 shrink-0">
          <span className="text-sm sm:text-base">{t.officesPage.offices}</span>
          <span className="font-bold rounded-sm text-xl bg-light-gray w-fit h-fit py-2 px-4">
            {cities.length}
          </span>
        </div>
      </div>

      {/* LA CORRECTION POUR LE MOBILE EST ICI : flex-wrap et justify-center */}
      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-center">
        {cities.map((city, index) => (
          <span
            key={index}
            className={
              index === cities.length - 1
                ? "font-bold text-sm sm:text-base"
                : "flex items-center gap-x-3 font-bold text-sm sm:text-base after:content-[''] after:w-1 after:h-1 after:bg-dark-gray after:rounded-full"
            }
          >
            {city}
          </span>
        ))}
      </div>

      <Link to={link} className="text-dark-gray text-sm sm:text-base hover:text-black transition-colors">
        {t.officesPage.viewOffices} &gt;
      </Link>
    </div>
  );
}