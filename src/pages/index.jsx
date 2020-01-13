import React from "react"
// import { Link } from "gatsby"
// import TransitionLink from 'gatsby-plugin-transition-link'
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { css } from '@emotion/core'
import { colors } from "../constants/constants";

import List from "../components/list"
import Layout from "../components/layout"
import SEO from "../components/seo"

const container = css({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  minHeight: 'calc(100vh - 40px)',
})

const dot = css({
  color: colors.primaryColor
})

const titleBox = css({
  backgroundColor: colors.primaryColor,
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  position: 'relative'
})

const title = css({
  fontSize: '10rem',
  paddingTop: '30px',
  position: 'absolute',
  top: '0',
  right: '-115px',
})

const listBox = css({
  backgroundColor: colors.gray,
  gridRow: '1 / 2',
  gridColumn: '2 / 3'
})

const lists = css({
  paddingTop: '250px',
  paddingLeft: '200px',
  display: 'flex',
  flexDirection: 'column'
})

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div css={container}>
        <div css={titleBox}>
          <h1 css={title}>
            Hi
            <span css={dot}>.</span>
          </h1>
        </div>
        <div css={listBox}>
          <div css={lists}>
            <List listText="About" />
            <List listText="Works" />
            <List listText="Contact" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
