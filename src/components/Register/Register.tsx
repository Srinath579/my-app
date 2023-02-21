import React, { FC } from 'react';
// import styles from './Register.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import clogo from "./ChezelleLogo.png";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => (
  <div>
    <div className="d-flex justify-content-center">
      <img src={clogo} alt="Logo" style={{ "marginTop": "9%", "transform": "rotate(350deg)"}} />
    </div>
  <div className="d-flex justify-content-center">
      <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "top": "30%", "position": "fixed" }}>
      <div className="pt-3 pb-3">
        <h1 className="text-dark">Register</h1>
      </div>
      <form id="form" method="post">
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
          <MDBBtn type="submit" className="btn btn-primary mt-3">Register</MDBBtn>
        </div>
        <p className="text-center pb-3 h6">Already having an Account? Login
          <NavLink to="/login" id="loginlink" style={{ "background": "none", "border": "none", "color": "blue", "margin": "4px" }}>here</NavLink>
        </p>
      </form>
    </MDBContainer>
  </div>
  </div>
);

export default Register;
