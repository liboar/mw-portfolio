import React, { useState } from "react"
import Img from "gatsby-image"
import axios from "axios"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import { Button, Row, Col, ModalFooter, ModalBody } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useAlert } from "react-alert"

const ShopItemForm = props => {
  const { price, description, fluid, toggle, type } = props

  const [personalData, setPersonalData] = useState({})

  const alert = useAlert()

  const { t } = useTranslation()
  const errorValidName = t("errorValidName")
  const errorOnlyLetters = t("errorOnlyLetters")
  const errorMoreThan = t("errorMoreThan")
  const errorLessThan = t("errorLessThan")
  const errorValidNumber = t("errorValidNumber")
  const errorOnlyNumerals = t("errorOnlyNumerals")

  const orderThankYou = t("orderThankYou")
  const orderSuccessful = t("orderSuccessful")
  const alertOk = t("alertOk")

  return (
    <>
      <AvForm
        // name="Shop Form"
        // method="post"
        // data-netlify="true"
        // data-netlify-honeypot="bot-field"
        onValidSubmit={e => {
          e.preventDefault()
          setPersonalData({ loading: true })

          axios
            .post("/.netlify/functions/notifyTelegram", {
              item: { description },
              type: { type },
              ...personalData,
            })

            .then(res => {
              props.toggle()
            })
            .then(() => {
              setPersonalData({
                loading: false,
              })
            })
            .then(() => {
              alert.show(orderThankYou, {
                title: orderSuccessful,
                closeCopy: alertOk,
              })
            })

            .catch(err => {
              setPersonalData({
                loading: false,
              })
              alert.show(`${err}. \nPlease try again later.`, {
                title: `SERVER ERROR`,
                closeCopy: alertOk,
              })
            })
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
                <h3>
                  <Trans>yourOrder</Trans>
                </h3>
                <div className="shopFormSummaryOrder">
                  <div className="bold">
                    1 x <span className="capitalize">{description}:</span>
                  </div>
                  <div id="right">{price} &#8381;</div>
                </div>
                <p className="bold">
                  <Trans>destinationCosts</Trans>
                </p>
                <hr />

                <div className="shopFormSummaryInformation">
                  <AvField
                    type="text"
                    label={t("yourName")}
                    name="name"
                    onChange={e =>
                      setPersonalData({ ...personalData, name: e.target.value })
                    }
                    required
                    validate={{
                      required: {
                        value: true,
                        errorMessage: errorValidName,
                      },
                      pattern: {
                        value: "^[a-zA-ZЯа-я_]+( [a-zA-ZЯа-я_]+)*$",
                        errorMessage: errorOnlyLetters,
                      },
                      minLength: {
                        value: 4,
                        errorMessage: errorMoreThan,
                      },
                      maxLength: {
                        value: 25,
                        errorMessage: errorLessThan,
                      },
                    }}
                  />
                  <AvField
                    type="text"
                    name="phone"
                    label={t("yourNumber")}
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
                        errorMessage: errorValidNumber,
                      },
                      pattern: {
                        value: "^[0-9]*$",
                        errorMessage: errorOnlyNumerals,
                      },
                      minLength: {
                        value: 6,
                        errorMessage: errorMoreThan,
                      },
                      maxLength: {
                        value: 16,
                        errorMessage: errorLessThan,
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
                <hr />
                <div className="disclaimer">
                  <p>
                    <Trans>credentials</Trans>
                    <br />
                    <Trans>dataPrivacy</Trans>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled={personalData.loading === true}>
            {personalData.loading ? (
              <Trans>sending</Trans>
            ) : (
              <Trans>submit</Trans>
            )}
          </Button>
          <Button
            color="secondary"
            onClick={toggle}
            disabled={personalData.loading === true}
          >
            <Trans>cancel</Trans>
          </Button>
        </ModalFooter>
      </AvForm>
    </>
  )
}

export default ShopItemForm
