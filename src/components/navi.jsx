import React from "react"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { gsap } from 'gsap'
import { sp, colors } from "../constants/constants"
import PageLink from "./pageLink"
import Hamburger from "./hamburger"
// import topIn from '../animation/topIn'

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
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: '2'
})

const list = css({
  marginTop: '100px',
  marginLeft: '50px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: '1',
  [`${sp}`]: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25vh',
    marginLeft: '0',
  }
})

const bg = css({
  width: 'calc(100% + 20px)',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '-20px',
  backgroundColor: colors.baseColor,
  [`${sp}`]: {
    width: '100%',
    left: '0',
    backgroundColor: colors.primaryColor,
  },
})

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.tl = gsap.timeline()
    this.foo = React.createRef()
  }

  handleActive() {
    const { isActive } = this.state
    this.setState({ isActive: !isActive })
    return isActive ? this.closeNavi() : this.openNavi()
  }

  openNavi() {
    this.tl.to(this.foo.current, {
      opacity: 1,
      duration: 0.3,
      display: 'block',
    })
  }

  closeNavi() {
    this.tl.to(this.foo.current, {
      opacity: 0,
      duration: 0.3,
      display: 'none',
    })
  }

  render() {
    const { isActive } = this.state
    return (
      <>
        <Hamburger
          open={isActive ? 'opened' : 'closed'}
          handleOpen={() => { this.handleActive() }}
        />
        <div ref={this.foo} css={container}>
          <TransitionLink
            to="/"
            css={circle}
            className="an-logo"
            exit={{
              // trigger: () => topIn(window.innerWidth),
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
          <div className="an-naviBg" css={bg} />
        </div>
      </>
    )
  }
}

export default Navi
