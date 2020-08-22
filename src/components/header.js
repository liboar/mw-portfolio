import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
} from "reactstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { FaLanguage } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar expand="sm" light fixed="top">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Scrollspy
            className={`Scrollspy container nav mr-auto`}
            items={["hero", "work", "gallery", "shop", "contact"]}
            currentClassName="isCurrent"
            offset={-100}
            navbar
          >
            <NavItem>
              <AnchorLink href="#hero" className="navlink">
                Home
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#work" className="navlink">
                About
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#gallery" className="navlink">
                Gallery
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#shop" className="navlink">
                Shop
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#contact" className="navlink">
                Contact
              </AnchorLink>
            </NavItem>
          </Scrollspy>
        </Collapse>
        <Nav>
          <NavItem>
            <UncontrolledDropdown>
              <DropdownToggle nav caret className="navlink">
                <FaLanguage style={{ fontSize: "3rem" }} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>German</DropdownItem>
                <DropdownItem>Russian</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header
