import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"

import Navi from "../components/navi"
import Layout from "../components/layout"
import SEO from "../components/seo"

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '300px 2fr',
  minHeight: 'calc(100vh - 40px)',
  backgroundColor: colors.primaryColor,
})

const WorksPage = () => (
  <Layout>
    <SEO title="About" />
    <div css={wrapper}>
      <Navi />
    </div>
  </Layout>
)

export default WorksPage
