/**
 * ------------------------------------------------------------------------
 * Minal Functions
 * ------------------------------------------------------------------------
 */

import "tw-elements";

(function ($, window, document, undefined) {
  "use strict";
  const windowEl = window,
    html = document.html,
    body = document.body,
    pageWrapEl = document.querySelector(".page-wrap"),
    bgImgsEls = document.querySelectorAll(".bg-img"),
    svgEls = document.querySelectorAll("svg"),
    arrSum = (arr) => arr.reduce((a, b) => a + b, 0),
    nodeToArrayConverter = (nodelist) => Array.prototype.slice.call(nodelist),
    whichAnimationEvent = () => {
      let t,
        el = document.createElement("fakeelement");

      let animations = {
        animation: "animationend",
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "mozAnimationEnd",
      };

      for (t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    },
    getVendorPrefix = (arrayOfPrefixes) => {
      let tmp = document.createElement("div");
      let result = "";

      for (let i = 0; i < arrayOfPrefixes.length; ++i) {
        if (typeof tmp.style[arrayOfPrefixes[i]] != "undefined") {
          result = arrayOfPrefixes[i];
          break;
        } else {
          result = null;
        }
      }

      return result;
    },
    animationDelayPrefix = getVendorPrefix([
      "animationDelay",
      "webkitAnimationDelay",
      "mozAnimationDelay",
      "oAnimationDelay",
    ]),
    animationDurationPrefix = getVendorPrefix([
      "animationDuration",
      "webkitAnimationDuration",
      "mozAnimationDuration",
      "oAnimationDuration",
    ]),
    transformPrefix = getVendorPrefix([
      "transform",
      "msTransform",
      "MozTransform",
      "WebkitTransform",
      "OTransform",
    ]),
    svgScaling = (el) => {
      let svgParent = ".svg-scaler";

      if (jQuery(el).closest(svgParent).length > 0) {
        let svgEl = el,
          svgElViewBox = svgEl.getAttribute("viewBox"),
          svgElViewBoxArray =
            svgElViewBox.search(",") === -1
              ? svgElViewBox.split(" ")
              : svgElViewBox.split(","),
          svgWidth = svgElViewBoxArray[2],
          svgHeight = svgElViewBoxArray[3],
          svgRatio = (100 * svgHeight) / svgWidth;

        jQuery(svgEl)
          .closest(svgParent)
          .css({
            paddingBottom: svgRatio + "%",
          });
      }
    };

  const app = {
    appinit: () => {
      app.svgScaling();
    },
    svgScaling: () => {
      const svgElsArray = nodeToArrayConverter(svgEls);

      svgElsArray.forEach((svgEl) => {
        svgScaling(svgEl);
      });
    },
  };

  jQuery(document).ready(() => {
    app.appinit();
  });
})(window.jQuery, window, document);
