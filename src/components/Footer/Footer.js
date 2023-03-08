import React from 'react';
// import './Footer.css';
import { NavLink } from "react-router-dom";

function Footer()
{
  return(
    <footer className="text-center text-white bg-dark text-muted">
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <NavLink to="https://www.facebook.com/vhashtagclothing/" target="_blank"><i className="bi bi-facebook" style={{"marginRight": "30px"}}></i></NavLink>
          <i className="bi bi-instagram" style={{ "marginRight": "30px" }}></i>
          <NavLink to="https://www.youtube.com/channel/UCK0cTyKm4Bgo-F3-VqnyyHQ" target="_blank"><i className="bi bi-youtube" style={{ "marginRight": "30px" }}></i></NavLink>
          <i className="bi bi-linkedin" style={{ "marginRight": "30px" }}></i>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-white mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                About Us
              </h6>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>About Chezelle</NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>Contact Us</NavLink>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Our Policy
              </h6>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>Terms And Condition</NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>Privacy Policy</NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>Return Policy</NavLink>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Your
              </h6>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>My Account</NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>Track Your</NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset" style={{"textDecoration": 'none'}}>Wishlist</NavLink>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <p className="foot_heading  mar0">ONLINE  RELATED QUERIES</p>
                <p className="email_id"><NavLink>chezelle@vhastag.online</NavLink></p>
                <p className="duration">Mon to Fri 10:00 AM - 6:30 PM</p>
                <p className="foot_heading mar0 more_info"><span className="inform">For Business Enquiries | </span><NavLink className="contact-info">Contact Us</NavLink></p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Chezelle by V Hashtag
      </div>
    </footer>
  );
}

export default Footer;
