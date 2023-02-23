import React, { FC } from 'react';
// import styles from './ForgotPassword.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import clogo from "./ChezelleLogo.png";

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = () => (
  <div>
    <div className="d-flex justify-content-center">
      <img src={clogo} alt="Logo" style={{ "top": "18%", "transform": "rotate(350deg)", "position": "fixed" }} />
    </div>
    {/* <h6 className="text-white">by</h6>
    <h5 className="text-white">V Hashtag</h5> */}
    <div className="d-flex justify-content-center">
      <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "top": "30%", "position": "fixed" }}>
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
  </div>
);

export default ForgotPassword;
