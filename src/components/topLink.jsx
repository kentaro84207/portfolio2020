import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { desktop, mobile } from "../constants/constants"

const link = css({
  display: 'block',
  [`${desktop}`]: {
    padding: '50px 0',
    fontSize: '4rem',
  },
  [`${mobile}`]: {
    padding: '40px 0',
    fontSize: '3.6rem',
  },
})

const TopLink = ({ linkText, linkTo }) => (

  <TransitionLink
    to={`${linkTo}`}
    css={link}
    exit={{
      length: 0
    }}
    entry={{
      delay: 0
    }}
  >
    {linkText}
  </TransitionLink>
)

TopLink.propTypes = {
  linkText: PropTypes.string,
}

TopLink.defaultProps = {
  linkText: ``,
}

export default TopLink
