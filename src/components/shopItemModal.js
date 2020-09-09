import React, { useState } from "react"
import Img from "gatsby-image"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { Trans } from "gatsby-plugin-react-i18next"
import ShopItemForm from "./shopItemForm"

const ShopItemModal = props => {
  const { price, description, type, fluid, key, size } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle} className="workButton">
        <Trans>order</Trans>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="customModal" size="lg">
        <ModalHeader toggle={toggle}>Ihre Bestellung</ModalHeader>

        <ShopItemForm
          fluid={fluid}
          description={description}
          price={price}
          key={key}
          type={type}
          toggle={toggle}
          size={size}
        />
      </Modal>
    </div>
  )
}

export default ShopItemModal
