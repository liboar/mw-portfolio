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
      <Card
        style={{
          margin: "3rem",
          backgroundColor: "#f5f0ed",
          textAlign: "center",
          textTransform: "capitalize",
          border: "0",
        }}
      >
        <Col style={{ padding: "0" }}>
          <Img
            width="100%"
            alt={description}
            fluid={fluid}
            style={{
              borderColor: "#3a3a3a",
              border: "1rem",
              borderStyle: "solid",
            }}
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle
              style={{ fontFamily: '"Prata", serif', fontSize: "1.4rem" }}
            >
              {description}
            </CardTitle>
            <CardSubtitle>
              {size}, {material}, {technique}{" "}
            </CardSubtitle>
            <CardText>{price} &#8381;</CardText>

            <ShopItemModal />
          </CardBody>
        </Col>
      </Card>
    </div>
  )
}

export default ShopItem
