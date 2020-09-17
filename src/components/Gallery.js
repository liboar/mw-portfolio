import React from "react"
import ImageGallery from "react-image-gallery"
import { StaticQuery, graphql } from "gatsby"

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
          <section id="gallery" className="gallerySection">
            <div
              className="imageGallery container"
              style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ImageGallery
                items={images}
                thumbnailPosition="bottom"
                showPlayButton={false}
                lazyLoad={true}
                showFullscreenButton={false}
                showBullets={false}
              />
            </div>
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
