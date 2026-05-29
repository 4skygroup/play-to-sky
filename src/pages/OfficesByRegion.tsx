import Footer from "../components/Footer";
import Header from "../components/Header";
import Region from "../components/Offices/Region";
import { useTranslations } from "../utils/useTranslations";

export default function OfficesByRegion() {
  const t = useTranslations();

  const regions = [
    {
      name: t.officesPage.europe,
      cities: ["Paris", "Londres", "Berlin", "Amsterdam"],
      expression: t.officesPage.innovationExcellence,
      link: "/offices-by-cities/europe",
    },
    {
      name: t.officesPage.africa,
      cities: ["Casablanca", "Le Cap", "Lagos"],
      expression: t.officesPage.creativityVision,
      link: "/offices-by-cities/africa",
    },
    {
      name: t.officesPage.northAmerica,
      cities: ["New York", "Toronto", "São Paulo", "Mexico"],
      expression: t.officesPage.technologyInnovation,
      link: "/offices-by-cities/north-america",
    },
    {
      name: t.officesPage.middleEast,
      cities: ["Dubaï", "Doha"],
      expression: t.officesPage.futureGrowth,
      link: "/offices-by-cities/middle-east",
    },
  ];

  return (
    <div className="w-full">
      <Header bgColor="white" />

      {/* Conteneur principal : paddings et gaps réduits sur mobile */}
      <div className="flex flex-col items-center py-12 md:py-25 gap-y-10 md:gap-y-25 px-4 md:px-0">

        {/* En-tête de la page */}
        <div className="flex flex-col items-center text-center px-4 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold mb-2 md:mb-4">
            {t.officesPage.ourOffices}
          </h1>
          <span className="text-lg md:text-xl text-dark-gray">
            {t.officesPage.continents}
          </span>
        </div>

        {/* Liste des régions : adaptation du gap et de la largeur max */}
        <div className="flex flex-wrap max-w-full lg:max-w-262.5 gap-6 md:gap-12.5 content-center justify-center">
          {regions.map((region, index) => (
            <Region
              key={index}
              name={region.name}
              cities={region.cities}
              expression={region.expression}
              link={region.link}
            />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}