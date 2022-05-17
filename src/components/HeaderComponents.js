import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class Header extends React.Component {

  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = { isNavOpen: false, isModalOpen: false }; 
  }
  
  toggleNav() {
    this.setState({
      isNavOpen:  !this.state.isNavOpen 
    })
  }
  
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username:" + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
    event.preventDefault();
  }

  render() {
    return(
      <>
      <Navbar dark expand='md'>
        <div className='container' >
            <NavbarBrand href='/Home'>
              <img src="assets/images/logo.png" width='41' alt='Ristorante Con Fusion logo'/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/Home'><span className='fa fa-home fa-lg'></span> Home </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/Aboutus'><span className='fa fa-info fa-lg'></span> About us </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/Menu'><span className='fa fa-list fa-lg'></span> Menu </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/Contactus'><span className='fa fa-address-card-o fa-lg'></span> Contact us </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input type='text' id='username' name='username' innerRef={(Input) => this.username = Input }></Input>
              </FormGroup>

              <FormGroup>
                <Label htmlFor='password'>Username</Label>
                <Input type='password' id='password' name='password' innerRef={(Input) => this.password = Input }></Input>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type='checkbox' name='remember' innerRef={(Input) => this.remember = Input }></Input> Remember me
                </Label>
              </FormGroup>
              <Button type='submit' value="submit" color='outline-primary'>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Header;
