import React from "react";

const FeatureSection5 = ({ apptCTATitle, apptCTABtnText, apptCTAQuestion }) => {
  return (
    <section className="page-section feature-section-5 relative overflow-hidden bg-teal-400">
      <div className="container mx-auto px-28 pt-14 ">
        <div className="fs-5-content w-9/12 mx-auto text-center text-white">
          {apptCTATitle && <h3 className="text-4xl mb-10">{apptCTATitle}</h3>}

          {apptCTABtnText && (
            <a
              href="#"
              className="btn text-2xl text-white hover:text-neutral-800 bg-transparent hover:bg-white border border-white rounded-full transition"
            >
              {apptCTABtnText}
            </a>
          )}

          {apptCTAQuestion && (
            <p className="w-full text-3xl mt-10">
              <a
                className="block py-5 bg-white/60 text-neutral-800 rounded-t-2xl"
                href="#"
              >
                {apptCTAQuestion}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection5;
