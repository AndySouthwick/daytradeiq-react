/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

class Card2 extends Component {
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
              <CardImg top width="100%" src="img/students.jpeg" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Why we let our students trade our money?</CardTitle>
                <Button color="danger" onClick={this.toggle}>Learn More</Button>
              </CardBlock>
            </Card>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Why we let our students trade our money?</ModalHeader>
          <ModalBody>
            Every trader has a limit when the risk is more than they are willing to take on individualy<br/>

            If we traded accounts with millions of dollars, taking a loss could be significant<br/>

            When our students have been taught and educated to trade like us combined with our proprietary indicators our risk is spread out across the board.<br/>

            Some of our money is in the Euro market while other monnies are in the Aussie market. Diversifying our invested funds bring in higher returns than the typical investiment vehicles.          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default Card2;