window.addEventListener('load', () => {
  // for proper work of script of animation of disappear tunnel shadow
  window.scrollTo(0, 0);

  // find elements
  const introBgTunnelShadow = document.querySelector('.intro__bg-shadow');
  const footer = document.querySelector('.footer');

  const tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top; // position of tunnel in the page
  const footerRectTop = footer.getBoundingClientRect().top; // position of introRow in the page
  const delay = window.innerWidth > 1441 ? 300 : window.innerWidth > 1025 ? 200 : 100; // delay before starting animation
  let footerHeight = footer.clientHeight;
  let windowScrollYMorePrevValue = 0; // for check if we scroll down
  let introBgTunnelShadowHeight = window.innerWidth;

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

        // decrease tunnel shadow height
        introBgTunnelShadow.style.height = `${
          introBgTunnelShadowHeight -
          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
        }px`;

        // if we scroll below footer, we hide shadow
        if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {
          introBgTunnelShadow.style.transform = `translateY(${
            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +
            introBgTunnelShadowHeight -
            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
          }px)`;

          introBgTunnelShadow.style.height = `0px`;
        }
      }
    }
  });
});
