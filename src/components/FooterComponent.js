import React from 'react';


const Footer = () => {
  return(
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 col-sm-2 offset-1'>
            <h5>Links</h5>
            <ul class="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="./aboutus.html">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="./contactus.html">Contact</a></li>
            </ul>
          </div>
          <div className='col-7 col-sm-5'>
            <h5>Our Address</h5>
              <address>
		              121, Clear Water Bay Road<br/>
		              Clear Water Bay, Kowloon<br/>
		              HONG KONG<br/>
		              <i class="fa fa-phone fg-lg"></i>: +852 1234 5678<br/>
		              <i class="fa fa-fax fg-lg"></i>: +852 8765 4321<br/>
		              <i class="fa fa-envelope fg-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
		          </address>
          </div>
          <div className='col-12 col-sm-4 align-self-center'>
            <div>
                <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fg-lg"></i></a>
                <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fg-lg"></i></a>
                <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fg-lg"></i></a>
                <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fg-lg"></i></a>
                <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube fg-lg"></i></a>
                <a class="btn btn-social-icon btn-envelope-o" href="mailto:"><i class="fa fa-envelope-o fg-lg"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className='row justify-content-center'>
          <div class="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;