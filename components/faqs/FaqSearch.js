import React from "react";

const FaqSearch = ({ faqSearchPlaceholder }) => {
  return (
    <section className="search-section mb-14">
      <div className="container px-28 mx-auto">
        <div className="w-8/12 mx-auto bg-white p-5 rounded-2xl">
          <form className="relative">
            <input
              placeholder={faqSearchPlaceholder}
              type="search"
              name="searchFaq"
              id="searchFaq"
              className="w-full bg-neutral-150 py-0 pl-6 pr-14 h-14 border-neutral-150 focus:border-neutral-300 focus:outline-0 focus:ring-0 placeholder:text-xl placeholder:font-italic placeholder:text-neutral-400 rounded-full"
            />

            <button
              type="submit"
              className="btn-round w-12 h-12 bg-gradient-to-b from-green-450 to-teal-650 hover:from-teal-650 hover:to-green-450 absolute top-1/2 -translate-y-1/2 right-1 text-white transition"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaqSearch;
