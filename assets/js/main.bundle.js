/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../src/assets/js/core/app.js":
/*!************************************!*\
  !*** ../src/assets/js/core/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/**
 * ------------------------------------------------------------------------
 * Rahisi Functions
 * ------------------------------------------------------------------------
 */
(function ($) {
  "use strict";

  const windowEl = window,
        html = document.html,
        body = document.body,
        pageWrapEl = document.querySelector(".page-wrap"),
        bgImgsEls = document.querySelectorAll(".bg-img"),
        svgEls = document.querySelectorAll("svg"),
        arrSum = arr => arr.reduce((a, b) => a + b, 0),
        nodeToArrayConverter = nodelist => Array.prototype.slice.call(nodelist),
        whichAnimationEvent = () => {
    let t,
        el = document.createElement("fakeelement");
    let animations = {
      animation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
      MozAnimation: "mozAnimationEnd"
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  },
        getVendorPrefix = arrayOfPrefixes => {
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
        animationDelayPrefix = getVendorPrefix(["animationDelay", "webkitAnimationDelay", "mozAnimationDelay", "oAnimationDelay"]),
        animationDurationPrefix = getVendorPrefix(["animationDuration", "webkitAnimationDuration", "mozAnimationDuration", "oAnimationDuration"]),
        transformPrefix = getVendorPrefix(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"]),
        svgScaling = el => {
    let svgParent = ".svg-scaler";

    if ($(el).closest(svgParent).length > 0) {
      let svgEl = el,
          svgElViewBox = svgEl.getAttribute("viewBox"),
          svgElViewBoxArray = svgElViewBox.search(",") === -1 ? svgElViewBox.split(" ") : svgElViewBox.split(","),
          svgWidth = svgElViewBoxArray[2],
          svgHeight = svgElViewBoxArray[3],
          svgRatio = 100 * svgHeight / svgWidth;
      $(svgEl).closest(svgParent).css({
        paddingBottom: svgRatio + "%"
      });
    }
  },
        doAnimations = (elements, prefix = "animate__") => {
    let animationEndEvents = whichAnimationEvent();
    elements.each(function () {
      let $this = $(this),
          animationName = `${prefix}${$this.data("animation")}`,
          animationDuration = $this.data("animation-duration"),
          animationDelay = $this.data("animation-delay"),
          animationClasses = `${prefix}animated ${animationName}`;
      $this[0].style[animationDelayPrefix] = animationDelay;
      $this[0].style[animationDurationPrefix] = animationDuration;
      $this.addClass(animationClasses).one(animationEndEvents, function () {
        $this.removeClass(animationClasses);
      });
    });
  },
        zeroStartView = num => parseInt(num) > 9 ? parseInt(num) : `0${parseInt(num)}`,
        imgToBg = el => {
    let $img = $(el).find("img"),
        imgUrl = $img.attr("src");
    $(el).css({
      backgroundImage: `url("${imgUrl}")`
    });
    $img.hide();
  },
        htmlPageAnimate = (targetElem, offsetVal) => {
    if (targetElem.length) {
      let targetElemOffsetTop = offsetVal;
      $("html, body").stop().animate({
        scrollTop: targetElemOffsetTop
      }, 1000);
    }
  };

  const app = {
    appinit: () => {
      app.bgImgs();
      app.svgScaling();
    },
    bgImgs: () => {
      let allBgImgsConts = [],
          bgImgsArray = nodeToArrayConverter(bgImgsEls);
      allBgImgsConts = allBgImgsConts.concat(bgImgsArray);
      allBgImgsConts.forEach(bgImgCont => {
        imgToBg(bgImgCont);
      });
    },
    svgScaling: () => {
      const svgElsArray = nodeToArrayConverter(svgEls);
      svgElsArray.forEach(svgEl => {
        svgScaling(svgEl);
      });
    }
  };
  $(document).ready(() => {
    app.appinit();
  });
})(jQuery);

/***/ }),

/***/ "../src/assets/js/custom.js":
/*!**********************************!*\
  !*** ../src/assets/js/custom.js ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "../node_modules/jquery/dist/jquery.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference library ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))(563);

/***/ }),

/***/ "../node_modules/tw-elements/dist/js/index.min.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/tw-elements/dist/js/index.min.js from dll-reference library ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))(777);

/***/ }),

/***/ "dll-reference library":
/*!**************************!*\
  !*** external "library" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = library;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tw-elements */ "../node_modules/tw-elements/dist/js/index.min.js");
