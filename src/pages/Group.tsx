import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslations } from "../utils/useTranslations";
import { useSeo } from "../utils/useSeo";

export default function Group() {
  const t = useTranslations();
  useSeo({
    title: "Our Group | Play To Sky",
    description:
      "Learn about Play To Sky Group, a multinational 360° marketing group founded in 2025, scaling brands through creativity, innovation, and performance across Europe, Africa, North America, and the Middle East.",
    canonical: "https://www.playtosky.com/our-group",
    breadcrumbs: [
      { name: "Home", url: "https://www.playtosky.com/" },
      { name: "Our Group", url: "https://www.playtosky.com/our-group" },
    ],
  });

  return (
    <div>
      <Header bgColor="white" />
      <div className="flex justify-center items-center my-31.25">
        <div className="max-lg:px-15 flex flex-col gap-y-12.5">
          <h1 className="text-[4rem]">{t.aboutUsPage.title}</h1>
          <p className=" flex flex-col text-2xl max-w-200 break-normal gap-y-5">
            <span>
              {t.aboutUsPage.title}
            </span>
            <span>
              {t.aboutUsPage.text1}
            </span>
            <span>
              {t.aboutUsPage.text3}
            </span>
            <span>
              {t.aboutUsPage.text4}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
