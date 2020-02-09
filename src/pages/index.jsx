import React from "react"
import { css } from '@emotion/core'
import { desktop, tablet, sp, colors } from "../constants/constants"
import Load from "../components/load"
import TopLink from "../components/topLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  minHeight: 'calc(100vh - 40px)',
  [`${sp}`]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '250px 1fr',
    minHeight: '100vh',
  }
})

const dot = css({
  color: colors.accentColor
})

const titleBox = css({
  position: 'relative',
  backgroundColor: colors.primaryColor,
  zIndex: '1',
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  [`${sp}`]: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
  },
})

const title = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  [`${desktop}`]: {
    position: 'absolute',
    top: '0',
    bottom: '270px',
    right: '-136px',
    margin: 'auto',
  },
  [`${tablet}`]: {
    position: 'absolute',
    top: '0',
    bottom: '400px',
    right: '-136px',
    margin: 'auto',
  },
  [`${sp}`]: {
    position: 'relative',
    padding: '50px 30px'
  },
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
  fontSize: '12rem',
  lineHeight: '0.8',
  [`${sp}`]: {
    fontSize: '10rem',
  }
})

const h2 = css({
  fontSize: '1rem',
  fontWeight: '400',
  marginLeft: '30px',
  [`${sp}`]: {
    marginLeft: '12px',
  },
})

const listBox = css({
  position: 'relative',
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
  backgroundColor: colors.baseColor,
  [`${sp}`]: {
    gridRow: '2 / 2',
    gridColumn: '1 / 2',
    backgroundColor: colors.primaryColor,
  }
})

const lists = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  [`${desktop}`]: {
    position: 'absolute',
    top: '80px',
    bottom: '0',
    left: '280px',
    margin: 'auto',
  },
  [`${tablet}`]: {
    position: 'absolute',
    top: '280px',
    bottom: '0',
    left: '100px',
    margin: 'auto',
  },
  [`${sp}`]: {
    backgroundColor: colors.primaryColor,
    paddingLeft: '43px'
  }
})



const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hi" />
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
