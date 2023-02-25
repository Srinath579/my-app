import React from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer.js';
// import clogo from "./ChezelleLogo.png";

function Register() {
  return (
  <div>
      <header className="Register-header bg-secondary">
    {/* <div className="d-flex justify-content-center">
      <img src={clogo} alt="Logo" style={{ "top": "18%", "transform": "rotate(350deg)", "position": "fixed" }} />
    </div> */}
      <div className="d-flex justify-content-center mt-4 mb-3">
      <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "marginTop": "0%" }}>
        <div className="pt-3 pb-3">
          <h1 className="text-dark">Register</h1>
        </div>
        <form id="form">
          <div className="form-group">
            <label className="mb-2">Email address</label>
            <MDBInput type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email" />
          </div>
          <div className="form-group mt-2">
            <label className="mb-2">Password</label>
            <MDBInput type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group mt-2">
            <label className="mb-2">Conform Password</label>
            <MDBInput type="password" className="form-control" id="exampleInputPassword2" placeholder="Conform Password" />
          </div>
          <div className="d-grid gap-2 pb-3">
            <button type="submit" className="btn btn-primary mt-3">Register</button>
          </div>
          <p className="text-center pb-3 h6">Already having an Account? Login
            <NavLink to="/login" id="loginlink" style={{ "background": "none", "border": "none", "color": "blue", "margin": "4px" }}>here</NavLink>
          </p>
        </form>
      </MDBContainer>
    </div>
    </header>
    <Footer />
  </div>
  );
}
export default Register;
