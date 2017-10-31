import React, {Component} from 'react'
import {Container, Col, Row, Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody} from 'reactstrap'
import Card1 from './cards/card1'
import Card2  from './cards/card2'
import Card3  from './cards/card3'
import Card4 from './cards/card4'

class Bar1 extends Component{

  render(){




        return(
            <Container fluid className="bar1">


                <Row className="justify-content-center">
                    <Col><h1>Frequently Asked Questions </h1><hr/>
                    </Col>
                </Row>
                <Row >
                  <Col>
                    <div>
                         <Card1/>
                    </div>
                  </Col>

                  <Col>
                    <div>
                      <Card2/>
                    </div>
                  </Col>


                  <Col>
                    <div>
                      <Card3/>
                    </div>
                  </Col>

                  <Col>
                      <div>
                        <Card4/>
                      </div>
                  </Col>
                </Row>





            </Container>
        )
    }
}

export default Bar1