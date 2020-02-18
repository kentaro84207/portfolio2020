import React, { useEffect } from "react"
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

const Load = () => {
  const tl = gsap.timeline()
  let containerEl = null
  const blockEls = []

  useEffect(() => {
    const winW = window.innerWidth - 40
    const fixedWinW = winW > 991 ? winW : winW + 40
    tl.to(blockEls, {
      x: -fixedWinW,
      duration: 0.8,
      ease: Power3.easeIn,
      stagger: 0.1,
      delay: 0.2,
    })
    tl.to(containerEl, {
      display: 'none',
    })
  }, [])

  return (
    <div css={load} ref={el => { containerEl = el }}>
      <div css={block} ref={el => { blockEls[0] = el }} />
      <div css={block} ref={el => { blockEls[1] = el }} />
      <div css={block} ref={el => { blockEls[2] = el }} />
    </div>
  )
}

export default Load
