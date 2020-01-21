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

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div css={container}>
        <Navi />
      </div>
    </Layout>
  )
}

export default AboutPage
