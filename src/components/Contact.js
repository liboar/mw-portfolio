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
                  method="post"
                  action="localhost:3000/contact"
                  className="contactForm"
                >
                  <FormGroup>
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
                    <Label for="number" className="contactLabel">
                      <Trans>number</Trans>
                    </Label>
                    <Input
                      type="text"
                      name="number"
                      id="number"
                      placeholder={t("yourNumber")}
                    />
                  </FormGroup>
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
