import React from "react"
import ImageGallery from "react-image-gallery"
import { StaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"

const Gallery = () => {
  return (
    <StaticQuery
      query={indexQuery}
      render={data => {
        var images = []
        data.allStrapiPhoto.edges.forEach(({ node }) => {
          images.push({
            original: node.imageFile.childImageSharp.fluid.src,
            thumbnail: node.imageFile.childImageSharp.fluid.src,
          })
        })

        return (
          <section id="gallery" className="section">
            <Container className="imageGallery">
              <ImageGallery
                items={images}
                thumbnailPosition="bottom"
                showPlayButton={false}
                lazyLoad={true}
                showFullscreenButton={false}
                showBullets={false}
              />
            </Container>
          </section>
        )
      }}
    ></StaticQuery>
  )
}

const indexQuery = graphql`
  {
    allStrapiPhoto {
      edges {
        node {
          name
          year
          strapiId
          imageFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Gallery
