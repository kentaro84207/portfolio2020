import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import Entry from '../animation/subEntry'
import Exit from '../animation/topExit'

const link = css({
  fontSize: '4rem',
  display: 'block',
  padding: '50px 0'
})

const TopLink = ({ linkText, linkTo }) => (

  <TransitionLink
    className="an-link"
    to={`${linkTo}`}
    css={link}
    exit={{
      trigger: () => Exit(),
      length: 1.4
    }}
    entry={{
      trigger: () => Entry(),
      delay: 1.4
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
