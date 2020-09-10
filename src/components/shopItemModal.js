import React, { useState } from "react"
import { Button, Modal, ModalHeader } from "reactstrap"
import { Trans } from "gatsby-plugin-react-i18next"
import ShopItemForm from "./shopItemForm"

const ShopItemModal = props => {
  const {
    price,
    description,
    type,
    fluid,
    key,
    size,
    material,
    technique,
  } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle} className="workButton">
        <Trans>order</Trans>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="customModal" size="xl">
        <ModalHeader toggle={toggle}></ModalHeader>

        <ShopItemForm
          fluid={fluid}
          description={description}
          price={price}
          key={key}
          type={type}
          toggle={toggle}
          size={size}
          material={material}
          technique={technique}
        />
      </Modal>
    </div>
  )
}

export default ShopItemModal
