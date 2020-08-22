import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

const hero = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        bgHero: file(relativePath: { eq: "bg-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4160, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.bgHero.childImageSharp.fluid
      return (
        <BackgroundImage className={className} fluid={imageData}>
          <section className="section" id="hero">
            <div className="container titles mr-auto">
              <a href="/">
                <h1 className="title display-4">Marianna Ikhmalian</h1>
                <h3 className="subtitle">Analog Photography</h3>
              </a>
            </div>
          </section>
        </BackgroundImage>
      )
    }}
  ></StaticQuery>
)

export default hero
