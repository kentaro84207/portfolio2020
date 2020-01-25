import React from "react"
import { mt50 } from "../styles/util"
import Card from "../components/card"
import Layout from "../components/subLayout"
import SEO from "../components/seo"

const WorksPage = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <h1 className="an-subPage">Works</h1>
      <div css={mt50}>
        <Card />
      </div>
    </Layout>
  )
}

export default WorksPage
