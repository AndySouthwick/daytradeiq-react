import React, {Component} from 'react'
import {Container, Col, Row, Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class Bar1 extends Component{
    render(){
        return(
            <Container fluid className="bar1">
                <Row className="justify-content-center">
                    <Col><h1>Frequently Asked Questions </h1><hr/>
                    </Col></Row>
                <Row >
                    <Col>
                        <div>
                            <Card>
                                <CardImg top width="100%" src="img/forex.jpeg" alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Card>
                                <CardImg top width="100%" src="img/students.jpeg" alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBlock>
                            </Card>
                        </div>
                    </Col>

                        <Col>
                            <div>
                                <Card>
                                    <CardImg top width="100%" src="img/support.jpeg" alt="Card image cap" />
                                    <CardBlock>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBlock>
                                </Card>
                            </div>
                        </Col>

                            <Col>
                                <div>
                                    <Card>
                                        <CardImg top width="100%" src="img/tradefulltime.jpeg" alt="Card image cap" />
                                        <CardBlock>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBlock>
                                    </Card>
                                </div>
                            </Col>
                </Row>
            </Container>
        )
    }
}

export default Bar1