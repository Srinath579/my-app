import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Forgot from './components/ForgotPassword/ForgotPassword.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import clogo from "./ChezelleLogo.png";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

// import Footer from './components/Footer/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Marquee className="fw-bold text-danger" behavior="scroll" direction="left"> CHEZELLE SALE IS HERE| Get 5% Off On purchase of 5000 and 10% On purchase of 10000 0 + Add 5% Off on prepaid orders</Marquee>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to=""><img src={clogo} alt="Logo" style={{ height: 45, "marginLeft": "20px" }} />.</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <NavLink className="nav-link active" aria-current="page" to="/login" style={{"color":"black"}}><i className="bi bi-person text-dark" style={{ fontSize: 20 }} /> Profile</NavLink>
            <NavLink className="nav-link" href="#" style={{ "color": "black" }}><i className="bi bi-heart text-dark" style={{ fontSize: 20 }} /> Liked</NavLink>
            <NavLink className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" style={{ "color": "black" }}><i className="bi bi-cart text-dark" style={{ fontSize: 20 }} /> Cart</NavLink>
          </div>
        </div>
      </div>
    </nav>
    <Routes>
      <Route exact path="" element={<App />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgotpassword" element={<Forgot />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass NavLink function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
