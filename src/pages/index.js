import React from "react"

/* COMPONENTS */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Work from "../components/work"
import Gallery from "../components/Gallery"
import Shop from "../components/Shop"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `photography`, `ikhmalian`]} />
      <Hero />
      <Work />
      <Gallery />
      <Shop />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
