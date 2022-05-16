import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Contact = (props) => {
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
            <div className="col-12 col-sm-6">
                <h5>Map of our Location</h5>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63434.98708342473!2d3.497744454705809!3d6.434274845696144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1652651598736!5m2!1sen!2sng" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
    </div>
  )
}

export default Contact;