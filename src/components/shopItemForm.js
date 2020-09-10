import React from "react"
import Img from "gatsby-image"

import {
  Button,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  ModalFooter,
  ModalBody,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

const ShopItemForm = props => {
  const { price, description, type, fluid, key, size, toggle } = props

  return (
    <>
      <AvForm
        name="shop"
        sssadasdasdasdasdasdasdasdsad
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="shop" />
        <ModalBody style={{ textAlign: "right" }}>
          <div className="shopFormSummary">
            <AvField
              name="phone"
              type="text"
              type="phone"
              name="phone"
              id="phone"
              label="Phone Number"
              required
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter valid phone number",
                },
                pattern: {
                  value: "^[0-9]*$",
                  errorMessage:
                    "Your number must be composed only with numbers",
                },
                minLength: {
                  value: 6,
                  errorMessage:
                    "Your number must be between 6 and 16 characters",
                },
                maxLength: {
                  value: 16,
                  errorMessage:
                    "Your number must be between 6 and 16 characters",
                },
              }}
            />
          </div>
        </ModalBody>
        <ModalBody>
          {" "}
          <Img
            fluid={fluid}
            alt="no img"
            style={{
              margin: "1rem",
            }}
          />
        </ModalBody>{" "}
        <ModalFooter>
          <Button color="primary">Bestellung senden</Button>
          <Button color="secondary" onClick={toggle}>
            Abbrechen
          </Button>
        </ModalFooter>
      </AvForm>
    </>
  )
}

export default ShopItemForm
