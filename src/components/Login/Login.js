import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
// import clogo from "./ChezelleLogo.png";
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar.js';


function Login(){
  const [InputEmail1, setInputEmail1]=useState('')
  const [InputPassword1, setInputPassword1] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (InputEmail1.length === 0) {
      setError(true)
    }
    if (InputPassword1.length === 0) {
      setError(true)
    }
  }
  // const handleChange = () => {

  //   // `item` is an object which contains the original value
  //   // as well as the time when it's supposed to expire
  //   const item = {
  //     value: InputEmail1.value
  //   }
  //   localStorage.setItem(JSON.stringify(item))
  // }; 
  return(
    <div className='Login'>
      <Navbar></Navbar>
      <header className="Login-header bg-light">
      {/* <div className="d-flex justify-content-center">
          <img src={clogo} alt="Logo" style={{"marginTop": "3%", "transform": "rotate(350deg)", "height": 70, maxWidth: "100%"}} />
      </div> */}
        <div className="d-flex justify-content-center mt-4 mb-3 shadow p-3 mb-5 bg-white rounded">
        <MDBContainer className="text-dark bg-white rounded" style={{ "width": "370px", "marginTop": "0%"}}>
          <div className="pt-3 pb-3">
            <h1 className="text-dark">Login</h1>
          </div>
          <form id="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="mb-2">Email address</label>
              <MDBInput onChange={e=>setInputEmail1(e.target.value)} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
            </div>
            {error && InputEmail1.length <= 0 ?
              <label className="text-danger fw-bold">Email can't be Empty</label> : ""}
            <div className="form-group mt-2">
              <label className="mb-2">Password</label>
              <MDBInput onChange={e => setInputPassword1(e.target.value)} type="password" className="form-control" id="InputPassword1" placeholder="Password" />
            </div>
            {error && InputPassword1.length <= 0 ?
              <label className="text-danger fw-bold">Password can't be Empty</label> : ""}
            <div className="form-group mt-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 pb-3">
              <button type="submit" className="btn btn-primary mt-3">Login</button>
            </div>
            <p className="text-center h6">Don't have an Account? Register
              <NavLink to="/register" id="registerlink" style={{ "background": "none", "border": "none", "color": "blue", "margin": "4px" }}>here</NavLink>
            </p>
            <p className="text-center pb-3 h6">Forgot Password?
              <NavLink to="/forgotpassword" id="registerlink" style={{ "background": "none", "border": "none", "color": "blue", "margin": "4px" }}>Click here</NavLink>
            </p>
          </form>
        </MDBContainer>
      </div>
      </header>
      <Footer/>
    </div>
  );
}

export default Login;
