import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import YouTube from 'react-youtube'

class Bar extends Component{
    render(){
        return(

            <Container >
              <Row >
                 <Col>
                      <span className="red" >Want to see our group's daily trades?  
                          TEXT 'Daily' to <a href="SMS:385-448-4055"> 385-448-4055</a></span>
                 </Col>
              </Row>
                <Row className="bar">
                    <Col lg="8">
                        <YouTube
                            videoId="5k1GStCxq7c"
                            onReady={this._onReady}
                        />
                    </Col>

                    <Col lg="3">

                        <h1>Schedule My Preview</h1>


                        <div className="embedded-joinwebinar-button">
                                <Button type="button" className="btn btn-default css3button" title="regpopbox_38575_16331f919f">
                                    <span>Register now</span>
                                </Button>
                        </div>


                    </Col>

                </Row>
            </Container>
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default Bar