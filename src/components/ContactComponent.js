import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row, Col, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom';

const Required = (val) => (val && val.length);
const MaxLength = (len) => (val) => !(val) || (val.length <= len);
const MinLength = (len) => (val) => (val && val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2, 4}$/i.text(val);
class Contact extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  };

/*   handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  } */

  handleSubmit(value) {
    console.log("Current state is: " + JSON.stringify(value));
    alert('Current State is: ' + JSON.stringify(value));

  }

  
  render() {
  
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
              <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                <Row  className='form-group'>
                  <Label htmlFor='firstName' md={2}>First Name</Label>
                  <Col md={9}>
                    <Control.text id='firstName' name='firstName' model='.firstName' placeholder='FirstName'
                    className='form-control'
                    validators={{Required, MaxLength: MaxLength(15), MinLength: MinLength(3)}}
                    ></Control.text>
                    <Errors 
                    className="text-danger"
                    model='.firstName'
                    show='touched'
                    messages={{
                      Required: 'Reduired',
                      MaxLength: 'Must be greater than 2 characters',
                      MinLength: 'Must be 15 characters or less',
                    }}
                    />
                  </Col>
                </Row>

                <Row  className='form-group'>
                  <Label htmlFor='lastName' md={2}>Last Name</Label>
                  <Col md={9}>
                    <Control.text id='lastName' name='lastName' model='.lastName' placeholder='LastName' className='form-control'></Control.text>
                  </Col>
                </Row>

                <Row  className='form-group'>
                  <Label htmlFor='telnum' md={2}>Contact tel.</Label>
                  <Col md={9}>
                    <Control.text id='telnum' name='telnum' model='.telnum' placeholder='Telnum' className='form-control'></Control.text>
                  </Col>
                  </Row>

                <Row  className='form-group'>
                  <Label htmlFor='email' md={2}>Email</Label>
                  <Col md={9}>
                    <Control.text id='email' name='email' model='.email' placeholder='email' className='form-control'></Control.text>
                  </Col>
                </Row>

                <Row  className='form-group'>
                  <Col md={{size: 6, offset: 2}}>
                    <div className='form-check'>
                      <Label check>
                      <Control.checkbox model='.agree' name='agree' className='form-check-input'></Control.checkbox> {' '}
                      <strong>May we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{size: 3, offset: 1}}>
                    <Control.select model='.contactType' name='contactType'
                    className='form-control'>
                      <option>Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>

                <Row  className='form-group'>
                  <Col md={{size: 10, offset: 2}}>
                    <Label htmlFor='message' md={2}>Your Feedback</Label>
                    <Control.textarea model='.message' rows='12' id='message' name='message' className='form-control'></Control.textarea>
                  </Col>
                </Row>
                <Row  className='form-group'>
                  <Col md={{size: 10, offset:2}}>
                    <Button type='submit' color='primary'>
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact;