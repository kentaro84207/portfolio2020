import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
// import Entry from '../animation/subEntry'
// import Exit from '../animation/topExit'

const link = css({
  fontSize: '2.5rem',
  display: 'block',
  padding: '40px 0'
})

const PageLink = ({ linkText, linkTo }) => (

  <TransitionLink
    className="an-link"
    to={`${linkTo}`}
    css={link}
    exit={{
      trigger: () => console.log('hello'),
      length: 0
    }}
    entry={{
      trigger: () => console.log('hello'),
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
