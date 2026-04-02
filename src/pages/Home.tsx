import "../App.css";
import LandingSection from "../components/LandingSection";
import Subsidiary from "../components/Subsidiary";
import type { SubsidiaryType } from "../types/subsidiary";
import Footer from "../components/Footer";

function Home() {
  const subsidiariesClassName: string =
    "flex w-full justify-center bg-red p-28.75 h-fit";
  const subsidiaries: SubsidiaryType[] = [
    {
      src: "/images/Visuance.png",
      alt: "Visuance Image",
      catchphrase: "Brand Design and Identity",
      className: subsidiariesClassName,
      additionnalClassName: "text-black",
      index: "visuance",
    },
    {
      src: "/images/Pulse X.png",
      alt: "Pulse X Image",
      catchphrase: "Social Agency - Media and Community Management",
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
    },
    {
      src: "/images/Pulse X Agency.png",
      alt: "Pulse X Agency Image",
      catchphrase: "Influence Agency and Content Creator",
      className: subsidiariesClassName,
      additionnalClassName: "bg-pulse-x-agency-pink text-white",
    },
    {
      src: "/images/Snackly.png",
      alt: "Snackly Image",
      catchphrase: "Snack Content Agency",
      className: subsidiariesClassName,
      additionnalClassName: "bg-snackly-orange text-white",
    },
    {
      src: "/images/Seofy.png",
      alt: "Seofy Image",
      catchphrase:
        " Search Engines (SEO) Agency of AI and Media Buying SEA,\nSocial Ads and Programmatic",
      className: subsidiariesClassName,
      additionnalClassName: "bg-seofy-green text-white",
    },
    {
      src: "/images/Drox 360.png",
      alt: "Drox 360 Image",
      catchphrase: "Creative Energy Agency - Innovative",
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
    },
    {
      src: "/images/Sky To Be Media.png",
      alt: "Sky To Be Media Image",
      catchphrase: "Media Production Society",
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
    },
    {
      src: "/images/Play To Sky Productions.png",
      alt: "Play To Sky Productions Image",
      catchphrase: "Movies Production Society",
      className: subsidiariesClassName,
      additionnalClassName: "bg-play-to-sky-productions-gray text-white",
    },
    {
      src: "/images/CYBERSKY.png",
      alt: "CYBERSKY Image",
      catchphrase: "IT Solutions and solutions for corporations",
      className: subsidiariesClassName,
      additionnalClassName: "bg-black text-white",
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
        />
      ))}
      <Footer />
    </>
  );
}

export default Home;
