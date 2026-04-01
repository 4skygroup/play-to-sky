import { Link } from "react-router";
import type { RegionType } from "../../types/region";

export default function Region({ name, expression, link, cities }: RegionType) {
  return (
    <div className="flex gap-y-15 flex-col items-center w-125 py-10 px-12.5 border border-dark-gray border-solid rounded-sm">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="uppercase text-4xl font-bold">{name}</h2>
          <span>{expression}</span>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-base">Bureaux</span>
          <span className="font-bold rounded-sm text-xl bg-light-gray w-fit h-fit py-2 px-4">
            {cities.length}
          </span>
        </div>
      </div>
      <div className="flex gap-x-3">
        {cities.map((city, index) => (
          <span
            key={index}
            className={
              index === cities.length - 1
                ? ""
                : "flex items-center gap-x-3 font-bold after:content-[''] after:w-1 after:h-1 after:bg-dark-gray after:rounded-full"
            }
          >
            {city}
          </span>
        ))}
      </div>
      <Link to={link} className="text-dark-gray">
        Voir les bureaux &gt;
      </Link>
    </div>
  );
}
