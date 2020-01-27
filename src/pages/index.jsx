import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"
import Load from "../components/load"
import TopLink from "../components/topLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  minHeight: 'calc(100vh - 40px)',
})

const dot = css({
  color: colors.accentColor
})

const titleBox = css({
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  position: 'relative',
  backgroundColor: colors.primaryColor,
})

const title = css({
  paddingTop: '50px',
  position: 'absolute',
  top: '0',
  right: '-145px',
})

const bg = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: colors.primaryColor,
})

const h1 = css({
  fontSize: '10rem',
})

const h2 = css({
  fontSize: '1rem',
  fontWeight: '400',
  marginLeft: '30px'
})

const listBox = css({
  backgroundColor: colors.baseColor,
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
})

const lists = css({
  paddingTop: '250px',
  paddingLeft: '200px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: '1'
})



const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Load />
      <div css={wrapper}>
        <div css={titleBox}>
          <div className="an-bg" css={bg} />
          <div className="an-title" css={title}>
            <h1 css={h1}>
              Hi
              <span css={dot}>.</span>
            </h1>
            <h2 css={h2}>I&apos;m Kentaro - Web developer</h2>
          </div>
        </div>
        <div css={listBox}>
          <div css={lists}>
            <TopLink linkText="About" linkTo="/about/" />
            <TopLink linkText="Works" linkTo="/works/" />
            <TopLink linkText="Contact" linkTo="/contact/" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
