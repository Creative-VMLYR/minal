import React, { useContext } from "react";
import Image from "next/image";

// Context
import FaqContext from "./faqContext";

const FaqAccordion = () => {
  const faqContextData = useContext(FaqContext);
  const { faqsTitle, faqs } = faqContextData.state;
  return (
    <section className="accordion-section-1 mt-14 mb-24">
      <div className="container px-28 mx-auto">
        {faqsTitle && (
          <h2 className="h1 mb-10 text-gray-600 text-center">{faqsTitle}</h2>
        )}

        {faqs ? (
          <div className="w-9/12 mx-auto relative">
            <div
              className="accordion accordion-flush relative z-20"
              id="faqsAccordion"
            >
              {faqs.length ? (
                faqs.map((faq, index) => (
                  <div
                    className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none border border-gray-200 mb-6"
                    key={`faqAccordion_${index}`}
                  >
                    <h2
                      className="accordion-header mb-0 text-neutral-800 bg-white"
                      id={`faqsAccordion-heading-${index}`}
                    >
                      <button
                        className="accordion-button relative flex items-center w-full py-4 px-5 text-xl text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqsAccordion-collapse-${index}`}
                        aria-expanded="true"
                        aria-controls={`faqsAccordion-collapse-${index}`}
                      >
                        {faq.faq_question}
                      </button>
                    </h2>

                    <div
                      id={`faqsAccordion-collapse-${index}`}
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby={`faqsAccordion-heading-${index}`}
                      data-bs-parent="#faqsAccordion"
                    >
                      <div
                        className="accordion-body py-4 px-5 text-gray-400 mt-1 bg-white"
                        dangerouslySetInnerHTML={{
                          __html: faq.faq_answer,
                        }}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <p>Sorry, no matches found. Try again.</p>
                </div>
              )}
            </div>

            <figure className="absolute -right-24 -bottom-20 z-10 opacity-20 w-96">
              <Image
                src="/imgs/content-images/bonsai-tree.png"
                alt=""
                width={535}
                height={568}
                layout="raw"
              />
            </figure>
          </div>
        ) : (
          "null"
        )}
      </div>
    </section>
  );
};

export default FaqAccordion;
