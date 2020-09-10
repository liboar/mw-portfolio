import React from "react"
import Img from "gatsby-image"

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  ModalFooter,
  ModalBody,
} from "reactstrap"

const ShopItemForm = props => {
  const { price, description, type, fluid, key, size, toggle } = props

  return (
    <Form
      name="shop"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="shop" value="shop" />

      {/* <ModalBody style={{ textAlign: "right" }}> */}
      {/* <div className="shopFormSummary"> */}
      <FormGroup>
        <Input type="select" name="select" id="exampleSelect">
          <option>
            {description} {size} {type}
            shopping checkout form
          </option>
        </Input>
        <div>{price} &#8381;</div>
      </FormGroup>
      <FormGroup id="right" style={{ alignSelf: "right", paddingTop: "1rem" }}>
        <div>
          <Input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Ihre Mobilfunknummer"
          />
        </div>
      </FormGroup>
      {/* </div>
      </ModalBody> */}
      {/* <ModalBody>
        {" "}
        <Img
          fluid={fluid}
          alt="no img"
          style={{
            margin: "1rem",
          }}
        />
      </ModalBody> */}

      {/* <ModalFooter> */}
      <Button color="primary">Bestellung senden</Button>
      <Button color="secondary" onClick={toggle}>
        Abbrechen
      </Button>
      {/* </ModalFooter> */}
    </Form>
  )
}

export default ShopItemForm
