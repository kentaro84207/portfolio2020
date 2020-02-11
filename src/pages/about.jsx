import React from "react"
import { css } from '@emotion/core'
import { mt20, mt50 } from "../styles/util"
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const list = css({
  display: 'flex',
  justifyContent: 'flexStart',
},
  mt20
)

const sns = css({
  width: '50px',
  marginRight: '15px',
})

const icon = css({
  width: '100%'
})

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About me</h1>
      <p css={mt20}>
        こんにちは。デザインもコーディングも好きなWebエンジニアです。
        <br />
        I am Kentaro Suzuki, a web developer who likes design and coding.
      </p>
      <section>
        <h2 css={mt50}>Skill set</h2>
        <ul css={mt20}>
          <li>HTML / CSS / SCSS / GSAP</li>
          <li>JavaScript/ TypeScript / React / Gatsby / Vue / Nuxt</li>
          <li>Ruby / Ruby on Rails</li>
          <li>WordPress / Contentful</li>
          <li>AWS / GCP / Netlify / Firebase</li>
          <li>Git / GitHub / CircleCI</li>
          <li>etc...</li>
        </ul>
      </section>
      <section>
        <h2 css={mt50}>Social Media</h2>
        <ul css={list}>
          <li css={sns}>
            <a href="https://github.com/kentaro84207" target="_blank" rel="noopener noreferrer"><img css={icon} src="/github.png" alt="GitHub" /></a>
          </li>
          <li css={sns}>
            <a href="https://twitter.com/kentaro_s90" target="_blank" rel="noopener noreferrer"><img css={icon} src="/twitter.png" alt="twitter" /></a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default AboutPage
