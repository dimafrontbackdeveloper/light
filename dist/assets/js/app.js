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

eval("// function scrollBellowFooter(footerRectTop, footerHeight, wrapper, shadowRectTop, delay, shadow) {\r\n//   if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {\r\n//     wrapper.style.transform = `translateY(${\r\n//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n//       wrapperHeight -\r\n//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//     }px)`;\r\n//     // tunnel shadow go to top\r\n//     shadow.style.transform = `translateY(-${\r\n//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n//       wrapperHeight -\r\n//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//     }px)`;\r\n\r\n//     wrapper.style.height = `0px`;\r\n//   }\r\n// }\r\n\r\n// function shadowAnimation(rectTop, delay, wrapper, shadow) {\r\n//   if (-(rectTop - window.scrollY - window.innerHeight) - delay > 0) {\r\n//     // tunnel shadow wrapper go to bottom\r\n//     wrapper.style.transform = `translateY(${\r\n//       (rectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//     }px)`;\r\n//     // tunnel shadow go to top\r\n//     shadow.style.transform = `translateY(-${\r\n//       (rectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//     }px)`;\r\n//     // decrease tunnelShadowWrapper height because it's will be climb out of the page\r\n//     wrapper.style.height = `${\r\n//       wrapperHeight - (rectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//     }px`;\r\n//     // if we scroll below footer, we hide shadow\r\n//     if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {\r\n//       tunnelShadowWrapper.style.transform = `translateY(${\r\n//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n//         wrapperHeight -\r\n//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//       }px)`;\r\n//       // tunnel shadow go to top\r\n//       introBgTunnelShadow.style.transform = `translateY(-${\r\n//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n//         wrapperHeight -\r\n//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n//       }px)`;\r\n\r\n//       tunnelShadowWrapper.style.height = `0px`;\r\n//     }\r\n//   }\r\n// }\r\n\r\nwindow.addEventListener('load', () => {\r\n  // for proper work of script of animation of disappear tunnel shadow\r\n  window.scrollTo(0, 0);\r\n\r\n  // find elements\r\n  const introBgTunnelShadow = document.querySelector('.intro__bg-shadow');\r\n  const footer = document.querySelector('.footer');\r\n\r\n  const tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top; // position of tunnel in the page\r\n  const footerRectTop = footer.getBoundingClientRect().top; // position of introRow in the page\r\n  const delay = window.innerWidth > 1441 ? 300 : window.innerWidth > 1025 ? 200 : 100; // delay before starting animation\r\n  let wrapperHeight = introBgTunnelShadow.clientHeight;\r\n  let footerHeight = footer.clientHeight;\r\n  let windowScrollYMorePrevValue = 0;\r\n  let introBgTunnelShadowHeight = window.innerWidth;\r\n\r\n  const introBgStonesShadow = document.querySelector('.intro__bg-stones-shadow');\r\n\r\n  // const stonesShadowRectTop = introBgStonesShadow.getBoundingClientRect().top; // position of tunnel in the page\r\n  // let stonesWrapperHeight = introBgStonesShadow.clientHeight;\r\n\r\n  // initial height for tunnelShadowWrapper\r\n  // tunnelShadowWrapper.style.height = `${\r\n  //   wrapperHeight - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n  // }px`;\r\n\r\n  // initial height for shadow\r\n  introBgTunnelShadow.style.height = `${introBgTunnelShadowHeight}px`;\r\n\r\n  window.addEventListener('scroll', () => {\r\n    // if scroll down\r\n    if (window.scrollY > windowScrollYMorePrevValue) {\r\n      windowScrollYMorePrevValue = window.scrollY;\r\n      // if we scroll tunnel + delay\r\n      if (-(tunnelShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {\r\n        // tunnel shadow go to bottom\r\n        introBgTunnelShadow.style.transform = `translateY(${\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        }px)`;\r\n\r\n        introBgTunnelShadow.style.height = `${\r\n          introBgTunnelShadowHeight -\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        }px`;\r\n\r\n        // introBgTunnelShadow.style.transform = `translateY(${\r\n        //   (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        // }px)`;\r\n\r\n        // if we scroll below footer, we hide shadow\r\n        // if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {\r\n        //   tunnelShadowWrapper.style.transform = `translateY(${\r\n        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n        //     wrapperHeight -\r\n        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        //   }px)`;\r\n        //   // tunnel shadow go to top\r\n        //   introBgTunnelShadow.style.transform = `translateY(-${\r\n        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n        //     wrapperHeight -\r\n        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        //   }px)`;\r\n\r\n        //   tunnelShadowWrapper.style.height = `0px`;\r\n        // }\r\n      }\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

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