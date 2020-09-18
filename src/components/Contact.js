import React, { useState } from "react"
import { Button, FormGroup, Label, Row, Col } from "reactstrap"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useAlert } from "react-alert"
import axios from "axios"

// import messageHandler from "../../bot"

const Contact = () => {
  const [contactData, setContactData] = useState({})
  const alert = useAlert()

  const { t } = useTranslation()

  const messageThankyou = t("messageThankyou")
  const messageSuccessful = t("messageSuccessful")
  const alertOk = t("alertOk")

  return (
    <>
      <section id="contact" className="contactSection">
        <div
          className="container"
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="d-sm-block d-md-none ">
            {" "}
            <h2 className="sectionTitle">
              {" "}
              <Trans>contact</Trans>
            </h2>
          </div>
          <Row>
            <Col
              lg={{ size: 6, offset: 3 }}
              sm={{ size: 8, offset: 2 }}
              xs="12"
            >
              <AvForm
                name="Contact Form"
                className="contactForm"
                onValidSubmit={e => {
                  e.preventDefault()
                  setContactData({ loading: true })

                  axios
                    .post("/.netlify/functions/notifyTelegram", {
                      ...contactData,
                    })
                    .then(() => {
                      alert.show(messageThankyou, {
                        title: messageSuccessful,
                        closeCopy: alertOk,
                      })
                    })
                    .then(() => {
                      setContactData({
                        loading: false,
                        contactName: "",
                        email: "",
                        message: "",
                      })
                    })
                    .catch(err => {
                      setContactData({
                        loading: false,
                      })
                      alert.show(`${err}. \nPlease try again later.`, {
                        title: `SERVER ERROR`,
                        closeCopy: alertOk,
                      })
                    })
                }}
              >
                <FormGroup className="contactFormGroup">
                  <Label for="name" className="contactLabel">
                    <Trans>name</Trans>
                  </Label>
                  <AvField
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("yourName")}
                    required
                    errorMessage={t("errorValidName")}
                    onChange={e =>
                      setContactData({
                        ...contactData,
                        contactName: e.target.value,
                      })
                    }
                  />
                </FormGroup>
                <FormGroup className="contactFormGroup">
                  <Label for="exampleEmail" className="contactLabel">
                    <Trans>email</Trans>
                  </Label>
                  <AvField
                    type="email"
                    required
                    errorMessage={t("errorValidEmail")}
                    name="email"
                    id="exampleEmail"
                    placeholder={t("yourEmail")}
                    onChange={e =>
                      setContactData({
                        ...contactData,
                        email: e.target.value,
                      })
                    }
                  />
                </FormGroup>
                <FormGroup className="contactFormGroup">
                  <Label for="exampleText" className="contactLabel">
                    <Trans>message</Trans>
                  </Label>
                  <AvField
                    type="textarea"
                    name="message"
                    id="message"
                    rows="3"
                    required
                    errorMessage={t("errorValidMessage")}
                    placeholder={t("yourMessage")}
                    onChange={e =>
                      setContactData({
                        ...contactData,
                        message: e.target.value,
                      })
                    }
                  />
                </FormGroup>
                <Button
                  className="workButton"
                  disabled={contactData.loading === true}
                >
                  {contactData.loading ? (
                    <Trans>sending</Trans>
                  ) : (
                    <Trans>submit</Trans>
                  )}
                </Button>
              </AvForm>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Contact
