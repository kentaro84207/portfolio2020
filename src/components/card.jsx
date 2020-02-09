import React from "react"
import { css } from '@emotion/core'
import Img from "gatsby-image"
import { sp, colors } from "../constants/constants"
import { mt10 } from "../styles/util"

const card = css({
  width: '300px',
  backgroundColor: colors.whiteColor,
  borderRadius: '6px',
  [`${sp}`]: {
    width: '100%',
  },
})

const cardFig = css({
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '6px 6px 0 0'
})

const image = css({
  width: '300px',
  [`${sp}`]: {
    width: '100%'
  },
})

const cardText = css({
  minHeight: '130px'
},
  mt10
)

const cardContents = css({
  padding: '20px 15px',
  minHeight: '130px'
})

const cardBtn = css({
  display: 'block',
  width: '80%',
  padding: '5px',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor: colors.secondaryColor,
  borderRadius: '3px'
},
  mt10
)

const Card = ({ post }) => (
  <article className="an-subPage" css={card}>
    <figure css={cardFig}>
      {post.image && (
        <Img fluid={post.image.fluid} css={image} />
      )}
    </figure>
    <div css={cardContents}>
      <h2>{post.title}</h2>
      <p css={cardText}>{post.description.content[0].content[0].value}</p>
      <p css={mt10}>{post.tools}</p>
      <a css={cardBtn} href={post.link}>visit site</a>
    </div>
  </article>
)

export default Card
