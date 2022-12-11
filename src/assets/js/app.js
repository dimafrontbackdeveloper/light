// function scrollBellowFooter(footerRectTop, footerHeight, wrapper, shadowRectTop, delay, shadow) {
//   if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {
//     wrapper.style.transform = `translateY(${
//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
//       wrapperHeight -
//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1
//     }px)`;
//     // tunnel shadow go to top
//     shadow.style.transform = `translateY(-${
//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
//       wrapperHeight -
//       (shadowRectTop - window.scrollY - window.innerHeight + delay) * -1
//     }px)`;

//     wrapper.style.height = `0px`;
//   }
// }

// function shadowAnimation(rectTop, delay, wrapper, shadow) {
//   if (-(rectTop - window.scrollY - window.innerHeight) - delay > 0) {
//     // tunnel shadow wrapper go to bottom
//     wrapper.style.transform = `translateY(${
//       (rectTop - window.scrollY - window.innerHeight + delay) * -1
//     }px)`;
//     // tunnel shadow go to top
//     shadow.style.transform = `translateY(-${
//       (rectTop - window.scrollY - window.innerHeight + delay) * -1
//     }px)`;
//     // decrease tunnelShadowWrapper height because it's will be climb out of the page
//     wrapper.style.height = `${
//       wrapperHeight - (rectTop - window.scrollY - window.innerHeight + delay) * -1
//     }px`;
//     // if we scroll below footer, we hide shadow
//     if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {
//       tunnelShadowWrapper.style.transform = `translateY(${
//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
//         wrapperHeight -
//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
//       }px)`;
//       // tunnel shadow go to top
//       introBgTunnelShadow.style.transform = `translateY(-${
//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
//         wrapperHeight -
//         (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
//       }px)`;

//       tunnelShadowWrapper.style.height = `0px`;
//     }
//   }
// }

window.addEventListener('load', () => {
  // for proper work of script of animation of disappear tunnel shadow
  window.scrollTo(0, 0);

  // find elements
  const introBgTunnelShadow = document.querySelector('.intro__bg-shadow');
  const footer = document.querySelector('.footer');

  const tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top; // position of tunnel in the page
  const footerRectTop = footer.getBoundingClientRect().top; // position of introRow in the page
  const delay = window.innerWidth > 1441 ? 300 : window.innerWidth > 1025 ? 200 : 100; // delay before starting animation
  let wrapperHeight = introBgTunnelShadow.clientHeight;
  let footerHeight = footer.clientHeight;
  let windowScrollYMorePrevValue = 0;
  let introBgTunnelShadowHeight = window.innerWidth;

  const introBgStonesShadow = document.querySelector('.intro__bg-stones-shadow');

  // const stonesShadowRectTop = introBgStonesShadow.getBoundingClientRect().top; // position of tunnel in the page
  // let stonesWrapperHeight = introBgStonesShadow.clientHeight;

  // initial height for tunnelShadowWrapper
  // tunnelShadowWrapper.style.height = `${
  //   wrapperHeight - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
  // }px`;

  // initial height for shadow
  introBgTunnelShadow.style.height = `${introBgTunnelShadowHeight}px`;

  window.addEventListener('scroll', () => {
    // if scroll down
    if (window.scrollY > windowScrollYMorePrevValue) {
      windowScrollYMorePrevValue = window.scrollY;
      // if we scroll tunnel + delay
      if (-(tunnelShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {
        // tunnel shadow go to bottom
        introBgTunnelShadow.style.transform = `translateY(${
          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px)`;

        introBgTunnelShadow.style.height = `${
          introBgTunnelShadowHeight -
          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px`;

        // introBgTunnelShadow.style.transform = `translateY(${
        //   (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        // }px)`;

        // if we scroll below footer, we hide shadow
        // if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {
        //   tunnelShadowWrapper.style.transform = `translateY(${
        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
        //     wrapperHeight -
        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        //   }px)`;
        //   // tunnel shadow go to top
        //   introBgTunnelShadow.style.transform = `translateY(-${
        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
        //     wrapperHeight -
        //     (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        //   }px)`;

        //   tunnelShadowWrapper.style.height = `0px`;
        // }
      }
    }
  });
});
