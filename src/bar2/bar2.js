import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

class Bar2 extends Component{
    render(){
        return(
            <Container fluid className="bar2">
                <Row>
                    <Col>
                        <h2 className="wa-title">Who is AscendEquities?</h2>
                        Since 2008 we've taught everyday people the skills necessary to become successful day traders. Whether they want to make a part time or full time income that is up to them. Over 90 % of our students become successful day traders winning at least 88% of their trades. Our proprietary indicators give our students the edge necessary to successfully trade in today's markets. We teach our students one on one twice a week for 9 to 12 weeks which allows us to develop their skills and create a personalized trading plan centered around our proprietary indicators. Upon completion of the training we will fund our students day trading accounts to jump start them into live trading. We do quarterly reviews and if profitability is maintained we continue to add funds to their day trading account (up to $100,000) with our students keeping 60 to 80% of the profits. We are truly committed to our students success
                    </Col>
                    <Col className="my-center">
                        <img src="img/computer.png" width="600" alt=""/>
                        <Button color="info">
                            Schedule My Preview
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Bar2