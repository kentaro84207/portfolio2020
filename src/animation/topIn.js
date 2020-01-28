import { gsap, Power3 } from 'gsap'
import { colors } from "../constants/constants"

const topIn = () => {
  gsap.to(".an-logo", {
    scale: 100,
    duration: 0.8,
    ease: Power3.easeIn,
    backgroundColor: colors.loadColor,
  })
}

export default topIn
