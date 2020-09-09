import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container } from "reactstrap"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "work-artist.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const aboutImage = data.file.childImageSharp.fluid
  return (
    <Container id="about" className="section themed-container" fluid="lg">
      <div className="wrapper">
        <div
          className="element1 grid-box"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="200"
          data-sal-easing="ease"
        >
          <Img width="100%" alt="no img" fluid={aboutImage} />
        </div>
        <div
          className="element2 grid-box"
          id="grid-box"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h3>Wer ich bin:</h3>
          <p>
            Ich bin eine Analogfotografin aus Moskau. Ich habe mein Studium an
            der Marchi abgeschlossen. Ich beschäftige mich mit analoger
            Fotografie seit 2015.
          </p>
        </div>

        <div
          className="element3 grid-box"
          id="grid-box"
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="400"
          data-sal-easing="ease"
        >
          <h3>Was ich mache:</h3>
          <p>
            Um meine Fotos zu drucken nutze ich das Silbergelantineverfahren.
            Die meisten Fotos nehme ich in schwarz-weiß auf. Meine Hauptkamera
            ist die Pentax K1000. Portraits und Stillleben.
          </p>
        </div>
        <div
          className="element4 grid-box"
          id="grid-box"
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          <h3>Meine Inspiration:</h3>
          <p>Sally Mann, Tiefe Diana Arbus, Uneindeutigkeit des Themas</p>
        </div>
        <div
          className="element5 grid-box"
          id="grid-box"
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-delay="600"
          data-sal-easing="ease"
        >
          <h5 style={{ textAlign: "center" }}>
            Wenn euch meine Arbeit gefällt, schaut in meinem Shop vorbei.
          </h5>
        </div>
      </div>
    </Container>
  )
}

export default About
