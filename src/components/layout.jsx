import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import { mobile } from "../constants/constants"
import "../styles/reset.css"
import "typeface-josefin-sans"

const container = css({
  margin: '0 auto',
  padding: '20px',
  [`${mobile}`]: {
    padding: '0',
  }
})

const main = css({
  overflow: 'hidden',
  position: 'relative'
})

const Layout = ({ children }) => {
  return (
    <>
      <div css={container}>
        <main css={main}>
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
