import React, { useEffect } from "react";

const EssentialScripts = () => {
  useEffect(() => {
    window.jQuery = require("../../public/js/jquery-3.6.0.min.js");
    require("../../public/js/app.js");
  }, []);
  return <></>;
};

export default EssentialScripts;
