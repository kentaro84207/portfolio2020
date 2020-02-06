import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import { sp, colors } from "../constants/constants"
import Navi from "./navi"
import "../styles/reset.css"
import "typeface-josefin-sans"

const sub = css({
  margin: '0 auto',
  padding: '20px',
  [`${sp}`]: {
    padding: '0',
  },
})

const main = css({
  overflow: 'hidden',
  backgroundColor: colors.primaryColor,
  position: 'relative'
})

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '250px 2fr',
  minHeight: 'calc(100vh - 40px)',
  opacity: 0,
  [`${sp}`]: {
    display: 'block',
    minHeight: '100vh',
    position: 'relative',
  },
})

const container = css({
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
  position: 'relative',
})

const inner = css({
  width: '800px',
  margin: '30px auto 0 100px',
  [`${sp}`]: {
    width: '100%',
    margin: '0',
    padding: '30px 20px',
  },
})

const subLayout = ({ children }) => {
  return (
    <>
      <div
        css={sub}
      >
        <main css={main}>
          <div className="an-wrapper" css={wrapper}>
            <Navi />
            <div css={container}>
              <div css={inner}>
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

subLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default subLayout
