import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Button } from "reactstrap"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

const About = () => {
  const { t } = useTranslation()
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
      <div className="flexContainer">
        <div className="image flexItem">
          <Img alt="no img" fluid={aboutImage} />
        </div>
        <div className="cv flexItem">
          <div>
            <h1 className="aboutMainTitle">
              <Trans>title</Trans>
            </h1>
          </div>
          <div>
            <p>
              <Trans>aboutParagraphOne</Trans>
            </p>
          </div>
          <div>
            <h4>
              {" "}
              <Trans>titleOne</Trans>
            </h4>
          </div>
          <div>
            <p>
              <Trans>aboutParagraphTwo</Trans>
            </p>
          </div>
          <div>
            <h4>
              {" "}
              <Trans>titleTwo</Trans>
            </h4>
          </div>
          <div>
            <p>
              <Trans>aboutParagraphThree</Trans>
            </p>
          </div>
          <div>
            <h4>
              {" "}
              <Trans>titleThree</Trans>
            </h4>
          </div>
          <div>
            <p>
              <Trans>aboutParagraphFour</Trans>
            </p>
          </div>
          <div> </div>
        </div>
      </div>
    </Container>
  )
}

export default About
