import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

class Bar3 extends Component{
    render(){
        return(
            <Container fluid className="bar3 ">
                <Row>  <h1>See What Some Of Our Students have To Say!</h1> </Row>
                <Row>

                    <hr/>
                    <Col>
                        <h2>Josh Bingham</h2>
                        <i>Tucson Arizona</i>
                        "Learn the indicators. If you do, you'll never have to worry about money."
                    </Col>
                    <Col>
                        <h2>Jason Hyium</h2>
                        <i>Los Angeles California</i>
                        "This group had trust in me as a new trader to follow their system which gave me the ability to get results."
                    </Col>
                    <Col>
                        <h2>Clinton Adnerson</h2>
                        <i>St Louis Missouri</i>
                        "With these elite indicators combined with the support of fellow traders, this has been a great experience"
                    </Col>

                </Row>
            </Container>
        )
    }
}
export default Bar3