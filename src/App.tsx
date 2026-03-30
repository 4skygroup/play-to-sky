import "./App.css";
import Subsidiary from "./components/subsidiary";
import type { SubsidiaryType } from "./types/subsidiary";

function App() {
  const subsidiaries: SubsidiaryType[] = [
    {
      src: "/images/Visuance.png",
      alt: "Visuance Image",
      catchphrase: "Brand Design and Identity",
    },
  ];
  return (
    <>
      {subsidiaries.map((s) => (
        <Subsidiary alt={s.alt} src={s.src} catchphrase={s.catchphrase} />
      ))}
    </>
  );
}

export default App;
