import React from "react"
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

// import messageHandler from "../../bot"

const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
      <section id="contact" className="contactSection">
        <div
          className="container"
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-60%)",
          }}
        >
          <div>
            <Row>
              <Col lg={{ size: 6, offset: 3 }}>
                <Form
                  name="Contact Form"
                  method="POST"
                  data-netlify-recaptcha="true"
                  data-netlify-honeypot="bot-field"
                  data-netlify="true"
                  className="contactForm"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                >
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <FormGroup>
                    <FormGroup>
                      <Label for="name" className="contactLabel">
                        <Trans>name</Trans>
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={t("yourName")}
                      />
                    </FormGroup>
                    <Label for="exampleEmail" className="contactLabel">
                      <Trans>email</Trans>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder={t("yourEmail")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="subject" className="contactLabel">
                      <Trans>subject</Trans>
                    </Label>
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder={t("yourNumber")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleText" className="contactLabel">
                      <Trans>message</Trans>
                    </Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      rows="5"
                      placeholder={t("yourMessage")}
                    />
                  </FormGroup>
                  <div data-netlify-recaptcha="true"></div>
                  <Button className="workButton">
                    <Trans>submit</Trans>
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
