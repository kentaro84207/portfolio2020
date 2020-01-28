import { gsap, Back } from 'gsap'

const subExit = () => {
  gsap.to(".an-subPage", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: Back.easeIn.config(2),
    stagger: 0.1,
  })
}

export default subExit
