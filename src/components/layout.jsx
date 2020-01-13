import React from "react"
import PropTypes from "prop-types"

import "../styles/reset.css"
import "typeface-josefin-sans"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: `20px`,
          maxWidth: `1480px`
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
