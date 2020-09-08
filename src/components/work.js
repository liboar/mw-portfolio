import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import WorkCard from "./WorkCard"
import { Container } from "reactstrap"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const Work = () => {
  const { language } = React.useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    {
      allCardsJson {
        edges {
          node {
            buttonLink
            buttonText
            cardText
            card_id
            language
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container id="work" className="section themed-container" fluid="lg">
      {data.allCardsJson.edges.map(({ node }) => {
        if (language === node.language) {
          return (
            <WorkCard
              key={node.card_id}
              excerpt={node.cardText}
              fluid={node.featuredImage.childImageSharp.fluid}
              cardId={node.card_id}
              buttonText={node.buttonText}
              buttonLink={node.buttonLink}
            />
          )
        }
      })}
    </Container>
  )
}

export default Work

/*  allMarkdownRemark(sort: { order: ASC, fields: frontmatter___card_id }) {
      edges {
        node {
          frontmatter {
            buttonText
            buttonLink
            card_id
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  } */
