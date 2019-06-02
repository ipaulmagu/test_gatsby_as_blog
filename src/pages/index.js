import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  let sDate = new Date().toString()
  return (
    <Layout>
      <SEO title="Home" />
      <h1> Welcome </h1> <p> My Gatsby site. </p>{" "}
      <p> Now go build something great. </p>{" "}
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      <div>Date:{sDate}</div>
      <Link to="/page-2/"> Go to page 2 </Link>{" "}
    </Layout>
  )
}

export default IndexPage
