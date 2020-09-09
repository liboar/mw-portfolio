import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardText, CardBody, Col, Button } from "reactstrap"

const WorkCard = ({ excerpt, fluid, cardId, buttonLink, buttonText }) => {
  return (
    <Card
      className="workCard"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="300"
      data-sal-easing="ease"
      key={cardId}
    >
      <Col sm="3" md="3" xs="6">
        <Img width="100%" alt="no img" fluid={fluid} />
      </Col>

      <Col sm="9" md="9" xs="10" className="cardBody m-auto">
        <CardBody>
          <CardText>
            <>{excerpt}</>
          </CardText>
          <Link to={`${buttonLink}`}>
            <Button className="workButton">{buttonText}</Button>
          </Link>
        </CardBody>
      </Col>
    </Card>
  )
}

export default WorkCard
