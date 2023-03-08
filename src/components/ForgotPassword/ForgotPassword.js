import React from 'react';
import './ForgotPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
// import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar.js';

function ForgotPassword()
{
  return(
    <div>
      {/* <div className="d-flex justify-content-center">
      <img src={clogo} alt="Logo" style={{ "top": "18%", "transform": "rotate(350deg)", "position": "fixed" }} />
    </div> */}
      <Navbar></Navbar>
      <header className="ForgotPassword-header bg-light">
        <div className="d-flex justify-content-center mt-4 mb-3 shadow p-3 mb-5 bg-white rounded">
          <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "marginTop": "0%" }}>
            <div className="pt-3 pb-3">
              <h1 className="text-dark">Reset Password</h1>
            </div>
            <form id="form" method="post">
              <div className="form-group">
                <label className="mb-2">Email address</label>
                <MDBInput type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email" />
              </div>
              <div className="form-group mt-2">
                <label className="mb-2">New Password</label>
                <MDBInput type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group mt-2">
                <label className="mb-2">Conform New Password</label>
                <MDBInput type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
              </div>
              <div className="d-grid gap-2 pb-4">
                <MDBBtn type="submit" className="btn btn-primary mt-3">Reset</MDBBtn>
              </div>
            </form>
          </MDBContainer>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
