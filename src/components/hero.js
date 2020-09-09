import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

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
                <h1
                  className="title display-4"
                  data-sal="slide-down"
                  data-sal-duration="400"
                  data-sal-delay="400"
                  data-sal-easing="ease"
                >
                  <Trans>title</Trans>
                </h1>
                <h3
                  className="subtitle"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="600"
                  data-sal-easing="ease"
                >
                  <Trans>subtitle</Trans>
                </h3>
              </a>
            </div>
          </section>
        </BackgroundImage>
      )
    }}
  ></StaticQuery>
)

export default hero
