import React, { useState, useEffect } from "react";
import axios from "axios";

import { WORDPRESS_MEDIA_API_URL } from "../../lib/constants";

const FeatureSection4Item = ({ speciality }) => {
  const specialityTitle = speciality.specialty_title;
  const specialityContent = speciality.specialty_content_text;
  const specialityBgImgId = speciality.background_image;

  const [specialityImg, setSpecialityImg] = useState(null);

  const fetchImage = async () => {
    try {
      const specialityImgRes = await axios.get(
        `${WORDPRESS_MEDIA_API_URL}/${specialityBgImgId}`
      );
      setSpecialityImg(specialityImgRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div className="relative p-5 bg-teal-650 rounded-2xl overflow-hidden">
      {specialityImg && (
        <div
          className="absolute inset-0 z-10 bg-cover mix-blend-overlay opacity-50"
          style={{ backgroundImage: `url('${specialityImg.source_url}')` }}
        ></div>
      )}

      <div className="relative z-20 text-white">
        {specialityTitle && (
          <h4 className="font-bold mb-3">{specialityTitle}</h4>
        )}

        {specialityContent && specialityContent}
      </div>
    </div>
  );
};

export default FeatureSection4Item;
