import React from "react"
import { graphql } from "gatsby"

/* COMPONENTS */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Work from "../components/work"
import Gallery from "../components/Gallery"
import Shop from "../components/Shop"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `photography`, `ikhmalian`]} />
      <Hero />
      <Work />
      <Gallery />
      <Shop />
    </Layout>
  )
}

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
