import React from "react"
import { css } from '@emotion/core'
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 70px)',
})

const h1 = css({
  marginBottom: '30px',
})

const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div css={container}>
        <h1 css={h1}>Thank you for your inquiry !!</h1>
      </div>
    </Layout>
  )
}

export default ThanksPage
