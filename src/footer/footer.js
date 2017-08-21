import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

class Footer extends Component{
    render(){
        return(
            <Container fluid className="footer">
                <Row >

                    <hr/>
                    <Col>
                        <h4>DayTradeIq</h4>
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
                    </Col>
                    <Col>
                        <a href="https://www.facebook.com/winatdaytrading/" target="blank"><i className="fa fa-facebook fa-4x" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/winatdaytrading"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/channel/UCvBSK3dY0_kG4HMZ4dKycGQ/featured" target="blank"><i className="fa fa-youtube fa-4x" aria-hidden="true"></i></a>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        copy 2017 daytradeiq.com All Rights Reserved
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Footer