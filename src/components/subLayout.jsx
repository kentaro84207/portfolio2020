import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import { sp, tablet, colors } from "../constants/constants"
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
  position: 'relative',
  [`${sp}`]: {
    backgroundColor: colors.baseColor,
  },
})

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '250px 2fr',
  minHeight: 'calc(100vh - 40px)',
  // opacity: 0,
  [`${tablet}`]: {
    gridTemplateColumns: '150px 2fr',
  },
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
  margin: '30px 50px',
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
