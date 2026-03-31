import Header from "./Header";

export default function LandingSection() {
  return (
    <section className="landing-section flex flex-col items-center text-center text-white bg-black w-screen h-screen">
      <Header bgColor="black" />
      <div className="flex justify-center items-center w-full h-[calc(100%-120px)]">
        <div className="flex flex-col justify-center items-center gap-y-13.75">
          <p className="text-5xl">
            Scaling Brands, One Group, Infinite Growth.
          </p>
          <div className="flex flex-col justify-center items-center gap-y-5 text-2xl text-app-gray">
            <span>Découvrez nos agences</span>
            <a href="#visuance">
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.06673 0.0322442C0.663698 0.126155 0.29588 0.435278 0.111972 0.830486C0.0219738 1.03005 0.00240905 1.11613 0.006322 1.39786C0.006322 2.02394 -0.369322 1.60134 4.67056 6.64904C7.71092 9.69332 9.20958 11.1685 9.33089 11.235C9.61653 11.3876 9.94913 11.4424 10.2465 11.3798C10.3796 11.3524 10.5713 11.2859 10.6691 11.235C10.7904 11.1685 12.2891 9.69332 15.3294 6.64904C20.3693 1.60134 19.9937 2.02394 19.9937 1.39786C19.9937 1.11613 19.978 1.03005 19.8841 0.82266C19.5554 0.102677 18.6789 -0.202533 17.9629 0.153546C17.8611 0.204414 16.4446 1.59351 13.9051 4.1291L10 8.03032L6.09487 4.1291C3.54363 1.58177 2.13888 0.204414 2.03714 0.153546C1.73976 0.00876646 1.37194 -0.038189 1.06673 0.0322442Z"
                  fill="#75777C"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
