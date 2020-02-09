import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'
import { sp } from "../constants/constants"
import { mt50 } from "../styles/util"
import Card from "../components/card"
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const container = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  columnGap: '30px',
  rowGap: '30px',
  [`${sp}`]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    columnGap: '0',
  },
},
  mt50,
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
              fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid
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
      <h1 className="an-subPage">Works</h1>
      <div css={container}>
        {data.allContentfulPost.edges.map(post => (
          <Card key={post.node.id} post={post.node} />
        ))}
      </div>
    </Layout>
  )
}

export default WorksPage
