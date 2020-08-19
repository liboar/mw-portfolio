import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, NavItem } from "reactstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"

const Header = (props, { styleClass }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar expand="sm" light fixed="top">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Scrollspy
            className={`Scrollspy`}
            items={["hero", "work", "gallery", "shop", "contact"]}
            currentClassName="isCurrent"
            offset={-100}
            className="container nav mr-auto"
            navbar
          >
            <NavItem>
              <AnchorLink href="#hero" className="navlink">
                Home
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#work" className="navlink">
                Work
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
      </Navbar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
