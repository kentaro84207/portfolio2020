import { gsap, Back } from 'gsap'

const subExit = () => {
  gsap.to(".an-subPage", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: Back.easeIn.config(3),
    stagger: 0.1,
  })
}

export default subExit
