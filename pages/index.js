// API
import {
  getLandingPage,
  getWebsiteOptions,
  getPrimaryMenuItems,
} from "../lib/api";

// Components
import PageHead from "../components/pageHead/PageHead";
import HeroSection1 from "../components/heroSection/HeroSection1";
import FeatureSection1 from "../components/featureSections/FeatureSection1";
import FeatureSection2 from "../components/featureSections/FeatureSection2";
import FeatureSection3 from "../components/featureSections/FeatureSection3";
import FeatureSection4 from "../components/featureSections/FeatureSection4";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default function Home({
  landingData,
  websiteOptionsData,
  menuItemsData,
}) {
  const { acf } = landingData;

  return (
    <>
      <Navigation menuItemsData={menuItemsData} />
      <main className="page-wrap position-relative bg-gray-150">
        <PageHead />
        <HeroSection1 heroSectionData={acf.hero_section} />
        <FeatureSection1 aboutSectionData={acf.about_section} />
        <FeatureSection2
          aboutSectionData={acf.about_section}
          videoDescriptionTitle1={acf.video_description_title_1}
          videoDescriptionTitle2={acf.video_description_title_2}
          videoDescriptionTitle3={acf.video_description_title_3}
          videoDescriptionText={acf.video_description_text}
          videoURL={acf.video_url}
        />
        <FeatureSection3 aboutSection2Data={acf.about_section_2} />
        <FeatureSection4 specialityList={acf.specialty_list} />
        <Footer websiteOptionsData={websiteOptionsData} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const landingDataRes = await getLandingPage();

  const websiteOptionsDataRes = await getWebsiteOptions();

  const menuItemsDataRes = await getPrimaryMenuItems();

  return {
    props: {
      landingData: landingDataRes ?? null,
      websiteOptionsData: websiteOptionsDataRes ?? null,
      menuItemsData: menuItemsDataRes ?? null,
    },
  };
}
