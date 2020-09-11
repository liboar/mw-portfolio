import React from "react"
import { FaInstagram } from "react-icons/fa"

import { Trans } from "gatsby-plugin-react-i18next"

const Footer = () => {
  return (
    <footer className="footer" fixed="bottom">
      {/* <div className="leftFooter">
        <p style={{ margin: "auto" }}>
          <Trans>title</Trans> &copy;2020
        </p>
      </div> */}

      <ul className="rightFooter">
        <li>
          <Trans>title</Trans> &copy;2020
        </li>

        {/* <li>
          {" "}
          <Link to={`/impressum/`}>
            <Trans>impressum</Trans>
          </Link>
        </li> */}
        <li>
          <a
            className="instagramIcon"
            href="https://www.instagram.com/marianna_ikhmalian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "2.1rem" }} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
