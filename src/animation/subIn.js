import { gsap, Back } from 'gsap'

const subExit = () => {
  gsap.to(".an-wrapper", {
    opacity: 1,
    duration: 0,
  })
  gsap.fromTo(".an-subPage", {
    y: -20,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: Back.easeOut.config(2),
    stagger: 0.1,
  })
}

export default subExit
