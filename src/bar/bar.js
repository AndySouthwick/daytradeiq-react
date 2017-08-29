import React, {Component} from 'react'
import {Container, Row, Col, Form, FormGroup, Input, Button} from 'reactstrap'
import YouTube from 'react-youtube'
import { createNewContact } from '../graph.js'
import { graphql } from 'react-apollo'

class Bar extends Component{
  constructor () {
    super()
    this.state = {
      affiliate_id: '',
      given_name: '',
      family_name: '',
      email: '',
      phone: ''
    }
  }

  addContact = (evt) => {
    console.log(this.state.given_name)
    evt.preventDefault()
    this.props.mutate({
      variables: {
        affiliate_id: 1,
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        phone: this.state.phone
      }
    })
  }

    render(){
        return(

            <Container >
              <Row >
                 <Col className="bar">
                      <span className="red" >Want to see our group's daily trades?  
                          TEXT 'Daily' to <a href="SMS:385-448-4055"> 385-448-4055</a></span>
                 </Col>
              </Row>
                <Row >
                    <Col lg="8">
                        <YouTube
                            videoId="5k1GStCxq7c"
                            onReady={this._onReady}
                        />
                    </Col>

                    <Col lg="3">

                        <h1 className="lightbg">Schedule My Preview</h1>


                      <Form onSubmit={this.addContact}>
                        <FormGroup >
                          <Input type="text" onChange={(evt) => this.setState({ given_name: evt.target.value }) } placeholder="First Name" />
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" onChange={(evt) => this.setState({ family_name: evt.target.value }) } placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" onChange={(evt) => this.setState({ email: evt.target.value }) } placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                          <Input type="text" onChange={(evt) => this.setState({ phone: evt.target.value }) } placeholder="Phone" />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                      </Form>


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
export default graphql(createNewContact)(Bar)