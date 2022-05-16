import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 col-sm-2 offset-1'>
            <h5>Links</h5>
            <ul className="list-unstyled">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Aboutus">About</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Contactus">Contact</Link></li>
            </ul>
          </div>
          <div className='col-7 col-sm-5'>
            <h5>Our Address</h5>
              <address>
		              121, Clear Water Bay Road<br/>
		              Clear Water Bay, Kowloon<br/>
		              HONG KONG<br/>
		              <i className="fa fa-phone fg-lg"></i>: +852 1234 5678<br/>
		              <i className="fa fa-fax fg-lg"></i>: +852 8765 4321<br/>
		              <i className="fa fa-envelope fg-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
		          </address>
          </div>
          <div className='col-12 col-sm-4 align-self-center'>
            <div>
                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus fg-lg"></i></a>
                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fg-lg"></i></a>
                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fg-lg"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fg-lg"></i></a>
                <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube fg-lg"></i></a>
                <a className="btn btn-social-icon btn-envelope-o" href="mailto:"><i className="fa fa-envelope-o fg-lg"></i></a>
            </div>
          </div>
        </div>
        <hr className='hr'/>
        <div className='row justify-content-center'>
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;