import React, { useState } from "react"
import Img from "gatsby-image"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { Trans } from "gatsby-plugin-react-i18next"

const ShopItemModal = props => {
  const { price, description, type, fluid, key } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle} className="workButton">
        <Trans>order</Trans>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="customModal">
        <ModalHeader toggle={toggle}>
          Ihre Bestellung: {description}
        </ModalHeader>

        <ModalBody>
          <div style={{ width: "200px" }}>
            <Img width="100%" alt={description} fluid={fluid} />
          </div>
          <p>Item: {type}</p>
          <p>Preis: {price} &#8381;</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Bestellung senden
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Abbrechen
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ShopItemModal
