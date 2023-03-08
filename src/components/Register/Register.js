import React, { useState } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar.js';
//import Axios from 'axios';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordError, setPasswordErr] = useState("");
  let errMsg = "";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email.length === 0) {
      if (password.length === 0 && cpassword.length === 0) {
        errMsg = "Please Enter your email and password";
        setPasswordErr(errMsg);
      }
      else {
        errMsg = "Please Enter your email";
        setPasswordErr(errMsg);
      }
    }
    else if (password === cpassword && email.length !== 0) {
      const passwordLength = password.length;
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const uppercasePassword = uppercaseRegExp.test(password);
      const lowercasePassword = lowercaseRegExp.test(password);
      const digitsPassword = digitsRegExp.test(password);
      const specialCharPassword = specialCharRegExp.test(password);
      const minLengthPassword = minLengthRegExp.test(password);

      if (passwordLength === 0) {
        errMsg = "Password is empty";
      }
      if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      }
      else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      }
      else if (!digitsPassword) {
        errMsg = "At least one digit";
      }
      else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      }
      else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      }
      else {
        const newData = {
          "email": email,
          "password": password
        }
        console.log(newData);
        fetch("https://localhost:7185/api/Register/PostUserDetails", {
          mode: 'no-cors',
          cache: 'no-cache',
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newData)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      //setPasswordErr(errMsg);
    }
    else {
      errMsg = "Passwords not matching";
      setPasswordErr(errMsg);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <header className="Register-header bg-light">
        <div className="d-flex justify-content-center mt-4 mb-3 shadow p-3 mb-5 bg-white rounded">
          <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "marginTop": "0%" }}>
            <div className="pt-3 pb-3">
              <h1 className="text-dark">Register</h1>
            </div>
            <form id="form" onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label className="mb-2">Email address</label>
                <MDBInput type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
              </div>
              <div className="form-group mt-2">
                <label className="mb-2">Password</label>
                <MDBInput type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group mt-2">
                <label className="mb-2">Conform Password</label>
                <MDBInput type="password" name="cpassword" className="form-control" id="exampleInputPassword2" placeholder="Conform Password"
                  onChange={(e) => setCPassword(e.target.value)} />
              </div>
              {/* <p className="text-success text-center mt-2" disabled="disabled">Good to go <i class="bi bi-check-circle"></i></p> */}
              <p className="text-danger text-center mt-2">{passwordError}</p>
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
