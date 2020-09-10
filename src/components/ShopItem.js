import React from "react"
import Img from "gatsby-image"
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Col,
} from "reactstrap"
import ShopItemModal from "./shopItemModal"

const ShopItem = ({
  key,
  description,
  price,
  material,
  type,
  technique,
  size,
  fluid,
}) => {
  return (
    <div key={key}>
      <Card className="shopCard">
        <Col style={{ padding: "0" }}>
          <Img
            width="100%"
            alt={description}
            fluid={fluid}
            className="shopImage"
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle
              style={{ fontFamily: '"Prata", serif', fontSize: "1.4rem" }}
            >
              {description} {size}
            </CardTitle>
            <CardSubtitle>{material}</CardSubtitle>
            <CardText>
              <div>{technique}</div>
              {price} &#8381;
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
              key={key}
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
