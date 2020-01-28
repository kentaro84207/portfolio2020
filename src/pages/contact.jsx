import React from "react"
import { mt50 } from "../styles/util"
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className="an-subPage">Contact</h1>
      <form css={mt50} name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <p>
          <label htmlFor="name">
            Your Name:
            {' '}
            <input id="name" type="text" name="name" />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email:
            {' '}
            <input id="email" type="email" name="email" />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:
            {' '}
            <textarea id="message" name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      ,
    </Layout>
  )
}

export default ContactPage
