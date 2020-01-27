import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"
import loadIn from '../animation/loadIn'

const load = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 'calc(100vw - 40px)',
  height: 'calc(100vh - 40px)',
  zIndex: 2,
})

const block = css({
  width: '100%',
  height: 'calc(100% / 3)',
  backgroundColor: colors.loadColor,
})

const winW = window.innerWidth - 40

const Load = () => (
  <div className="an-load" css={load}>
    {loadIn(winW)}
    <div className="an-block" css={block} />
    <div className="an-block" css={block} />
    <div className="an-block" css={block} />
  </div>
)

export default Load
