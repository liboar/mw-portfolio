import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"

const data = [
  {
    id: 1,
    text: "home",
    url: "home",
  },
  {
    id: 2,
    text: "work",
    url: "work",
  },
  {
    id: 3,
    text: "gallery",
    url: "gallery",
  },
  {
    id: 4,
    text: "shop",
    url: "shop",
  },
  {
    id: 5,
    text: "contact",
    url: "contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <AnchorLink href={"#" + link.url}>{link.text}</AnchorLink>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <Scrollspy
      className={`page-links ${styleClass ? styleClass : ""}, Scrollspy`}
      items={["home", "work", "gallery", "shop", "contact"]}
      currentClassName="isCurrent"
      offset={-100}
    >
      {tempLinks}
    </Scrollspy>
  )
}
