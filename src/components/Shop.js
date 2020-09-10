import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ShopItem from "./ShopItem"
import Carousel from "react-multi-carousel"
import "../../node_modules/react-multi-carousel/lib/styles.css"
import { I18nextContext } from "gatsby-plugin-react-i18next"

const Shop = () => {
  const { language } = React.useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    {
      allStrapiProduct {
        edges {
          node {
            strapiId
            description
            price
            language
            material
            type
            technique
            size
            image {
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
  `)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="section" id="shop">
      <div
        className="shop"
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        <form
          name="shop"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Ihre
              Mobilfunknummer"
          />
        </form>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          infinite={false}
          focusOnSelect={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          transitionDuration={500}
          containerClass="carousel-container"
          draggable
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          {data.allStrapiProduct.edges.flatMap(({ node }) =>
            language !== node.language ? (
              []
            ) : (
              <ShopItem
                key={node.strapiId}
                description={node.description}
                price={node.price}
                material={node.material}
                type={node.type}
                technique={node.technique}
                size={node.size}
                fluid={node.image.childImageSharp.fluid}
              />
            )
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Shop
