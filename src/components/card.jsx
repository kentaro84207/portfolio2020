import React from "react"
import { css } from '@emotion/core'
import Img from "gatsby-image"
import { sp, colors } from "../constants/constants"
import { mt10, mt20 } from "../styles/util"

const card = css({
  width: '100%',
  backgroundColor: colors.whiteColor,
  borderRadius: '6px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
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

const text = css({
  minHeight: '100px',
},
  mt10
)

const tools = css({
  fontWeight: 700,
},
  mt20
)

const cardBtn = css({
  display: 'block',
  width: '80%',
  padding: '10px',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor: colors.secondaryColor,
  borderRadius: '3px'
},
  mt20
)

const Card = ({ post }) => (
  <article css={card}>
    {post.image && (
      <Img fluid={post.image.fluid} css={image} />
    )}
    <div css={cardContents}>
      <h2>{post.title}</h2>
      <p css={text}>{post.description.content[0].content[0].value}</p>
      <p css={tools}>{post.tools}</p>
      <a css={cardBtn} href={post.link}>visit site</a>
    </div>
  </article>
)

export default Card
