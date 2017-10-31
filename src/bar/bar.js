import React, {Component} from 'react'
import {Container, Row, Col, Form, FormGroup, Input, Button} from 'reactstrap'
import YouTube from 'react-youtube'
import { createNewContact } from '../graph.js'
import { graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'

class Bar extends Component{
  constructor () {
    super()
    this.state = {
      affiliate_id: '',
      given_name: '',
      family_name: '',
      email: '',
      phone: '',
      redirect: false
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
    }).then(() => {
      this.setState({
        redirect: true
      })
      console.log(this.state)

    })

  }

    render(){

      if (this.state.redirect) {
        return <Redirect to='/thankyou'/>;
      }
        return(

            <Container >
                <Row >
                    <Col lg={{size:8, offset:2}}>
                        <YouTube
                            className="youTubeVideo"
                            videoId="5k1GStCxq7c"
                            onReady={this._onReady}
                           />
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