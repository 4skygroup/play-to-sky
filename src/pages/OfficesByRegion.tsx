import Footer from "../components/Footer";
import Header from "../components/Header";
import Region from "../components/Offices/Region";

export default function OfficesByRegion() {
  const regions = [
    {
      name: "Europe",
      cities: ["Paris", "Londres", "Berlin", "Amsterdam"],
      expression: "Innovation & Excellence",
      link: "/offices-by-cities/europe",
    },
    {
      name: "Afrique",
      cities: ["Casablanca", "Le Cap", "Lagos"],
      expression: "Creativity & Vision",
      link: "/offices-by-cities/africa",
    },
    {
      name: "Amérique (Nord)",
      cities: ["New York", "Toronto", "São Paulo", "Mexico"],
      expression: "Technology & Innovation",
      link: "/offices-by-cities/north-america",
    },
    {
      name: "Moyen-Orient",
      cities: ["Dubaï", "Doha"],
      expression: "Future & Growth",
      link: "/offices-by-cities/middle-east",
    },
  ];

  return (
    <div className="">
      <Header bgColor="white" />
      <div className="flex flex-col items-center py-25 gap-y-25">
        <div className="flex flex-col items-center">
          <h1 className="text-[4rem]">Nos bureaux</h1>
          <span className="text-xl text-dark-gray">
            Continents et Zones géographiques
          </span>
        </div>
        <div className="flex flex-wrap max-w-262.5 gap-12.5 content-center">
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
