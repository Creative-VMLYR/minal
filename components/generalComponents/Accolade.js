import React, { useState, useEffect } from "react";
import axios from "axios";

import { WORDPRESS_MEDIA_API_URL } from "../../lib/constants";
import Image from "next/image";

const Accolade = ({ accolade }) => {
  const accoladeImgId = accolade.accolades_image;
  const [accoladeImg, setAccoladeImg] = useState(null);

  const fetchImage = async () => {
    try {
      const accoladeImgRes = await axios.get(
        `${WORDPRESS_MEDIA_API_URL}/${accoladeImgId}`
      );
      setAccoladeImg(accoladeImgRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="flex-grow flex-shrink-0 basis-0 px-4">
      <div className="flex items-center justify-center">
        <h3 className="text-4xl  mr-4">{accolade.accolades_title} </h3>

        {accoladeImg && (
          <figure>
            <Image
              src={accoladeImg.source_url}
              alt={accoladeImg.alt_text ? accoladeImg.alt_text : ""}
              width={accoladeImg.media_details.width}
              height={accoladeImg.media_details.height}
              layout="raw"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default Accolade;
