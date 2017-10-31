/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

class Card3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>

            <Card>
              <CardImg top width="100%" src="img/support.jpeg" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Forex Training and Support</CardTitle>
                <Button color="danger" onClick={this.toggle}>Learn More</Button>
              </CardBlock>
            </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Forex Training and Support</ModalHeader>
          <ModalBody>
            Nine to twelve weeks of training (one on one twice a week).<br/><br/>

            Part of a community of traders<br/><br/>

            Daily webinars with real time trading and education<br/><br/>

            Proprietary indicators with unmatched speed and accuracy<br/><br/>

            Online chatroom posting real trades<br/><br/>

            Mobile app with trading alerts<br/><br/>

            Trained by coacehes with proven trading success          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default Card3;