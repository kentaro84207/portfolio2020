import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"
import PageLink from "./pageLink"

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
  backgroundColor: colors.secondaryColor,
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: '1'
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
  skewX: "0",
})

const Navi = () => (
  <div css={container}>
    <Link
      to="/"
      css={circle}
    />
    <div css={list}>
      <PageLink linkText="About" linkTo="/about/" />
      <PageLink linkText="Works" linkTo="/works/" />
      <PageLink linkText="Contact" linkTo="/contact/" />
    </div>
    <div className="an-bg" css={bg} />
  </div>
)

export default Navi
