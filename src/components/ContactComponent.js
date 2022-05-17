import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      firstName: '',
      lastName: '',
      telnum: '',
      email: '',
      agree: '',
      contactType: '',
      message: '',
      touched: {
        firstName: false,
        lastName: false,
        telnum: false,
        email: false
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  };

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {...this.state.touched, [field]: true}
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  validate(firstName, lastName, telnum, email) {

    const errors = {
      firstName: '',
      lastName: '',
      telnum: '',
      email: ''
    };

    if (this.state.touched.firstName && firstName.length < 3) {
      errors.firstName = "First Name should be >= 3 characters";
    } else if (this.state.touched.firstName && firstName.length > 10) {
      errors.firstName = "First Name should be <= 10 characters";
    }

    if (this.state.touched.lastName && lastName.length < 3) {
      errors.lastName = "Last Name should be >= 3 characters";
    } else if (this.state.touched.lastName && lastName.length > 10) {
      errors.lastName = "Last Name should be <= 10 characters";
    }

    const reg = /^\d{11}$/;
    if (this.state.touched.telnum && !reg.test(telnum)) {
      errors.telnum = "Tel. Number should contain only numbers and it must be 11";
    }

    if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
      errors.email = "Email should contain a @ and a dot (.)";
    }
    return (errors);
  }

  render() {
    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telnum, this.state.email);
    return(
      <div className="container">
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/Home'> Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>Contact us</h3>
            <hr/>
          </div>
        </div>
        <div className="row row-content">
             <div className="col-12">
                <h3>Location Information</h3>
             </div>
              <div className="col-12 col-sm-4 offset-sm-1">
                <h5>Our Address</h5>
                <address style={{fontSize: '100%'}}>
                  121, Clear Water Bay Road<br/>
                  Clear Water Bay, Kowloon<br/>
                  HONG KONG<br/>
                  <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                  <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                  <i className="fa fa-envelope"></i>:<a href="mailto:confusion@food.net">confusion@food.net</a>
                </address>
              </div>
              <div className="col-12 col-sm-4 offset-1">
                  <h5>Map of our Location</h5>
                  <div>
                    <iframe header="Our location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63434.98708342473!2d3.497744454705809!3d6.434274845696144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1652651598736!5m2!1sen!2sng" width="500" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>
              <div className="col-12 col-sm-11 offset-sm-1">
                  <div className="btn-group" role="button">
                      <a className="btn btn-primary" role="button" href="tel:08148758013"><i className="fa fa-phone"></i> Call</a>
                      <a className="btn btn-info" role="button"><i className="fa fa-skype"></i> Skype</a>
                      <a className="btn btn-success" role="button" href="mailto:toluadelekesteve@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                  </div>
              </div>
          </div>
          
          <div className='row row-content'>
            <div className='col-12'>
              <h3>Send us Your Feedback</h3>
            </div>
            <div className='col-12 col-md-9'>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor='firstName' md={2}>First Name</Label>
                  <Col md={9}>
                    <Input id='firstName' name='firstName' type='text' placeholder='FirstName' value={this.state.firstName}
                    valid={errors.firstName === ''}
                    invalid={errors.firstName !== ''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('firstName')}></Input>
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor='lastName' md={2}>Last Name</Label>
                  <Col md={9}>
                    <Input id='lastName' name='lastName' type='text' placeholder='LastName' value={this.state.lastName} onChange={this.handleInputChange}
                    valid={errors.lastName === ''}
                    invalid={errors.lastName !== ''}
                    onBlur={this.handleBlur('lastName')}></Input>
                    <FormFeedback>{errors.lastName}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor='telnum' md={2}>Contact tel.</Label>
                  <Col md={9}>
                    <Input id='telnum' name='telnum' type='tel' placeholder='Telnum' value={this.state.telnum} onChange={this.handleInputChange}
                    valid={errors.telnum === ''}
                    invalid={errors.telnum !== ''}
                    onBlur={this.handleBlur('telnum')}></Input>
                    <FormFeedback>{errors.telnum}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor='email' md={2}>Email</Label>
                  <Col md={9}>
                    <input id='email' name='email' type='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange}
                    valid={errors.email === ''}
                    invalid={errors.email !== ''}
                    onBlur={this.handleBlur('email')}></input>
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                    <Label check>
                      <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange}></Input> {' '}
                      <strong>May we contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{size: 3, offset: 1}}>
                    <Input type='select' name='contactType'
                    value={this.state.contactType} onChange={this.handleInputChange}>
                      <option>Tel.</option>
                      <option>Email</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{size: 10, offset: 2}}>
                    <Label htmlFor='message' md={2}>Your Feedback</Label>
                    <Input type='textarea' rows='12' id='message' name='message' value={this.state.message} onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{size: 10, offset:2}}>
                    <Button type='submit' color='primary'>
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact;