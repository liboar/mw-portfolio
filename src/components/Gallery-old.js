// import React from "react"
// import styled from "styled-components"
// import { StaticQuery, graphql } from "gatsby"

// import ImageGallery from "react-image-gallery"

// import { createGlobalStyle } from "styled-components"

// const Gallery = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       {
//         images: allStrapiGalleryImages(filter: { year: { eq: 2015 } }) {
//           nodes {
//             image {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             year
//             strapiId
//           }
//         }
//       }
//     `}
//     render={data => {
//       var images = []
//       data.images.nodes.forEach(node => {
//         images.push({
//           original: node.image.childImageSharp.fluid.src,
//           thumbnail: node.image.childImageSharp.fluid.src,
//         })
//       })
//       console.log(images)

//       return (
//         <section id="gallery" className={className}>
//           {/*  */}
//           <div className="gallery">
//             <ImageGallery
//               showThumbnails="false"
//               items={images}
//               className="gallery"
//             />
//           </div>
//           {/*  */}
//         </section>
//       )
//     }}
//   ></StaticQuery>
// )

// const GlobalStyle = createGlobalStyle`

// .gallery {
//   max-height: 50vh;
// }
// .image-gallery-image {
//   max-height: 50vh;

// }
// `

// const StyledGallery = styled(Gallery)`
//   max-height: 90vh;
//   padding: 4rem;
//   background-color: #1b1b1b;
//   margin: 0 auto;
// `

// // <section id="gallery" className={className}>
// //   <div>
// //     {data.images.nodes.map((node, index) => {
// //       return (
// //         <div key={node.strapiId} index={index} className="img">
// //           <GlobalStyle />
// //           <div id="year">{node.year}</div>

// //           <Img fluid={node.image.childImageSharp.fluid} />
// //         </div>
// //       )
// //     })}
// //   </div>
// // </section>
