// API
import { getFAQsPage, getWebsiteOptions } from "../lib/api";

// Components
import PageHead from "../components/pageHead/PageHead";
import Footer from "../components/footer/Footer";
import HeroSection2 from "../components/heroSection/HeroSection2";
import FaqSection from "../components/faqs/FaqSection";

export default function FAQS({ faqsPageData, websiteOptionsData }) {
  const { acf } = faqsPageData;

  return (
    <>
      <main className="page-wrap position-relative bg-gray-150">
        <PageHead />
        <HeroSection2 heroSectionData={acf.hero_section} />
        <FaqSection faqSectionData={acf.faqs_section} />
        <Footer websiteOptionsData={websiteOptionsData} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const faqsPageDataRes = await getFAQsPage();

  const websiteOptionsDataRes = await getWebsiteOptions();

  return {
    props: {
      faqsPageData: faqsPageDataRes ?? null,
      websiteOptionsData: websiteOptionsDataRes ?? null,
    },
  };
}
