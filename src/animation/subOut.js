import { gsap, Back } from 'gsap'

const subExit = () => {
  gsap.to(".an-subPage", {
    y: -30,
    opacity: 0,
    duration: 1.2,
    ease: Back.easeIn.config(4),
    stagger: 0.1,
  })
}

export default subExit