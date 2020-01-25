import React from "react"
import { css } from '@emotion/core'
import { colors } from "../constants/constants"
import { mt10 } from "../styles/util"
import dummy from "../images/gatsby-astronaut.png"

const card = css({
  width: '300px',
  backgroundColor: colors.whiteColor,
  borderRadius: '6px'
})

const cardFig = css({
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '6px'
})

const cardImg = css({
  width: '100%'
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

const Card = () => (
  <article className="an-subPage" css={card}>
    <figure css={cardFig}>
      <img css={cardImg} src={dummy} alt="dummy" />
    </figure>
    <div css={cardContents}>
      <h2>title</h2>
      <p css={cardText}>description</p>
      <p css={mt10}>tools</p>
      <a css={cardBtn} href="./">visit site</a>
    </div>
  </article>
)

export default Card
