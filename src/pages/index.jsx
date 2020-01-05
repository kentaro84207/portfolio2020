import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allContentfulWork {
      allContentfulWork {
        nodes {
          id
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {data.allContentfulWork.nodes.map(({ id, title }) => (
        <h3 key={id}>
          {title}
        </h3>
      ))}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link style={{ fontSize: `50px` }} to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
