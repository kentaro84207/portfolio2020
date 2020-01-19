import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants";

import PageLink from "../components/pageLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const container = css({
  display: 'grid',
  gridTemplateColumns: '300px 2fr',
  minHeight: 'calc(100vh - 40px)',
  backgroundColor: colors.primaryColor,
})

const listBox = css({
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  position: 'relative',
})

const bg = css({
  width: 'calc(100% + 20px)',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '-20px',
  backgroundColor: colors.baseColor,
  skewX: "0",
})

const lists = css({
  paddingTop: '100px',
  paddingLeft: '50px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: '1'
})

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div css={container}>
      <div css={listBox}>
        <div css={lists}>
          <PageLink linkText="About" />
          <PageLink linkText="Works" />
          <PageLink linkText="Contact" />
        </div>
        <div className="an-bg" css={bg} />
      </div>
    </div>
  </Layout>
)

export default AboutPage
