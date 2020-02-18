import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { sp, tablet } from "../constants/constants"

const link = css({
  display: 'block',
  padding: '40px 0',
  fontSize: '2.4rem',
  [`${tablet}`]: {
    fontSize: '1.8rem',
  },
  [`${sp}`]: {
    width: '200px',
    fontSize: '3.4rem',
  },
})

const PageLink = ({ linkText, linkTo }) => (
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

PageLink.propTypes = {
  linkText: PropTypes.string,
}

PageLink.defaultProps = {
  linkText: ``,
}

export default PageLink
