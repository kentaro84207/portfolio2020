import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"
import Navi from "./navi"
import "../styles/reset.css"
import "typeface-josefin-sans"

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '250px 2fr',
  minHeight: 'calc(100vh - 40px)',
  backgroundColor: colors.primaryColor,
})

const container = css({
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
  position: 'relative',
})

const inner = css({
  width: '800px',
  margin: '30px auto 0 100px',
})

const subLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: `20px`,
        }}
      >
        <main
          style={{
            overflow: `hidden`,
          }}
        >
          <div className="an-bg" css={wrapper}>
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
