import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

class ThankYou extends Component{
  render(){
    return(
      <Container>
        <Row>
          <Col md={{ size: 6, push: 2, pull: 2, offset: 1 }} className="middle">
            <h2>Thank You, Please check your email!</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default ThankYou