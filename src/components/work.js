import React from "react"
import { StaticQuery, graphql } from "gatsby"
import WorkCard from "./WorkCard"

const Work = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                card_id
                featuredImage {
                  childImageSharp {
                    fluid {
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
    `}
    render={data => {
      return (
        <section id="work" className="section container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <WorkCard
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage.childImageSharp.fluid}
              cardId={node.frontmatter.card_id}
            />
          ))}
        </section>
      )
    }}
  ></StaticQuery>
)

export default Work
