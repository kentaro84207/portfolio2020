import { gsap, Power3, Power4, Back } from 'gsap'

const subEntry = () => {
  const bgTl = gsap.timeline();
  gsap.to(".an-wrapper", {
    opacity: 1,
    duration: 0.2,
  })
  gsap.from(".an-logo", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: Power3.easeInOut,
  })
  gsap.from(".an-link", {
    y: -10,
    opacity: 0,
    duration: 0.9,
    ease: Power3.easeInOut,
    stagger: 0.1,
  })
  gsap.from(".an-naviBg", {
    width: "0",
    duration: 0.9,
    ease: Power4.easeInOut,
  })
  gsap.fromTo(".an-subPage", {
    delay: 0.4,
    y: -30,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: Back.easeOut.config(3),
    stagger: 0.1,
  })
  bgTl
    .to(".an-naviBg", {
      skewX: "2deg",
      duration: 0.4,
      ease: Power4.easeInOut,
    })
    .to(".an-naviBg", {
      skewX: "0",
      duration: 0.5,
      ease: Power4.easeInOut,
    })
}

export default subEntry
