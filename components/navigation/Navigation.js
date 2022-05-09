import React, { useState, useEffect } from "react";
import NavigationElements from "./NavigationElements";
import MinalLogo from "../svgs/MinalLogo.svg";

const Navigation = ({ addLogo, menuItemsData }) => {
  const [logo, setLogo] = useState(addLogo);

  useEffect(() => {
    setLogo(addLogo);
  }, [addLogo]);

  return (
    <section className="page-header w-full absolute top-0 left-0 z-40">
      <div className="container mx-auto pt-8 px-28">
        {logo ? (
          <div className="grid grid-cols-3 gap-x-1">
            <figure className="w-32">
              <figure className="svg-scaler">
                <MinalLogo />
              </figure>
            </figure>
            <NavigationElements menuItemsData={menuItemsData} />
          </div>
        ) : (
          <NavigationElements menuItemsData={menuItemsData} />
        )}
      </div>
    </section>
  );
};

export default Navigation;
