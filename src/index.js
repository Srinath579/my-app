import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Forgot from './components/ForgotPassword/ForgotPassword.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import Marquee from "react-fast-marquee";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Marquee className="fw-bold text-danger" behavior="scroll" direction="left"> CHEZELLE SALE IS HERE| Get 5% Off On purchase of 5000 and 10% On purchase of 10000 0 + Add 5% Off on prepaid orders</Marquee>
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
