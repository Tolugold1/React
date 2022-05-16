import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';


class Header extends React.Component {

  constructor(props) {
    super(props)

    this.toggleNav = this.toggleNav.bind(this);
    this.state = { isNavOpen: false }; 
  }
  
  toggleNav() {
    this.setState({
      isNavOpen:  !this.state.isNavOpen 
    })
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
                  <NavLink className='nav-link' to='/Contactus'><span className='fa fa-address fa-lg'></span> Contact us </NavLink>
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
      </>
    )
  }
}

export default Header;
