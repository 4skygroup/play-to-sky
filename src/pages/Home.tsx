import "../App.css";
import LandingSection from "../components/LandingSection";
import Subsidiary from "../components/Subsidiary";
import type { SubsidiaryType } from "../types/subsidiary";
import Footer from "../components/Footer";
import { useTranslations } from "../utils/useTranslations";
import { useSeo } from "../utils/useSeo";

function Home() {
  const t = useTranslations();
  useSeo({
    title: "Play To Sky | Multinational 360° Marketing Group",
    description:
      "Play To Sky is a multinational marketing group founded in 2025. We scale brands through creativity, innovation and performance — from SEO and media production to brand design and community management.",
    canonical: "https://www.playtosky.com/",
  });
  const subsidiariesClassName: string =
    "flex w-full justify-center p-28.75 h-screen items-center";
  const subsidiaries: SubsidiaryType[] = [
    {
      src: "/images/Visuance.png",
      alt: "Visuance Image",
      catchphrase: t.subsidiaries.visuance,
      className: subsidiariesClassName,
      additionnalClassName: "text-black",
      link: "https://www.visuanceagency.com/",
      index: "visuance",
    },
    {
      src: "/images/Pulse X.png",
      alt: "Pulse X Image",
      catchphrase: t.subsidiaries.pulseX,
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
      link: "https://www.pulsexagency.com/",
    },
    {
      src: "/images/Pulse X Agency.png",
      alt: "Pulse X Agency Image",
      catchphrase: t.subsidiaries.pulseXAgency,
      className: subsidiariesClassName,
      additionnalClassName: "bg-pulse-x-agency-pink text-white",
      link: "https://www.pulsexmanagement.com/",
    },
    {
      src: "/images/Snackly.png",
      alt: "Snackly Image",
      catchphrase: t.subsidiaries.snackly,
      className: subsidiariesClassName,
      additionnalClassName: "bg-snackly-purple text-white",
      link: "https://www.snacklyagency.com/",
    },
    {
      src: "/images/Seofy.png",
      alt: "Seofy Image",
      catchphrase: t.subsidiaries.seofy,
      className: subsidiariesClassName,
      additionnalClassName: "bg-seofy-green text-white", 
      link: "https://www.seofyagency.com/",
    },
    {
      src: "/images/Drox 360.png",
      alt: "Drox 360 Image",
      catchphrase: t.subsidiaries.drox360,
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
      index: "drox360",
      link: "https://www.drox360.com/",
    },
    {
      src: "/images/Sky To Be Media.png",
      alt: "Sky To Be Media Image",
      catchphrase: t.subsidiaries.skyToBeMedia,
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
      link: "https://www.skytobemedia.com/",
    },
    {
      src: "/images/Play To Sky Productions.png",
      alt: "Play To Sky Productions Image",
      catchphrase: t.subsidiaries.playToSkyProductions,
      className: subsidiariesClassName,
      additionnalClassName: "bg-play-to-sky-productions-gray text-white",
      link: "https://www.playtoskyproductions.com/",
    },
    {
      src: "/images/CYBERSKY.png",
      alt: "CYBERSKY Image",
      catchphrase: t.subsidiaries.cybersky,
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
      link: "https://www.cyberskyagency.com/",
    },
  ];
  return (
    <>
      <LandingSection />
      {subsidiaries.map((s, index) => (
        <Subsidiary
          index={s.index}
          alt={s.alt}
          src={s.src}
          catchphrase={s.catchphrase}
          className={s.className}
          key={index}
          additionnalClassName={s.additionnalClassName}
          link={s.link}
        />
      ))}
      <Footer />
    </>
  );
}

export default Home;
