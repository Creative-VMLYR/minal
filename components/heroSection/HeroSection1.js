import MinalLogo from "../svgs/MinalLogo.svg";

const HeroSection1 = ({ heroSectionData }) => {
  const heroSectionData0 = heroSectionData[0];
  const heroSectionText = heroSectionData0.hero_text;
  return (
    <section className="page-section hero-section bg-gradient-to-r from-teal-650 to-green-450 relative">
      <div className="absolute inset-0 z-10 bg-gradient-radial from-teal-100 opacity-60"></div>

      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center text-center pb-14 relative z-20">
        <div className="hs-img w-64">
          <figure className="svg-scaler">
            <MinalLogo />
          </figure>
        </div>

        <div className="hs-text text-white pt-12">
          <h1>{heroSectionText}</h1>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-11 z-20">
        <a
          href="#"
          className="js-move-section btn-round border-white hover:border-stone-200 text-white hover:text-white/70 transition"
        >
          <span className="bi bi-arrow-down"></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection1;
