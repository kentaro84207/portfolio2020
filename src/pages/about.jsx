import React from "react"
import { mt20, mt50 } from "../styles/util"

import Layout from "../components/subLayout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About me</h1>
      <p css={mt20}>
        I am Kentaro Suzuki, a web developer who likes design and coding.
        <br />
        Currently producing web application using TypeScript and Ruby on Rails at tech company.
      </p>
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
      <h2 css={mt50}>Social Media</h2>
      <ul css={mt20}>
        <li>GitHub</li>
        <li>Wantedly</li>
        <li>Twitter</li>
      </ul>
    </Layout>
  )
}

export default AboutPage
