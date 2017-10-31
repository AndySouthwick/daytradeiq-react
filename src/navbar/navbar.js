import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
 class Navigation extends Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }



    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

   scrollToFaq = () => {
     window.scrollTo(1000,500)
     console.log('working')
   }

   scrollToAbout = () => {
     window.scrollTo(1000,1000)
     console.log('working')
   }

   scrollToTestimonials = () => {
     window.scrollTo(1000,1700)
     console.log('working')
   }
    render() {



        return (
            <div>
                <Navbar  light toggleable className="navbar navbar-toggleable-md navbar-light my_bg-faded fixed-top">
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/"><img src={require('../img/AscendEquities.png')} alt="" width="200"/></NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                            <NavLink href="https://secureonlinedaytradinguniversity.com/login/">Trading University</NavLink>
                          </NavItem>
                            <NavItem>
                                <NavLink onClick={this.scrollToTestimonials}>Testimonials</NavLink>
                            </NavItem>
                          <NavItem>
                            <NavLink onClick={this.scrollToFaq}>faq's</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink onClick={this.scrollToAbout}>About</NavLink>
                          </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation