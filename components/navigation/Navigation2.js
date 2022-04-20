import React, { useState, useEffect } from "react";
import NavigationElements from "./NavigationElements";
import MinalLogo from "../svgs/MinalLogo.svg";

const Navigation2 = ({ posAbs }) => {
  const [navPosAbs, setNavPosAbs] = useState(posAbs);

  useEffect(() => {
    setNavPosAbs(posAbs);
  }, [posAbs]);

  return (
    <section
      className={`page-header w-full ${
        navPosAbs ? "absolute top-0 left-0 z-40" : ""
      }`}
    >
      <div className="container mx-auto pt-8 px-28">
        <div className="grid grid-cols-3 gap-x-1">
          <figure className="w-32">
            <figure className="svg-scaler">
              <MinalLogo />
            </figure>
          </figure>
          <NavigationElements />
        </div>
      </div>
    </section>
  );
};

export default Navigation2;
