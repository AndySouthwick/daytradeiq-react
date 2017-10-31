import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Copyright from 'react-copyright'

class Footer extends Component{
    render(){
        return(
            <Container fluid className="footer">
                <Row >

                    <hr/>
                    <Col>
                        <h4>AscendEquities</h4>
                    </Col>
                    <Col>
                        <h4>Solutions</h4>
                        <a href="/#aboutsection">How We Fund Your Account</a>
                    </Col>
                    <Col>
                        <h4>Support</h4>
                        <a href="/contact-us">Help Center</a><br/>
                    </Col>
                    <Col>
                        <h4>Company</h4>
                        <a href="/contact-us">Contact</a><br/>
                        <a href="/#aboutsection">About</a><br/>

                        <a href="/contact-us">Office Location</a><br/>
                        <a href="/#Affiliate">Afilliate Program</a><br/>
                    </Col>


                </Row>

                <Row>
                    <Col>

                        <p className="my-center"><Copyright>daytradeiq.com All Rights Reserved</Copyright></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Footer