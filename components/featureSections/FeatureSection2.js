import Accolades from "../generalComponents/Accolades";

const FeatureSection2 = ({
  aboutSectionData,
  videoDescriptionTitle1,
  videoDescriptionTitle2,
  videoDescriptionTitle3,
  videoDescriptionText,
  videoURL,
}) => {
  return (
    <section className="page-section feature-section-2 relative z-10 -mt-56 mb-14">
      <div className="container mx-auto px-28">
        <div className="fs-2-content">
          <Accolades accolades={aboutSectionData[0].accolades} />

          <div className="fs-2-content-body">
            {videoURL && (
              <div className="video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src={videoURL}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <div className="fs-2-content-footer flex justify-end  relative z-10 pr-4">
            <div className="inline-flex flex-col -mt-20 text-right">
              <h4 className="mb-4">
                {videoDescriptionTitle1 && (
                  <span className="block uppercase text-base tracking-widest text-white">
                    {videoDescriptionTitle1}
                  </span>
                )}

                {videoDescriptionTitle2 && (
                  <span className="block text-6xl font-bold text-stroke text-stroke-white">
                    {videoDescriptionTitle2}
                  </span>
                )}

                {videoDescriptionTitle3 && (
                  <span className="block text-6xl font-bold text-stroke text-stroke-teal-650">
                    {videoDescriptionTitle3}
                  </span>
                )}
              </h4>

              {videoDescriptionText && (
                <p className="w-72">{videoDescriptionText}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
