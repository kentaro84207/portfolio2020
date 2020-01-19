import { gsap, Power3, Power4 } from 'gsap'

const Entry = () => {
  gsap.from(".an-link", {
    y: -20,
    opacity: 0,
    duration: 0.9,
    ease: Power3.easeInOut,
    stagger: 0.2,
    delay: 0.2
  })

  gsap.from(".an-bg", {
    width: "0",
    duration: 0.9,
    ease: Power4.easeInOut,
  })
  const bgTl = gsap.timeline();
  bgTl
    .to(".an-bg", {
      skewX: "2deg",
      duration: 0.4,
      ease: Power4.easeInOut,
    })
    .to(".an-bg", {
      skewX: "0",
      duration: 0.5,
      ease: Power4.easeInOut,
    })
}

export default Entry
