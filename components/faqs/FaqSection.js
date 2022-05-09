// Components
import FaqAccordion from "./FaqAccordion";
import FaqSearch from "./FaqSearch";

const FaqSection = ({ faqSectionData }) => {
  const faqSearchPlaceholder = faqSectionData[0].faq_search_placeholder;
  const faqsTitle = faqSectionData[0].faqs_title;
  const faqsQA = faqSectionData[0].faqs_qa;
  return (
    <section className="relative z-10 -mt-[48px]">
      <FaqSearch faqSearchPlaceholder={faqSearchPlaceholder} />
      <FaqAccordion faqsTitle={faqsTitle} faqsQA={faqsQA} />
    </section>
  );
};

export default FaqSection;
