import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Card1 extends Component {
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
              <CardImg top width="100%" src="img/forex.jpeg" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Why Forex market?
                </CardTitle>
                <Button color="danger" onClick={this.toggle}>Learn More</Button>

              </CardBlock>
            </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Why Forex market?</ModalHeader>
          <ModalBody>
            <ul>
              <li>Largest traded market at 5.3 trillion a day.
              </li>
              <li>  Very flexible times to trade because markets are open 24 hours a day. A person can trade any time around their busy schedule.
              </li>
              <li>Traders have the ability to be conservative on their trades
              </li>


            </ul>
                    </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default Card1;