import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/inputs/input";
import Textarea from "../components/inputs/textarea";
import { useTranslations } from "../utils/useTranslations";
import { useSeo } from "../utils/useSeo";

export default function Contact() {
  const t = useTranslations();
  useSeo({
    title: "Contact Us | Play To Sky",
    description:
      "Get in touch with Play To Sky Group. Contact our team for partnerships, marketing projects, and brand scaling opportunities.",
    canonical: "https://www.playtosky.com/contact",
    breadcrumbs: [
      { name: "Home", url: "https://www.playtosky.com/" },
      { name: "Contact", url: "https://www.playtosky.com/contact" },
    ],
  });

  return (
    <div>
      <Header bgColor="white" />

      {/* Section 1 : Informations de contact en mobile-first */}
      <section className="flex flex-col items-center w-full pb-12 md:pb-25 pt-8 md:pt-12.5 px-4 md:px-45 gap-y-10 md:gap-y-18.75">

        <h1 className="text-4xl md:text-5xl text-center">
          {t.contactPage.contactUs}
        </h1>

        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          <a
            href="mailto:contact@playtosky.com"
            className="flex flex-col gap-y-2 md:gap-y-3.75 border-2 border-black border-solid items-center py-3 md:py-3.75 px-4 md:px-6.25 text-lg md:text-2xl cursor-pointer hover:text-white hover:bg-black w-full md:w-1/3 text-center transition-colors"
          >
            <span className="font-bold uppercase">{t.contactPage.email}</span>
            <span className="break-all">contact@playtosky.com</span>
          </a>
          <a
            href="tel:+33123456789"
            className="flex flex-col gap-y-2 md:gap-y-3.75 border-2 border-black border-solid items-center py-3 md:py-3.75 px-4 md:px-6.25 text-lg md:text-2xl cursor-pointer hover:text-white hover:bg-black w-full md:w-1/3 text-center transition-colors"
          >
            <span className="font-bold uppercase">{t.contactPage.phone}</span>
            <span>+33 1 23 45 67 89</span>
          </a>
          <div className="flex flex-col gap-y-2 md:gap-y-3.75 border-2 border-black border-solid items-center py-3 md:py-3.75 px-4 md:px-6.25 text-lg md:text-2xl cursor-pointer hover:text-white hover:bg-black w-full md:w-1/3 text-center transition-colors">
            <span className="font-bold uppercase">{t.contactPage.location}</span>
            <span>Paris, France</span>
          </div>
        </div>
      </section>

      {/* Section 2 : Formulaire de contact */}
      <section className="bg-footer-bg flex flex-col lg:flex-row gap-10 lg:gap-x-17.5 justify-center items-center py-12 md:py-25 px-4 md:px-20">
        <div className="w-full lg:w-auto">
          <p className="uppercase text-white text-2xl md:text-3xl border-l-4 md:border-l-5 border-solid border-white pl-4 md:pl-5 w-full lg:w-112.5">
            {t.contactPage.shareVision}
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-175 gap-y-8 md:gap-y-12.5">
          <div className="flex flex-col md:flex-row w-full gap-y-8 md:gap-y-0 gap-x-12.5">
            <div className="w-full md:w-1/2">
              <Input
                label={t.contactPage.name}
                labelStyle="text-white uppercase font-bold text-xl md:text-2xl"
                placeholder={t.contactPage.yourName}
                style="w-full px-2.5 py-1 border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-lg md:placeholder:text-xl outline-none text-white bg-transparent"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Input
                label={t.contactPage.email}
                placeholder={t.contactPage.yourEmail}
                labelStyle="text-white uppercase font-bold text-xl md:text-2xl"
                style="w-full px-2.5 py-1 border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-lg md:placeholder:text-xl outline-none text-white bg-transparent"
                type="email"
              />
            </div>
          </div>

          <Input
            label={t.contactPage.yourProject}
            labelStyle="text-white uppercase font-bold text-xl md:text-2xl"
            placeholder={t.contactPage.buildTogether}
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-lg md:placeholder:text-xl px-2.5 py-1 outline-none text-white bg-transparent"
            type="text"
          />

          <Textarea
            label={t.contactPage.yourMessage}
            labelStyle="text-white uppercase font-bold text-xl md:text-2xl"
            placeholder={t.contactPage.tellMore}
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-lg md:placeholder:text-xl px-2.5 py-1 h-32 md:h-40 resize-none outline-none text-white bg-transparent"
          />

          <button className="bg-white text-footer-bg rounded-sm py-3 md:py-3.75 px-6 md:px-7.5 text-xl md:text-2xl w-full md:w-fit uppercase cursor-pointer hover:bg-gray-200 transition-colors">
            {t.contactPage.send}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}