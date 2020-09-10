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
  const {
    price,
    description,
    type,
    fluid,
    key,
    size,
    toggle,
    material,
    technique,
  } = props

  return (
    <>
      <AvForm name="Shop Form" method="post">
        <input type="hidden" name="form-name" value="Shop Form" />
        <ModalBody>
          <Row>
            <Col md={8}>
              <Img
                fluid={fluid}
                alt="no img"
                style={{
                  margin: "1rem",
                }}
              />
            </Col>
            <Col md={4}>
              <div className="shopFormSummary">
                <h3>Your order:</h3>
                <div className="shopFormSummaryOrder">
                  <div className="bold">
                    1 x <label className="capitalize">{description}</label>
                  </div>
                  <div>{price} &#8381;</div>
                </div>
                <div className="shopFormSummaryInformation">
                  <p>
                    Please type in your credentials. I will get in contact with
                    you as soon as possible.
                  </p>
                  <AvField
                    type="text"
                    name="name"
                    label="Name"
                    required
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Please enter valid name",
                      },
                      pattern: {
                        value: "^[a-zA-ZЯа-я_]+( [a-zA-ZЯа-я_]+)*$",
                        errorMessage:
                          "Your number must be composed only with letters",
                      },
                      minLength: {
                        value: 4,
                        errorMessage:
                          "Your number must be longer than 3 charakters",
                      },
                      maxLength: {
                        value: 25,
                        errorMessage:
                          "Your number must be shorter than 25 characters",
                      },
                    }}
                  />
                  <AvField
                    type="text"
                    name="phone"
                    label="Phone number"
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
              </div>
            </Col>
          </Row>
        </ModalBody>{" "}
        <ModalFooter>
          <Button color="primary" type="submit">
            Bestellung senden
          </Button>
          <Button color="secondary" onClick={toggle}>
            Abbrechen
          </Button>
        </ModalFooter>
      </AvForm>
    </>
  )
}

export default ShopItemForm
