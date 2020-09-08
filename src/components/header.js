import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, NavItem } from "reactstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Trans } from "gatsby-plugin-react-i18next"
import Toggler from "./Toggler"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar expand="md" light fixed="top">
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
                <Trans>home</Trans>
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#work" className="navlink">
                <Trans>about</Trans>
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#gallery" className="navlink">
                <Trans>gallery</Trans>
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#shop" className="navlink">
                <Trans>shop</Trans>
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#contact" className="navlink">
                <Trans>contact</Trans>
              </AnchorLink>
            </NavItem>
          </Scrollspy>
        </Collapse>
        {/* <Nav>
          <NavItem>
            <UncontrolledDropdown>
              <DropdownToggle nav caret className="navlink">
                <FaLanguage style={{ fontSize: "3rem" }} />
              </DropdownToggle>
              <DropdownMenu className="languages">
                {languages.map(lng => (
                  <DropdownItem key={lng}>fluid="md"
                    <Link to={"/"} language={lng}>
                      {lng}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav> */}
      </Navbar>
      <Toggler />
    </>
  )
}

export default Header
