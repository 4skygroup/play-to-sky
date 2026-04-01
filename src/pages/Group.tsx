import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Group() {
  return (
    <div>
      <Header bgColor="white" />
      <div className="flex justify-center items-center my-31.25">
        <div className="flex flex-col gap-y-12.5">
          <h1 className="text-[4rem]">Our Story</h1>
          <p className="flex flex-col text-2xl max-w-200 break-normal gap-y-5">
            <span>
              Play To Sky is a multinational group founded in 2025 by Mr
              Robbin-James AGOH, a visionary in next-generation marketing.
              Focused on 360° marketing, the group supports brands, talents, and
              companies in developing their image, visibility, and international
              expansion.
            </span>
            <span>
              Led by Mr Robbin-James AGOH alongside Thierno DIALLO, Play To Sky
              positions itself as a strategic player capable of blending
              creativity, innovation, and performance to address modern
              communication challenges.
            </span>
            <span>
              Since its creation, the group has developed several strong
              entities such as Visuance, Pulse X, Pulse X Agency, Sky To Be
              Media, and other fast-growing structures, forming a global
              ecosystem dedicated to influence, media, production, and brand
              strategy.
            </span>
            <span>
              Beyond tools and technology, Play To Sky places creativity at the
              heart of its vision—because true transformative power lies in the
              ability to imagine, create, and inspire.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
