import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"

import Navi from "../components/navi"
import Layout from "../components/layout"
import SEO from "../components/seo"

const container = css({
  display: 'grid',
  gridTemplateColumns: '300px 2fr',
  minHeight: 'calc(100vh - 40px)',
  backgroundColor: colors.primaryColor,
})

const main = css({
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
  position: 'relative',
})

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="an-bg" css={container}>
        <Navi />
        <div css={main}>
          hello
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
