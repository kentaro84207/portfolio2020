import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import Entry from '../animation/entry'
import Exit from '../animation/exit'

const link = css({
  fontSize: '3rem',
  display: 'block',
  padding: '40px 0'
})

const PageLink = ({ linkText, linkTo }) => (
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

PageLink.propTypes = {
  linkText: PropTypes.string,
}

PageLink.defaultProps = {
  linkText: ``,
}

export default PageLink
