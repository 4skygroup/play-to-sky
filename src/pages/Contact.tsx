import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/inputs/input";
import Textarea from "../components/inputs/textarea";

export default function Contact() {
  return (
    <div>
      <Header bgColor="white" />
      <section>
        <h1>Conact Us</h1>
        <div>
          <div>
            <span>Email</span>
            <span>contact@playtosky.fr</span>
          </div>
          <div>
            <span>Phone</span>
            <span>+33 1 23 45 67 89</span>
          </div>
          <div>
            <span>Location</span>
            <span> Paris, France</span>
          </div>
        </div>
      </section>
      <section className="bg-footer-bg flex gap-x-17.5">
        <div>
          <p className="uppercase text-white text-3xl border-l-5 border-solid border-white pl-5 w-112.5 ">
            SHARE WITH US YOUR VISION. TOGETHER WE’LL MAKE IT COME TRUE
          </p>
        </div>
        <div className="flex flex-col width-175 gap-y-12.5">
          <Input
            label="Name"
            labelStyle="text-white uppercase"
            placeholder="Your name"
            style="border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray"
          />
          <Input
            label="Email"
            placeholder="my@email.com"
            labelStyle="text-white uppercase"
            style="border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray"
            type="email"
          />
          <Input
            label="Your project"
            labelStyle="text-white uppercase"
            placeholder="What are we going your build together ?"
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray"
            type="email"
          />
          <Textarea
            label="Your message"
            labelStyle="text-white uppercase"
            placeholder="Tell us more about what your project is about ..."
            style="w-full border-b-1 border-b-dark-gray border-b-solid placeholder:text-dark-gray"
          />
          <button className="bg-dark-gray text-white rounded-sm py-2 px-4 mt-5">
            Send
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
