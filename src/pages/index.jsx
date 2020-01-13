import React from "react"
// import { Link } from "gatsby"
// import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { css } from '@emotion/core'
import { colors } from "../constants/constants";

import Layout from "../components/layout"
import SEO from "../components/seo"

const dot = css({
  color: colors.primaryColor
})

const title = css({
  color: '#222222',
  fontSize: '10rem'
})

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 css={title}>
        Hi
        <span css={dot}>.</span>
      </h1>
      {/* <Link style={{ fontSize: `20px` }} to="/page-2/">Go to page 2</Link> */}
      <AniLink paintDrip to="page-2" color="rebeccapurple">
        Go to Page 2
      </AniLink>
    </Layout>
  )
}

export default IndexPage
