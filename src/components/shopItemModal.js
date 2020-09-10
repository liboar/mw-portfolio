import React, { useState } from "react"
import { Button, Modal, ModalHeader } from "reactstrap"
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
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
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
