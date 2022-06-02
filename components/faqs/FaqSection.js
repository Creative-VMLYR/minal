import React, { useState } from "react";

// Context
import FaqContext from "./faqContext";

// Components
import FaqAccordion from "./FaqAccordion";
import FaqSearch from "./FaqSearch";

const FaqSection = ({ faqSectionData }) => {
  const faqSectionDataRes = faqSectionData[0];
  const faqSearchPlaceholder = faqSectionDataRes.faq_search_placeholder;
  const faqsTitle = faqSectionDataRes.faqs_title;
  const unFilteredFaqsList = faqSectionDataRes.faqs_qa;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqsQA = () => {
    if (unFilteredFaqsList.length) {
      return unFilteredFaqsList.filter(
        (unFilteredFaq) =>
          unFilteredFaq.faq_question
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          unFilteredFaq.faq_answer
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    } else {
      return;
    }
  };

  return (
    <section className="relative z-10 -mt-[48px]">
      <FaqContext.Provider
        value={{
          state: {
            faqSearchPlaceholder,
            faqsTitle,
            faqs: filteredFaqsQA(),
            setSearchTerm,
          },
        }}
      >
        <FaqSearch />
        <FaqAccordion />
      </FaqContext.Provider>
    </section>
  );
};

export default FaqSection;
