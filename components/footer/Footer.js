import FeatureSection5 from "../featureSections/FeatureSection5";

const Footer = ({ websiteOptionsData }) => {
  const { acf } = websiteOptionsData;
  const apptCTAQuestion = acf.appointment_cta_question;
  const apptCTABtnText = acf.appointment_cta_button_text;
  const apptCTATitle = acf.appointment_cta_title;
  const copyrightText = acf.copyright_text;
  return (
    <>
      <FeatureSection5
        apptCTATitle={apptCTATitle}
        apptCTABtnText={apptCTABtnText}
        apptCTAQuestion={apptCTAQuestion}
      />

      <footer className="page-section bg-green-950">
        <div className="container mx-auto py-4">
          <div className="footer-content grid grid-cols-3 gap-x-1 text-white">
            {copyrightText && (
              <p
                className="text-sm uppercase tracking-widest"
                dangerouslySetInnerHTML={{
                  __html: copyrightText,
                }}
              ></p>
            )}

            <ul className="flex justify-center text-center uppercase text-sm tracking-widest">
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition"
                >
                  FAQs
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition"
                >
                  Blog
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="js-move-section flex items-center justify-end text-sm"
            >
              Back to top <i className="bi bi-arrow-up ml-2"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
