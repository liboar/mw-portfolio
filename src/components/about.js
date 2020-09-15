import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
    <div id="about" className="aboutSection container-lg">
      <div
        className="flexContainer row"
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="image col-4 d-none d-sm-block">
          <Img alt="no img" fluid={aboutImage} />
        </div>
        <div className="cv col-lg-6 col-md-6 col-sm-12">
          <div className="d-none d-sm-block">
            <h1 className="aboutMainTitle ">
              <Trans>title</Trans>
            </h1>
          </div>
          <div className="aboutParagraphOne d-none d-sm-block">
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
        </div>
      </div>
    </div>
  )
}

export default About
