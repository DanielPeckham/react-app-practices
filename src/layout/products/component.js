import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

export default class Products extends Component {
  render (props) {
    return (
      <div>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Leopard</CardTitle>
              <CardText>A bunch of lorem ipsum crap for $9999 each</CardText>
              <Button>Add to Cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Kidneys</CardTitle>
              <CardText>Lorem Ipsum crap for $8887 each</CardText>
              <Button>Add to Cart</Button>
            </Card>
          </Col>
        </Row>
      </div>
      )
    }
  }
