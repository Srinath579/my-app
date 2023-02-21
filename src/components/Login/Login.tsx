import React, { FC } from 'react';
// import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import clogo from "./ChezelleLogo.png";

interface LoginProps {}

const Login: FC<LoginProps> = () => (
<div>
    <div className="d-flex justify-content-center">
      <img src={clogo} alt="Logo" style={{ "marginTop": "9%", "transform": "rotate(350deg)"}} />
    </div>
    {/* <h6 className="text-white">by</h6>
    <h5 className="text-white">V Hashtag</h5> */}
  <div className="d-flex justify-content-center">
    <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "top":"30%", "position":"fixed"}}>
      <div className="pt-3 pb-3">
        <h1 className="text-dark">Login</h1>
      </div>
      <form id="form" method="post">
        <div className="form-group">
          <label className="mb-2">Email address</label>
          <MDBInput type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email"/>
        </div>
        <div className="form-group mt-2">
          <label className="mb-2">Password</label>
          <MDBInput type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
          <div className="form-group mt-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label">
                  Remember Me
                </label>
            </div>
          </div>
        <div className="d-grid gap-2 pb-3">
          <MDBBtn type="submit" className="btn btn-primary mt-3">Login</MDBBtn>
        </div>
        <p className="text-center pb-3 h6">Don't have an Account? Register
          <NavLink to="/register" id="registerlink" style={{"background": "none", "border": "none", "color": "blue", "margin":"4px"}}>here</NavLink>
        </p>
        <p className="text-center pb-3 h6">Forgot Password?
          <NavLink to="/forgotpassword" id="registerlink" style={{ "background": "none", "border": "none", "color": "blue", "margin": "4px" }}>Click here</NavLink>
        </p>
    </form>
  </MDBContainer>
  </div>
</div>
);

export default Login;
