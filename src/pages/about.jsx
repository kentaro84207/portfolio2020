import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"
import { mt20, mt50 } from "../styles/util"

import Navi from "../components/navi"
import Layout from "../components/layout"
import SEO from "../components/seo"

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '250px 2fr',
  minHeight: 'calc(100vh - 40px)',
  backgroundColor: colors.primaryColor,
})

const container = css({
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
  position: 'relative',
})

const inner = css({
  width: '800px',
  margin: '50px auto 0 100px',
})

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="an-bg" css={wrapper}>
        <Navi />
        <div css={container}>
          <div css={inner}>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
