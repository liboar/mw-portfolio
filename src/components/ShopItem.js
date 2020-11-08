import React from "react"
import Img from "gatsby-image"
import { Card, CardText, CardTitle, CardBody, Col } from "reactstrap"
import ShopItemModal from "./shopItemModal"

const ShopItem = props => {
  const {
    propKey,
    description,
    price,
    material,
    type,
    technique,
    size,
    fluid,
  } = props

  return (
    <div key={propKey}>
      <Card className="shopCard">
        <Col style={{ padding: "0" }}>
          <Img alt={description} fluid={fluid} className="shopImage" />
        </Col>
        <Col>
          <CardBody>
            <CardTitle
              style={{ fontFamily: '"Prata", serif', fontSize: "1.4rem" }}
            >
              {description} {size}
              <hr />
            </CardTitle>

            <CardText>{material}</CardText>
            {/* <CardText>
              <label>{technique}</label>
            </CardText> */}
            <CardText>
              {" "}
              <label> {price} &#8381;</label>
            </CardText>
            <form
              name="Shop Form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="hidden" name="form-name" value="Shop Form" />
              <input type="text" name="phone" />
              <input type="text" name="name" />
              <input type="text" name="shopItem" />
            </form>
            <ShopItemModal
              fluid={fluid}
              description={description}
              price={price}
              key={propKey}
              propKey={propKey}
              type={type}
              size={size}
              material={material}
              technique={technique}
            />
          </CardBody>
        </Col>
      </Card>
    </div>
  )
}

export default ShopItem
