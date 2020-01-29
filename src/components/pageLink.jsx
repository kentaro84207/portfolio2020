import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import In from '../animation/subIn'
import Out from '../animation/subOut'

const link = css({
  fontSize: '2.4rem',
  display: 'block',
  padding: '40px 0'
})

const PageLink = ({ linkText, linkTo }) => (

  <TransitionLink
    className="an-link"
    to={`${linkTo}`}
    css={link}
    exit={{
      trigger: () => Out(),
      length: 1.2
    }}
    entry={{
      trigger: () => In(),
      delay: 1.2
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
