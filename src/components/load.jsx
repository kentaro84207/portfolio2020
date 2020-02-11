import React from "react"
import { css } from '@emotion/core'
import { gsap, Power3 } from 'gsap'
import { desktop, mobile, colors } from "../constants/constants"

const load = css({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,
  [`${desktop}`]: {
    width: 'calc(100vw - 40px)',
    height: 'calc(100vh - 40px)',
  },
  [`${mobile}`]: {
    width: '100vw',
    height: '100vh',
  },
})

const block = css({
  width: '100%',
  height: 'calc(100% / 3)',
  backgroundColor: colors.loadColor,
})

class Load extends React.Component {
  constructor(props) {
    super(props)
    this.tl = gsap.timeline()
    this.containerEl = null
    this.blockEls = []
  }

  componentDidMount() {
    const winW = window.innerWidth - 40
    const fixedWinW = winW > 991 ? winW : winW + 40
    this.tl.to(this.blockEls, {
      x: -fixedWinW,
      duration: 0.8,
      ease: Power3.easeIn,
      stagger: 0.1,
      delay: 0.2,
    })
    this.tl.to(this.containerEl, {
      display: 'none',
    })
  }

  render() {
    return (
      <div css={load} ref={el => { this.containerEl = el }}>
        <div css={block} ref={el => { this.blockEls[0] = el }} />
        <div css={block} ref={el => { this.blockEls[1] = el }} />
        <div css={block} ref={el => { this.blockEls[2] = el }} />
      </div>
    )
  }
}

export default Load
