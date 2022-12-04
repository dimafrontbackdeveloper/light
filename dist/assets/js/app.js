/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// for proper work of script of animation of disappear tunnel shadow\r\nwindow.onbeforeunload = function () {\r\n  window.scrollTo(0, 0);\r\n};\r\n\r\n// find elements\r\nconst tunnelShadowWrapper = document.querySelector('.tunnel-shadow-wrapper');\r\nconst introBgTunnelShadow = document.querySelector('.intro__bg-tunnel-shadow');\r\nconst introRow = document.querySelector('.intro__row');\r\n\r\nconst tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top; // position of tunnel in the page\r\nconst introRowRectTop = introRow.getBoundingClientRect().top; // position of introRow in the page\r\nconst delay = window.innerWidth > 1441 ? 300 : window.innerWidth > 1025 ? 200 : 100; // delay before starting animation\r\nlet wrapperHeight = introBgTunnelShadow.clientHeight;\r\nlet introRowHeight = introRow.clientHeight;\r\nlet windowScrollYMorePrevValue = 0;\r\n\r\n// initial height for tunnelShadowWrapper\r\ntunnelShadowWrapper.style.height = `${\r\n  wrapperHeight - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n}px`;\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  // if scroll down\r\n  if (window.scrollY > windowScrollYMorePrevValue) {\r\n    windowScrollYMorePrevValue = window.scrollY;\r\n    // if we scroll tunnel + delay\r\n    if (-(tunnelShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {\r\n      // tunnel shadow wrapper go to bottom\r\n      tunnelShadowWrapper.style.transform = `translateY(${\r\n        (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n      }px)`;\r\n      // tunnel shadow go to top\r\n      introBgTunnelShadow.style.transform = `translateY(-${\r\n        (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n      }px)`;\r\n      // decrease tunnelShadowWrapper height because it's will be climb out of the page\r\n      tunnelShadowWrapper.style.height = `${\r\n        wrapperHeight - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n      }px`;\r\n\r\n      // if we scroll below introRow, we hide shadow\r\n      if (-(introRowRectTop - window.scrollY - window.innerHeight) - introRowHeight > 0) {\r\n        tunnelShadowWrapper.style.transform = `translateY(${\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n          wrapperHeight -\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        }px)`;\r\n        // tunnel shadow go to top\r\n        introBgTunnelShadow.style.transform = `translateY(-${\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n          wrapperHeight -\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        }px)`;\r\n\r\n        tunnelShadowWrapper.style.height = `0px`;\r\n      }\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;