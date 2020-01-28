import React from "react"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { colors } from "../constants/constants"
import PageLink from "./pageLink"
import topIn from '../animation/topIn'

const container = css({
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  position: 'relative',
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
  zIndex: '1'
})

const bg = css({
  width: 'calc(100% + 20px)',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '-20px',
  backgroundColor: colors.baseColor,
})

const Navi = () => (
  <div css={container}>
    <TransitionLink
      to="/"
      css={circle}
      className="an-logo"
      exit={{
        trigger: () => topIn(),
        length: 0.9
      }}
      entry={{
        delay: 0.9
      }}
    />
    <div css={list}>
      <PageLink linkText="About" linkTo="/about/" />
      <PageLink linkText="Works" linkTo="/works/" />
      <PageLink linkText="Contact" linkTo="/contact/" />
    </div>
    <div className="an-naviBg" css={bg} />
  </div>
)

export default Navi
