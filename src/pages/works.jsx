import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'
import { mt50, hide } from "../styles/util"
import Card from "../components/card"
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const container = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '30px',
  rowGap: '30px',
},
  mt50
)

const WorksPage = () => {
  const data = useStaticQuery(graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
            id
            title
            tools
            link
            image {
              title
              fixed(width: 300, height: 200) {
                ...GatsbyContentfulFixed
              }
            }
            description {
              content {
                content {
                  value
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Works" />
      <h1 css={hide} className="an-subPage">Works</h1>
      <div css={container}>
        {data.allContentfulPost.edges.map(post => (
          <Card key={post.node.id} post={post.node} />
        ))}
      </div>
    </Layout>
  )
}

export default WorksPage
