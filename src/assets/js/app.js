const tunnelShadowWrapper = document.querySelector('.tunnel-shadow-wrapper');
const introBgTunnelShadow = document.querySelector('.intro__bg-tunnel-shadow');
const tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top;
const delay = 300;
let height = 1762.5;

window.addEventListener('scroll', () => {
  //   console.log('tunnelShadowRectTop: ' + tunnelShadowRectTop);
  //   console.log('window.scrollY: ' + Number(window.scrollY) - Number(window.innerHeight));

  if (-(tunnelShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {
    tunnelShadowWrapper.style.transform = `translateY(${
      (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
    }px)`;
    introBgTunnelShadow.style.transform = `translateY(-${
      (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
    }px)`;
    tunnelShadowWrapper.style.height = `${
      height - (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1
    }px`;
    //  console.log((tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1);
  }
});