/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tw_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_core_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/core/app */ "../src/assets/js/core/app.js");
/* harmony import */ var _assets_js_core_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_core_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/custom */ "../src/assets/js/custom.js");
/* harmony import */ var _assets_js_custom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_custom__WEBPACK_IMPORTED_MODULE_3__);
// Vendor Scripts

 // Rahisi Core JS

 // Custom Scripts


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtDQUdBOztDQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvY29yZS9hcHAuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCA1NjMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYnJhcnkiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCA3NzcgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYnJhcnkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHZhciBcImxpYnJhcnlcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFJhaGlzaSBGdW5jdGlvbnNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIGNvbnN0IHdpbmRvd0VsID0gd2luZG93LFxyXG4gICAgaHRtbCA9IGRvY3VtZW50Lmh0bWwsXHJcbiAgICBib2R5ID0gZG9jdW1lbnQuYm9keSxcclxuICAgIHBhZ2VXcmFwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2Utd3JhcFwiKSxcclxuICAgIGJnSW1nc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmctaW1nXCIpLFxyXG4gICAgc3ZnRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN2Z1wiKSxcclxuICAgIGFyclN1bSA9IChhcnIpID0+IGFyci5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSxcclxuICAgIG5vZGVUb0FycmF5Q29udmVydGVyID0gKG5vZGVsaXN0KSA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlbGlzdCksXHJcbiAgICB3aGljaEFuaW1hdGlvbkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdCxcclxuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKTtcclxuXHJcbiAgICAgIGxldCBhbmltYXRpb25zID0ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogXCJhbmltYXRpb25lbmRcIixcclxuICAgICAgICBXZWJraXRBbmltYXRpb246IFwid2Via2l0QW5pbWF0aW9uRW5kXCIsXHJcbiAgICAgICAgTW96QW5pbWF0aW9uOiBcIm1vekFuaW1hdGlvbkVuZFwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yICh0IGluIGFuaW1hdGlvbnMpIHtcclxuICAgICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbdF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0VmVuZG9yUHJlZml4ID0gKGFycmF5T2ZQcmVmaXhlcykgPT4ge1xyXG4gICAgICBsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZQcmVmaXhlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdG1wLnN0eWxlW2FycmF5T2ZQcmVmaXhlc1tpXV0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXJyYXlPZlByZWZpeGVzW2ldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIGFuaW1hdGlvbkRlbGF5UHJlZml4ID0gZ2V0VmVuZG9yUHJlZml4KFtcclxuICAgICAgXCJhbmltYXRpb25EZWxheVwiLFxyXG4gICAgICBcIndlYmtpdEFuaW1hdGlvbkRlbGF5XCIsXHJcbiAgICAgIFwibW96QW5pbWF0aW9uRGVsYXlcIixcclxuICAgICAgXCJvQW5pbWF0aW9uRGVsYXlcIixcclxuICAgIF0pLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb25QcmVmaXggPSBnZXRWZW5kb3JQcmVmaXgoW1xyXG4gICAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCIsXHJcbiAgICAgIFwid2Via2l0QW5pbWF0aW9uRHVyYXRpb25cIixcclxuICAgICAgXCJtb3pBbmltYXRpb25EdXJhdGlvblwiLFxyXG4gICAgICBcIm9BbmltYXRpb25EdXJhdGlvblwiLFxyXG4gICAgXSksXHJcbiAgICB0cmFuc2Zvcm1QcmVmaXggPSBnZXRWZW5kb3JQcmVmaXgoW1xyXG4gICAgICBcInRyYW5zZm9ybVwiLFxyXG4gICAgICBcIm1zVHJhbnNmb3JtXCIsXHJcbiAgICAgIFwiTW96VHJhbnNmb3JtXCIsXHJcbiAgICAgIFwiV2Via2l0VHJhbnNmb3JtXCIsXHJcbiAgICAgIFwiT1RyYW5zZm9ybVwiLFxyXG4gICAgXSksXHJcbiAgICBzdmdTY2FsaW5nID0gKGVsKSA9PiB7XHJcbiAgICAgIGxldCBzdmdQYXJlbnQgPSBcIi5zdmctc2NhbGVyXCI7XHJcblxyXG4gICAgICBpZiAoJChlbCkuY2xvc2VzdChzdmdQYXJlbnQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgc3ZnRWwgPSBlbCxcclxuICAgICAgICAgIHN2Z0VsVmlld0JveCA9IHN2Z0VsLmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIiksXHJcbiAgICAgICAgICBzdmdFbFZpZXdCb3hBcnJheSA9XHJcbiAgICAgICAgICAgIHN2Z0VsVmlld0JveC5zZWFyY2goXCIsXCIpID09PSAtMVxyXG4gICAgICAgICAgICAgID8gc3ZnRWxWaWV3Qm94LnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAgIDogc3ZnRWxWaWV3Qm94LnNwbGl0KFwiLFwiKSxcclxuICAgICAgICAgIHN2Z1dpZHRoID0gc3ZnRWxWaWV3Qm94QXJyYXlbMl0sXHJcbiAgICAgICAgICBzdmdIZWlnaHQgPSBzdmdFbFZpZXdCb3hBcnJheVszXSxcclxuICAgICAgICAgIHN2Z1JhdGlvID0gKDEwMCAqIHN2Z0hlaWdodCkgLyBzdmdXaWR0aDtcclxuXHJcbiAgICAgICAgJChzdmdFbClcclxuICAgICAgICAgIC5jbG9zZXN0KHN2Z1BhcmVudClcclxuICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBzdmdSYXRpbyArIFwiJVwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkb0FuaW1hdGlvbnMgPSAoZWxlbWVudHMsIHByZWZpeCA9IFwiYW5pbWF0ZV9fXCIpID0+IHtcclxuICAgICAgbGV0IGFuaW1hdGlvbkVuZEV2ZW50cyA9IHdoaWNoQW5pbWF0aW9uRXZlbnQoKTtcclxuICAgICAgZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgIGFuaW1hdGlvbk5hbWUgPSBgJHtwcmVmaXh9JHskdGhpcy5kYXRhKFwiYW5pbWF0aW9uXCIpfWAsXHJcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbiA9ICR0aGlzLmRhdGEoXCJhbmltYXRpb24tZHVyYXRpb25cIiksXHJcbiAgICAgICAgICBhbmltYXRpb25EZWxheSA9ICR0aGlzLmRhdGEoXCJhbmltYXRpb24tZGVsYXlcIiksXHJcbiAgICAgICAgICBhbmltYXRpb25DbGFzc2VzID0gYCR7cHJlZml4fWFuaW1hdGVkICR7YW5pbWF0aW9uTmFtZX1gO1xyXG5cclxuICAgICAgICAkdGhpc1swXS5zdHlsZVthbmltYXRpb25EZWxheVByZWZpeF0gPSBhbmltYXRpb25EZWxheTtcclxuICAgICAgICAkdGhpc1swXS5zdHlsZVthbmltYXRpb25EdXJhdGlvblByZWZpeF0gPSBhbmltYXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoYW5pbWF0aW9uQ2xhc3Nlcykub25lKGFuaW1hdGlvbkVuZEV2ZW50cywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoYW5pbWF0aW9uQ2xhc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHplcm9TdGFydFZpZXcgPSAobnVtKSA9PlxyXG4gICAgICBwYXJzZUludChudW0pID4gOSA/IHBhcnNlSW50KG51bSkgOiBgMCR7cGFyc2VJbnQobnVtKX1gLFxyXG4gICAgaW1nVG9CZyA9IChlbCkgPT4ge1xyXG4gICAgICBsZXQgJGltZyA9ICQoZWwpLmZpbmQoXCJpbWdcIiksXHJcbiAgICAgICAgaW1nVXJsID0gJGltZy5hdHRyKFwic3JjXCIpO1xyXG5cclxuICAgICAgJChlbCkuY3NzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2ltZ1VybH1cIilgLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICRpbWcuaGlkZSgpO1xyXG4gICAgfSxcclxuICAgIGh0bWxQYWdlQW5pbWF0ZSA9ICh0YXJnZXRFbGVtLCBvZmZzZXRWYWwpID0+IHtcclxuICAgICAgaWYgKHRhcmdldEVsZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1PZmZzZXRUb3AgPSBvZmZzZXRWYWw7XHJcblxyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpXHJcbiAgICAgICAgICAuc3RvcCgpXHJcbiAgICAgICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogdGFyZ2V0RWxlbU9mZnNldFRvcCB9LCAxMDAwKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgYXBwaW5pdDogKCkgPT4ge1xyXG4gICAgICBhcHAuYmdJbWdzKCk7XHJcbiAgICAgIGFwcC5zdmdTY2FsaW5nKCk7XHJcbiAgICB9LFxyXG4gICAgYmdJbWdzOiAoKSA9PiB7XHJcbiAgICAgIGxldCBhbGxCZ0ltZ3NDb250cyA9IFtdLFxyXG4gICAgICAgIGJnSW1nc0FycmF5ID0gbm9kZVRvQXJyYXlDb252ZXJ0ZXIoYmdJbWdzRWxzKTtcclxuXHJcbiAgICAgIGFsbEJnSW1nc0NvbnRzID0gYWxsQmdJbWdzQ29udHMuY29uY2F0KGJnSW1nc0FycmF5KTtcclxuXHJcbiAgICAgIGFsbEJnSW1nc0NvbnRzLmZvckVhY2goKGJnSW1nQ29udCkgPT4ge1xyXG4gICAgICAgIGltZ1RvQmcoYmdJbWdDb250KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3ZnU2NhbGluZzogKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdmdFbHNBcnJheSA9IG5vZGVUb0FycmF5Q29udmVydGVyKHN2Z0Vscyk7XHJcblxyXG4gICAgICBzdmdFbHNBcnJheS5mb3JFYWNoKChzdmdFbCkgPT4ge1xyXG4gICAgICAgIHN2Z1NjYWxpbmcoc3ZnRWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgYXBwLmFwcGluaXQoKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWJyYXJ5ICovIFwiZGxsLXJlZmVyZW5jZSBsaWJyYXJ5XCIpKSg1NjMpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGlicmFyeSAqLyBcImRsbC1yZWZlcmVuY2UgbGlicmFyeVwiKSkoNzc3KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGxpYnJhcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFZlbmRvciBTY3JpcHRzXHJcbmltcG9ydCBcImpxdWVyeVwiO1xyXG5pbXBvcnQgXCJ0dy1lbGVtZW50c1wiO1xyXG5cclxuLy8gUmFoaXNpIENvcmUgSlNcclxuaW1wb3J0IFwiLi9hc3NldHMvanMvY29yZS9hcHBcIjtcclxuXHJcbi8vIEN1c3RvbSBTY3JpcHRzXHJcbmltcG9ydCBcIi4vYXNzZXRzL2pzL2N1c3RvbVwiO1xyXG4iXSwibmFtZXMiOlsiJCIsIndpbmRvd0VsIiwid2luZG93IiwiaHRtbCIsImRvY3VtZW50IiwiYm9keSIsInBhZ2VXcmFwRWwiLCJxdWVyeVNlbGVjdG9yIiwiYmdJbWdzRWxzIiwicXVlcnlTZWxlY3RvckFsbCIsInN2Z0VscyIsImFyclN1bSIsImFyciIsInJlZHVjZSIsImEiLCJiIiwibm9kZVRvQXJyYXlDb252ZXJ0ZXIiLCJub2RlbGlzdCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwid2hpY2hBbmltYXRpb25FdmVudCIsInQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJhbmltYXRpb25zIiwiYW5pbWF0aW9uIiwiV2Via2l0QW5pbWF0aW9uIiwiTW96QW5pbWF0aW9uIiwic3R5bGUiLCJ1bmRlZmluZWQiLCJnZXRWZW5kb3JQcmVmaXgiLCJhcnJheU9mUHJlZml4ZXMiLCJ0bXAiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiYW5pbWF0aW9uRGVsYXlQcmVmaXgiLCJhbmltYXRpb25EdXJhdGlvblByZWZpeCIsInRyYW5zZm9ybVByZWZpeCIsInN2Z1NjYWxpbmciLCJzdmdQYXJlbnQiLCJjbG9zZXN0Iiwic3ZnRWwiLCJzdmdFbFZpZXdCb3giLCJnZXRBdHRyaWJ1dGUiLCJzdmdFbFZpZXdCb3hBcnJheSIsInNlYXJjaCIsInNwbGl0Iiwic3ZnV2lkdGgiLCJzdmdIZWlnaHQiLCJzdmdSYXRpbyIsImNzcyIsInBhZGRpbmdCb3R0b20iLCJkb0FuaW1hdGlvbnMiLCJlbGVtZW50cyIsInByZWZpeCIsImFuaW1hdGlvbkVuZEV2ZW50cyIsImVhY2giLCIkdGhpcyIsImFuaW1hdGlvbk5hbWUiLCJkYXRhIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25EZWxheSIsImFuaW1hdGlvbkNsYXNzZXMiLCJhZGRDbGFzcyIsIm9uZSIsInJlbW92ZUNsYXNzIiwiemVyb1N0YXJ0VmlldyIsIm51bSIsInBhcnNlSW50IiwiaW1nVG9CZyIsIiRpbWciLCJmaW5kIiwiaW1nVXJsIiwiYXR0ciIsImJhY2tncm91bmRJbWFnZSIsImhpZGUiLCJodG1sUGFnZUFuaW1hdGUiLCJ0YXJnZXRFbGVtIiwib2Zmc2V0VmFsIiwidGFyZ2V0RWxlbU9mZnNldFRvcCIsInN0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiYXBwIiwiYXBwaW5pdCIsImJnSW1ncyIsImFsbEJnSW1nc0NvbnRzIiwiYmdJbWdzQXJyYXkiLCJjb25jYXQiLCJmb3JFYWNoIiwiYmdJbWdDb250Iiwic3ZnRWxzQXJyYXkiLCJyZWFkeSIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=