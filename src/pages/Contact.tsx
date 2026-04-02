import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/inputs/input";
import Textarea from "../components/inputs/textarea";

export default function Contact() {
  return (
    <div>
      <Header bgColor="white" />
      <section className="flex flex-col items-center w-full pb-25 pt-12.5 px-45 gap-y-18.75">
        <h1 className="text-5xl">Contact Us</h1>
        <div className="flex justify-between w-full">
          <a
            href="mailto:contact@playtosky.fr"
            className="flex flex-col gap-y-3.75 border-2 border-black border-solid items-center py-3.75 px-6.25 text-2xl cursor-pointer hover:text-white hover:bg-black"
          >
            <span className="font-bold uppercase">Email</span>
            <span>contact@playtosky.fr</span>
          </a>
          <a
            href="tel:+33123456789"
            className="flex flex-col gap-y-3.75 border-2 border-black border-solid items-center py-3.75 px-6.25 text-2xl cursor-pointer hover:text-white hover:bg-black"
          >
            <span className="font-bold uppercase">Phone</span>
            <span>+33 1 23 45 67 89</span>
          </a>
          <div className="flex flex-col gap-y-3.75 border-2 border-black border-solid items-center py-3.75 px-6.25 text-2xl cursor-pointer hover:text-white hover:bg-black">
            <span className="font-bold uppercase">Location</span>
            <span> Paris, France</span>
          </div>
        </div>
      </section>
      <section className="bg-footer-bg flex gap-x-17.5 justify-center items-center py-25 px-20">
        <div>
          <p className="uppercase text-white text-3xl border-l-5 border-solid border-white pl-5 w-112.5 ">
            SHARE WITH US YOUR VISION. TOGETHER WE’LL MAKE IT COME TRUE
          </p>
        </div>
        <div className="flex flex-col w-175 gap-y-12.5">
          <div className="flex w-full gap-x-12.5">
            <Input
              label="Name"
              labelStyle="text-white uppercase font-bold text-2xl"
              placeholder="Your name"
              style="w-81.25 px-2.5 py-1 border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl outline-none text-white"
            />
            <Input
              label="Email"
              placeholder="my@email.com"
              labelStyle="text-white uppercase font-bold text-2xl"
              style="w-81.25 px-2.5 py-1 border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl outline-none text-white"
              type="email"
            />
          </div>
          <Input
            label="Your project"
            labelStyle="text-white uppercase font-bold text-2xl"
            placeholder="What are we going your build together ?"
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl px-2.5 py-1 outline-none text-white"
            type="email"
          />
          <Textarea
            label="Your message"
            labelStyle="text-white uppercase font-bold text-2xl"
            placeholder="Tell us more about what your project is about ..."
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray placeholder:text-xl px-2.5 py-1 h-40 resize-none outline-none text-white"
          />
          <button className="bg-white text-footer-bg rounded-sm py-3.75 px-7.5 text-2xl w-fit uppercase cursor-pointer">
            Send
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
