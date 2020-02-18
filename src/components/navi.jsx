import React, { useState } from "react"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { gsap } from 'gsap'
import { desktop, sp, tablet, colors } from "../constants/constants"
import PageLink from "./pageLink"
import Hamburger from "./hamburger"

const container = css({
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  position: 'relative',
  [`${sp}`]: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '2',
    width: '100%',
    height: '100vh',
    opacity: 0,
    display: 'none',
  },
})

const circle = css({
  display: 'inline-block',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: colors.accentColor,
  position: 'fixed',
  top: '40px',
  left: '40px',
  zIndex: '2'
})

const list = css({
  display: 'flex',
  flexDirection: 'column',
  zIndex: '1',
  [`${desktop}`]: {
    position: 'fixed',
    top: '120px',
    left: '70px',
  },
  [`${tablet}`]: {
    position: 'fixed',
    top: '120px',
    left: '40px',
  },
  [`${sp}`]: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25vh',
    marginLeft: '0',
  }
})

const bg = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: colors.baseColor,
  [`${sp}`]: {
    backgroundColor: colors.primaryColor,
  },
})

const Navi = () => {
  const [isActive, setIsActive] = useState(false)
  const tl = gsap.timeline()
  const nav = React.createRef()

  const openNavi = () => {
    tl.to(nav.current, {
      opacity: 1,
      duration: 0.3,
      display: 'block',
    })
  }

  const closeNavi = () => {
    tl.to(nav.current, {
      opacity: 0,
      duration: 0.3,
      display: 'none',
    })
  }

  const handleActive = () => {
    setIsActive(!isActive)
    return isActive ? closeNavi() : openNavi()
  }

  return (
    <>
      <Hamburger
        open={isActive ? 'opened' : 'closed'}
        handleOpen={() => { handleActive() }}
      />
      <div ref={nav} css={container}>
        <TransitionLink
          to="/"
          css={circle}
          exit={{
            length: 0
          }}
          entry={{
            delay: 0
          }}
        />
        <div css={list}>
          <PageLink linkText="About" linkTo="/about/" />
          <PageLink linkText="Works" linkTo="/works/" />
          <PageLink linkText="Contact" linkTo="/contact/" />
        </div>
        <div css={bg} />
      </div>
    </>
  )
}

export default Navi
