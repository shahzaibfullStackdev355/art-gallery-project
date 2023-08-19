const tl = gsap.timeline();

tl.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h1", {
    duration: 1.5,
    delay: 1,
    // y: 70,
    // y:185,
    y:350,
    skewY: 0,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h1", {
    duration: 1.5,
    // y: 70,
    // y:185,
    y: 350,
    skewY: -20,
    stagger: 0.1,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
    //   overflow: "auto"
      overflow: "hidden"
    },
    "-=2"
  )
  .to(".preloader", {
    display: "none"
  });
