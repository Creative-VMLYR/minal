import React, { useState, useEffect } from "react";
import axios from "axios";

import { WORDPRESS_MEDIA_API_URL } from "../../lib/constants";
import Image from "next/image";

const FeatureSection1 = ({ aboutSectionData }) => {
  const aboutSectionData0 = aboutSectionData[0];
  const aboutSectionDataTitle = aboutSectionData0.content_title;
  const aboutSectionDataText = aboutSectionData0.content_text;
  const aboutSectionDataBgId = aboutSectionData0.background_image;
  const aboutSectionDataImageId = aboutSectionData0.content_image;
  const [aboutSectionDataImages, setAboutSectionDataImages] = useState({
    bg: null,
    contentImage: null,
  });

  const fetchImages = async () => {
    try {
      const bgImageRes = await axios.get(
        `${WORDPRESS_MEDIA_API_URL}/${aboutSectionDataBgId}`
      );
      const contentImageRes = await axios.get(
        `${WORDPRESS_MEDIA_API_URL}/${aboutSectionDataImageId}`
      );

      setAboutSectionDataImages({
        bg: bgImageRes.data,
        contentImage: contentImageRes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="page-section feature-section-1 relative overflow-hidden">
      {aboutSectionDataImages.bg && (
        <figure
          className="fs-1-img absolute inset-0 bg-cover bg-left-top"
          style={{
            backgroundImage: `url('${aboutSectionDataImages.bg.source_url}')`,
          }}
        ></figure>
      )}
      <div className="container mx-auto pt-24 px-28 pb-56 relative">
        <div className="fs-1-content grid grid-cols-2 gap-4">
          <div className="fs-1-content-text text-white">
            <h2 className="h1 font-bold mb-6">{aboutSectionDataTitle}</h2>
            <p className="text-2xl">{aboutSectionDataText}</p>
          </div>

          {aboutSectionDataImages.contentImage && (
            <figure className="fs-1-content-img pl-40">
              <Image
                src={aboutSectionDataImages.contentImage.source_url}
                alt={
                  aboutSectionDataImages.contentImage.alt_text
                    ? aboutSectionDataImages.contentImage.alt_text
                    : ""
                }
                width={aboutSectionDataImages.contentImage.media_details.width}
                height={
                  aboutSectionDataImages.contentImage.media_details.height
                }
                layout="raw"
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection1;
