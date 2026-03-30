import type { SubsidiaryType } from "../types/subsidiary";

export default function Subsidiary({ src, alt, catchphrase }: SubsidiaryType) {
  return (
    <div className="subsidiary">
      <div className="logo_subsection">
        <img src={src} alt={alt} />
        <div>
          <span>{catchphrase}</span>
          <div className="button">
            <button>En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
}
