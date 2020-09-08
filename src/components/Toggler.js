import React, { useState } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { FaLanguage } from "react-icons/fa"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

function Toggler(props) {
  const { languages } = useI18next()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="toggler">
        <DropdownToggle caret tag="span">
          {" "}
          <FaLanguage style={{ fontSize: "3rem" }} />
        </DropdownToggle>
        <DropdownMenu right>
          {languages.map(lng => (
            <Link to={"/"} language={lng}>
              <DropdownItem key={lng}>
                <Trans>{lng}</Trans>
              </DropdownItem>
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default Toggler
