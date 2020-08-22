import React from "react"
import { StaticQuery, graphql } from "gatsby"
import WorkCard from "./WorkCard"
import { Container } from "reactstrap"

const Work = () => (
  <StaticQuery
    query={indexQuery}
    render={data => {
      return (
        <Container id="work" className="section themed-container" fluid="lg">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <WorkCard
              key={node.frontmatter.card_id}
              excerpt={node.excerpt}
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              cardId={node.frontmatter.card_id}
              buttonText={node.frontmatter.buttonText}
              buttonLink={node.frontmatter.buttonLink}
            />
          ))}
        </Container>
      )
    }}
  ></StaticQuery>
)

const indexQuery = graphql`
  {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___card_id }) {
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
  }
`

export default Work
