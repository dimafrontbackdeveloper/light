window.addEventListener('load', () => {
  // for proper work of script of animation of disappear tunnel shadow
  window.scrollTo(0, 0);

  // find elements
  const tunnelShadowWrapper = document.querySelector('.tunnel-shadow-wrapper');
  const introBgTunnelShadow = document.querySelector('.intro__bg-tunnel-shadow');
  const footer = document.querySelector('.footer');

  const tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top; // position of tunnel in the page
  const footerRectTop = footer.getBoundingClientRect().top; // position of introRow in the page
  const delay = window.innerWidth > 1441 ? 300 : window.innerWidth > 1025 ? 200 : 100; // delay before starting animation
  let wrapperHeight = introBgTunnelShadow.clientHeight;
  let footerHeight = footer.clientHeight;
  let windowScrollYMorePrevValue = 0;

  const stonesShadowWrapper = document.querySelector('.stones-shadow-wrapper');
  const introBgStonesShadow = document.querySelector('.intro__bg-stones-shadow');

  const stonesShadowRectTop = introBgStonesShadow.getBoundingClientRect().top; // position of tunnel in the page
  let stonesWrapperHeight = introBgStonesShadow.clientHeight;

  // initial height for tunnelShadowWrapper
  tunnelShadowWrapper.style.height = `${
    wrapperHeight - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
  }px`;

  // initial height for tunnelShadowWrapper
  stonesShadowWrapper.style.height = `${
    stonesWrapperHeight - (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
  }px`;

  window.addEventListener('scroll', () => {
    // if scroll down
    if (window.scrollY > windowScrollYMorePrevValue) {
      console.log(-(footerRectTop - window.scrollY - window.innerHeight));

      windowScrollYMorePrevValue = window.scrollY;
      // if we scroll tunnel + delay
      if (-(tunnelShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {
        // tunnel shadow wrapper go to bottom
        tunnelShadowWrapper.style.transform = `translateY(${
          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px)`;
        // tunnel shadow go to top
        introBgTunnelShadow.style.transform = `translateY(-${
          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px)`;
        // decrease tunnelShadowWrapper height because it's will be climb out of the page
        tunnelShadowWrapper.style.height = `${
          wrapperHeight - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px`;
        // if we scroll below footer, we hide shadow
        if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {
          tunnelShadowWrapper.style.transform = `translateY(${
            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
            wrapperHeight -
            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
          }px)`;
          // tunnel shadow go to top
          introBgTunnelShadow.style.transform = `translateY(-${
            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
            wrapperHeight -
            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
          }px)`;

          tunnelShadowWrapper.style.height = `0px`;
        }
      }

      if (-(stonesShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {
        // tunnel shadow wrapper go to bottom
        stonesShadowWrapper.style.transform = `translateY(${
          (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px)`;
        // tunnel shadow go to top
        introBgStonesShadow.style.transform = `translateY(-${
          (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px)`;
        // decrease tunnelShadowWrapper height because it's will be climb out of the page
        stonesShadowWrapper.style.height = `${
          stonesWrapperHeight -
          (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px`;
        // if we scroll below footer, we hide shadow
        if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {
          stonesShadowWrapper.style.transform = `translateY(${
            (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
            stonesWrapperHeight -
            (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
          }px)`;
          // tunnel shadow go to top
          introBgStonesShadow.style.transform = `translateY(-${
            (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
            stonesWrapperHeight -
            (stonesShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
          }px)`;

          stonesShadowWrapper.style.height = `0px`;
        }
      }
    }
  });
});
