import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from '@emotion/core'

const link = css({
  fontSize: '3rem',
  display: 'block',
  padding: '40px 0'
})

const List = ({ listText }) => (
  <Link to="/about/" css={link}>{listText}</Link>
)

List.propTypes = {
  listText: PropTypes.string,
}

List.defaultProps = {
  listText: ``,
}

export default List
