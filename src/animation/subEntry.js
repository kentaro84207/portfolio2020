import { gsap, Power3, Power4, Back } from 'gsap'
import { colors } from "../constants/constants"

const subEntry = () => {
  const bgTl = gsap.timeline();
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
  gsap.from(".an-bg", {
    backgroundColor: colors.primaryColor,
    ease: Power4.easeInOut,
  })
  gsap.from(".an-subPage", {
    y: 20,
    opacity: 0,
    duration: 1.4,
    ease: Back.easeOut.config(4),
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
