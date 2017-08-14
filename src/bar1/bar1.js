import React, {Component} from 'react'
import {Container, Col, Row, Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class Bar1 extends Component{
    render(){
        return(
            <Container>
                <Row fluid>
                    <Col>
                        <div>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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