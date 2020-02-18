import React from "react"
import { css } from '@emotion/core'
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 100px)',
})

const h1 = css({
  marginBottom: '30px',
})

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div css={container}>
      <h1 css={h1}>NOT FOUND</h1>
    </div>
  </Layout>
)

export default NotFoundPage
