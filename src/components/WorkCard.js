import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

const WorkCard = ({ excerpt, image, cardId, className }) => {
  return (
    <Card>
      <CardImg
        className={className}
        top
        width="100%"
        alt="no img"
        fluid={image}
      />
      <CardBody>
        <CardText>{excerpt}</CardText>
      </CardBody>
    </Card>
  )
}

export default WorkCard
