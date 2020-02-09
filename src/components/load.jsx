import React from "react"
import { css } from '@emotion/core'
import { desktop, mobile, colors } from "../constants/constants"
// import loadIn from '../animation/loadIn'

const load = css({
  display: 'none',
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
  // componentDidMount() {
  //   const winW = window.innerWidth - 40
  //   loadIn(winW)
  // }

  render() {
    return (
      <div className="an-load" css={load}>
        <div className="an-block" css={block} />
        <div className="an-block" css={block} />
        <div className="an-block" css={block} />
      </div>
    )
  }
}

export default Load
