import React from "react"
import { css } from '@emotion/core'
import { sp, colors } from "../constants/constants"
import { mt20, mt50 } from "../styles/util"
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const hidden = css({
  display: 'none'
})

const textBox = css({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  [`${sp}`]: {
    width: '100%',
  },
},
  mt20
)

const textAreaBox = css(
  textBox,
  {
    width: '100%',
    maxWidth: '800px',
  }
)

const input = css({
  padding: '15px 20px 10px',
  backgroundColor: colors.whiteColor
})

const textArea = css(
  input,
  {
    height: '230px',
  }
)

const btn = css({
  display: 'block',
  width: '150px',
  padding: '10px 0 5px',
  textAlign: 'center',
  backgroundColor: colors.secondaryColor,
  borderRadius: '3px',
  cursor: 'pointer',
  [`${sp}`]: {
    width: '100%',
  },
})

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className="an-subPage">Contact</h1>
      <form
        css={mt50}
        name="Contact Form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thanks"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <p css={textBox} className="an-subPage">
          <label htmlFor="name">
            Your Name :
            {' '}
          </label>
          <input css={input} id="name" type="text" name="name" required />
        </p>
        <p css={textBox} className="an-subPage">
          <label htmlFor="email">
            Your Email :
            {' '}
          </label>
          <input css={input} id="email" type="email" name="email" required />
        </p>
        <p css={textAreaBox} className="an-subPage">
          <label htmlFor="message">
            Message :
            {' '}
          </label>
          <textarea css={textArea} id="message" name="message" required />
        </p>
        <p css={hidden}>
          <label htmlFor="honeypot">
            Don’t fill this out if you’re human:
            <input id="honeypot" name="bot-field" />
          </label>
        </p>
        <p css={mt50} className="an-subPage">
          <button css={btn} type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
