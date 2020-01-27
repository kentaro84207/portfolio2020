import { gsap, Power3 } from 'gsap'

const loadIn = () => {
  const tl = gsap.timeline()
  const winW = window.innerWidth - 40
  tl.to(".an-block", {
    x: -winW,
    duration: 0.9,
    ease: Power3.easeIn,
    stagger: 0.1,
    delay: 0.2,
  })
  tl.to(".an-load", {
    display: 'none',
  })
}

export default loadIn
