import React, { FC } from 'react';
// import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import clogo from "../ChezelleLogo.png";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
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
          <NavLink className="nav-link active" aria-current="page" to="/login" style={{ "color": "black" }}><i className="bi bi-person text-dark" style={{ fontSize: 20 }} /> Profile</NavLink>
          <NavLink className="nav-link active" to="/login" style={{ "color": "black" }}><i className="bi bi-heart text-dark" style={{ fontSize: 20 }} /> Liked</NavLink>
          <NavLink className="nav-link active" to="/login" aria-disabled="true" style={{ "color": "black" }}><i className="bi bi-cart text-dark" style={{ fontSize: 20 }} /> Cart</NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
