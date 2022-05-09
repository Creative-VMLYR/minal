import Image from "next/image";

const FeatureSection1 = ({ aboutSectionData }) => {
  const aboutSectionData0 = aboutSectionData[0];
  const aboutSectionDataTitle = aboutSectionData0.content_title;
  const aboutSectionDataText = aboutSectionData0.content_text;
  const aboutSectionDataBg = aboutSectionData0.background_image.url;
  const aboutSectionDataImage = aboutSectionData0.content_image;

  return (
    <section className="page-section feature-section-1 relative overflow-hidden">
      {aboutSectionDataBg && (
        <figure
          className="fs-1-img absolute inset-0 bg-cover bg-left-top"
          style={{
            backgroundImage: `url('${aboutSectionDataBg}')`,
          }}
        ></figure>
      )}
      <div className="container mx-auto pt-24 px-28 pb-56 relative">
        <div className="fs-1-content grid grid-cols-2 gap-4">
          <div className="fs-1-content-text text-white">
            <h2 className="h1 font-bold mb-6">{aboutSectionDataTitle}</h2>
            <p className="text-2xl">{aboutSectionDataText}</p>
          </div>

          {aboutSectionDataImage.url && (
            <figure className="fs-1-content-img pl-40">
              {
                <Image
                  src={aboutSectionDataImage.url}
                  alt={
                    aboutSectionDataImage.alt ? aboutSectionDataImage.alt : ""
                  }
                  width={aboutSectionDataImage.width}
                  height={aboutSectionDataImage.height}
                  layout="raw"
                />
              }
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection1;
