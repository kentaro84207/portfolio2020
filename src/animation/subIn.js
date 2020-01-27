import { gsap, Back } from 'gsap'

const subExit = () => {
  gsap.from(".an-subPage", {
    y: -30,
    opacity: 0,
    duration: 1.2,
    ease: Back.easeOut.config(3),
    stagger: 0.1,
  })
}

export default subExit
