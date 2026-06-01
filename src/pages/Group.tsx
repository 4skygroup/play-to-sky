import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslations } from "../utils/useTranslations";


export default function Group() {
  const t = useTranslations();

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
