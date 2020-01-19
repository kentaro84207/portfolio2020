import { gsap, Power3, Power4 } from 'gsap'

const Exit = () => {
  gsap.to(".an-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: Power4.easeInOut,
  })
  gsap.to(".an-link", {
    x: 1000,
    opacity: 0,
    duration: 1.4,
    ease: Power3.easeInOut,
  })
  gsap.to(".an-bg", {
    width: "100vw",
    height: "100vh",
    duration: 1.4,
    ease: Power4.easeInOut,
  })
  const bgTl = gsap.timeline();
  bgTl
    .to(".an-bg", {
      skewX: "5deg",
      duration: 0.6,
      delay: 0.2,
      ease: Power4.easeInOut,
    })
    .to(".an-bg", {
      skewX: "0",
      duration: 0.6,
      ease: Power4.easeInOut,
    })
}

export default Exit
