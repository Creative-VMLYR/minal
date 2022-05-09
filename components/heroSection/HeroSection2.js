import React from "react";

const HeroSection2 = ({ heroSectionData }) => {
  const heroImgUrl = heroSectionData[0].hero_image.url;
  const heroImgTitle = heroSectionData[0].hero_title;
  const heroImgSubTitle = heroSectionData[0].hero_subtitle;

  return (
    <section className="page-section hero-section-2 bg-gradient-to-b from-green-450 to-teal-650 relative h-[28rem]">
      <figure
        className="hs-2-img bg-cover absolute inset-0 z-10 mix-blend-soft-light"
        style={{
          backgroundImage: `url('${heroImgUrl}')`,
        }}
      ></figure>
      <div className="hs-2-text h-full text-white relative z-20 flex flex-col items-center justify-center text-center">
        {heroImgTitle && <h1 className="text-6xl mb-2">{heroImgTitle}</h1>}

        {heroImgSubTitle && <h2 className="h4">{heroImgSubTitle}</h2>}
      </div>
    </section>
  );
};

export default HeroSection2;
