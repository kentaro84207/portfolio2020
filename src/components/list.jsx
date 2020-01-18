import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import { gsap } from 'gsap'

const link = css({
  fontSize: '3rem',
  display: 'block',
  padding: '40px 0'
})

const foo = (exit, node) => {
  console.log(exit);
  console.log(node);
  gsap.to(".hoge", { rotation: 27, x: 100, duration: 0.4 });
}

const List = ({ listText }) => (
  <TransitionLink
    to="/about/"
    css={link}
    exit={{
      trigger: ({ exit, node }) => foo(exit, node),
      length: 0.2
    }}
    entry={{
      delay: 0.6
    }}
  >
    {listText}
  </TransitionLink>
)

List.propTypes = {
  listText: PropTypes.string,
}

List.defaultProps = {
  listText: ``,
}

export default List
