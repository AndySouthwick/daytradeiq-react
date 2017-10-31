/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Card4 extends Component {
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
          <CardImg top width="100%" src="img/tradefulltime.jpeg" alt="Card image cap" />
          <CardBlock>
            <CardTitle>Can I trade full time?</CardTitle>
            <Button color="danger" onClick={this.toggle}>Learn More</Button>
          </CardBlock>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Can I trade full time?</ModalHeader>
          <ModalBody>
            Absolutely, however you will need to commit to transitioning slowly. This is not a quick overnight solution to financial Independence. Don't quit your full time job until you replace your income trading. When our traders get to this point, most of them continue to trade part time and fill their time with something else.          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Card4;