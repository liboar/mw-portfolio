import React from "react"
import { transitions, positions, Provider } from "react-alert"
import AlertMUITemplate from "react-alert-template-mui"

/* COMPONENTS */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Gallery from "../components/Gallery"
import Shop from "../components/Shop"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = ({ title }) => {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP,
    offset: "100px",
    transition: transitions.FADE,
    type: "success",
  }
  return (
    <Provider template={AlertMUITemplate} {...options}>
      <Layout>
        <SEO
          title=" "
          keywords={[
            `фотография`,
            `Ихмальян`,
            `Марианна`,
            `Москва`,
            `photography`,
            `Ikhmalian`,
            `Marianna`,
            `Moscow`,
          ]}
        />
        <Hero />
        <About />
        <Gallery />
        <Shop />
        <Contact />
        <Footer />
      </Layout>
    </Provider>
  )
}

export default IndexPage
