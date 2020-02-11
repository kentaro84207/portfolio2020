import React from "react"
import { css } from '@emotion/core'
import Img from "gatsby-image"
import { sp, colors } from "../constants/constants"
import { mt10 } from "../styles/util"

const card = css({
  width: '100%',
  backgroundColor: colors.whiteColor,
  borderRadius: '6px',
  [`${sp}`]: {
    width: '100%',
  },
})

const image = css({
  width: '100%',
  borderRadius: '6px 6px 0 0',
})

const cardContents = css({
  padding: '20px 15px',
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
  <article css={card}>
    {post.image && (
      <Img fluid={post.image.fluid} css={image} />
    )}
    <div css={cardContents}>
      <h2>{post.title}</h2>
      <p css={mt10}>{post.description.content[0].content[0].value}</p>
      <p css={mt10}>{post.tools}</p>
      <a css={cardBtn} href={post.link}>visit site</a>
    </div>
  </article>
)

export default Card
