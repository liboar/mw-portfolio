import React, { useState } from "react"
import Img from "gatsby-image"
import axios from "axios"

import { Button, Row, Col, ModalFooter, ModalBody } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useAlert } from "react-alert"

const ShopItemForm = props => {
  const { price, description, fluid, toggle, type } = props

  const [personalData, setPersonalData] = useState({})

  const alert = useAlert()

  return (
    <>
      <AvForm
        // name="Shop Form"
        // method="post"
        // data-netlify="true"
        // data-netlify-honeypot="bot-field"
        onValidSubmit={e => {
          e.preventDefault()

          axios
            .post("/.netlify/functions/notifyTelegram", {
              item: { description },
              type: { type },
              ...personalData,
            })

            .then(res => {
              setPersonalData()
              props.toggle()
            })
            .then(() => {
              alert.show(
                "Thank your for your order! I will soon contact you.",
                {
                  title: "Order successful",
                }
              )
            })
            .catch(err => console.log(err))
        }}
      >
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
                    1 x <span className="capitalize">{description}:</span>
                  </div>
                  <div id="right">{price} &#8381;</div>
                  <div className="bold">
                    <span>Пересылка в России:</span>
                  </div>
                  <div id="right">0 &#8381;</div>
                </div>
                <div className="shopFormSummaryInformation">
                  <p>
                    Please type in your credentials. I will get in contact with
                    you as soon as possible.
                  </p>

                  <AvField
                    type="text"
                    label="Name"
                    name="name"
                    onChange={e =>
                      setPersonalData({ ...personalData, name: e.target.value })
                    }
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
                    onChange={e =>
                      setPersonalData({
                        ...personalData,
                        phone: e.target.value,
                      })
                    }
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
                  <AvField
                    type="text"
                    name="shopItem"
                    value={description}
                    onChange={e =>
                      setPersonalData({
                        ...personalData,
                        item: e.target.value,
                      })
                    }
                    hidden
                  />
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <div>{toggle.successMsg}</div>
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
