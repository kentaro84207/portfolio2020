import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { sp, tablet } from "../constants/constants"
// import In from '../animation/subIn'
// import Out from '../animation/subOut'

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

class PageLink extends React.Component {
  render() {
    const { linkText, linkTo } = this.props
    return (
      <TransitionLink
        className="an-link"
        to={`${linkTo}`}
        css={link}
        exit={{
          // trigger: () => Out(),
          length: 0
        }}
        entry={{
          // trigger: () => In(),
          delay: 0
        }}
      >
        {linkText}
      </TransitionLink>
    )
  }
}

PageLink.propTypes = {
  linkText: PropTypes.string,
}

PageLink.defaultProps = {
  linkText: ``,
}

export default PageLink
