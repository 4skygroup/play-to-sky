import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/inputs/input";
import Textarea from "../components/inputs/textarea";
import { useTranslations } from "../utils/useTranslations";

export default function Contact() {
  const t = useTranslations();

  return (
    <div>
      <Header bgColor="white" />
      <section className="flex flex-col items-center w-full pb-25 pt-12.5 px-45 gap-y-18.75">
        <h1 className="text-5xl">{t.contactPage.contactUs}</h1>
        <div className="flex justify-between w-full">
          <a
            href="mailto:contact@playtosky.com"
            className="flex flex-col gap-y-3.75 border-2 border-black border-solid items-center py-3.75 px-6.25 text-2xl cursor-pointer hover:text-white hover:bg-black"
          >
            <span className="font-bold uppercase">{t.contactPage.email}</span>
            <span>contact@playtosky.com</span>
          </a>
          <a
            href="tel:+33123456789"
            className="flex flex-col gap-y-3.75 border-2 border-black border-solid items-center py-3.75 px-6.25 text-2xl cursor-pointer hover:text-white hover:bg-black"
          >
            <span className="font-bold uppercase">{t.contactPage.phone}</span>
            <span>+33 1 23 45 67 89</span>
          </a>
          <div className="flex flex-col gap-y-3.75 border-2 border-black border-solid items-center py-3.75 px-6.25 text-2xl cursor-pointer hover:text-white hover:bg-black">
            <span className="font-bold uppercase">{t.contactPage.location}</span>
            <span> Paris, France</span>
          </div>
        </div>
      </section>
      <section className="bg-footer-bg flex gap-x-17.5 justify-center items-center py-25 px-20">
        <div>
          <p className="uppercase text-white text-3xl border-l-5 border-solid border-white pl-5 w-112.5 ">
            {t.contactPage.shareVision}
          </p>
        </div>
        <div className="flex flex-col w-175 gap-y-12.5">
          <div className="flex w-full gap-x-12.5">
            <Input
              label={t.contactPage.name}
              labelStyle="text-white uppercase font-bold text-2xl"
              placeholder={t.contactPage.yourName}
              style="w-81.25 px-2.5 py-1 border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl outline-none text-white"
            />
            <Input
              label={t.contactPage.email}
              placeholder={t.contactPage.yourEmail}
              labelStyle="text-white uppercase font-bold text-2xl"
              style="w-81.25 px-2.5 py-1 border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl outline-none text-white"
              type="email"
            />
          </div>
          <Input
            label={t.contactPage.yourProject}
            labelStyle="text-white uppercase font-bold text-2xl"
            placeholder={t.contactPage.buildTogether}
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl px-2.5 py-1 outline-none text-white"
            type="email"
          />
          <Textarea
            label={t.contactPage.yourMessage}
            labelStyle="text-white uppercase font-bold text-2xl"
            placeholder={t.contactPage.tellMore}
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl px-2.5 py-1 h-40 resize-none outline-none text-white"
          />
          <button className="bg-white text-footer-bg rounded-sm py-3.75 px-7.5 text-2xl w-fit uppercase cursor-pointer">
            {t.contactPage.send}
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
