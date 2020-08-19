import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* COMPONENTS */
import Hero from "../components/hero"
import Work from "../components/work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `photography`, `ikhmalian`]} />
    <Hero />
    <Work />
  </Layout>
)

export const query = graphql`
  {
    bgHero: file(relativePath: { eq: "bg-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
