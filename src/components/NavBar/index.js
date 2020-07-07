import React from 'react'
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
const index = () => {
  return (
    <>
      <header
        className="movieHeader header-croller"
      >
        <nav
          className="navbar navbar-expand-md navbar-dark movieHeader__navbar"
              
        >
          <Link className="navbar-brand header__logo" to="/">
            <img
              src="./img/logocs3.png"
              width="50px"
              className="img-fluid"
              alt="logoMv"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse collapse-header"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item a-crolled">
                <button className="btn-login-moblie nav-link" type="submit">
                  <span>ĐĂNG NHẬP</span>
                </button>
              </li>
              <li className="nav-item a-crolled">
                <NavLink exact className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item a-crolled">
                <a className="nav-link" to="/lichchieu">
                  LỊCH CHIẾU
                </a>
              </li>
              <li className="nav-item a-crolled">
                <a className="nav-link" href="#cum-rap-cyber-movie">
                  CỤM RẠP
                </a>
              </li>
              <li className="nav-item a-crolled">
                <a className="nav-link" to="/tintuc">
                  TIN TỨC
                </a>
              </li>
              <li className="nav-item a-crolled">
                <a className="nav-link" to="/app">
                  ỨNG DỤNG
                </a>
              </li>
            </ul>

            <div className="header__login  my-2 my-lg-0">
              <button
                className="btn-login btn-crolled"
                type="submit"
              >
                <img src="./img/avatar-2.jpg" id="avatar-login" />
                <span>Đăng Nhập</span>
              </button>
              <span className="header__vach" />
              <div className="dropdown d-inline-block">
                <button
                  className=
                   "dropdown-toggle btn-diaDiem btn-crolled"
                     
                 
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <span>
                    <i className="fa fa-map-marker-alt" /> Thành Phố
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item diadiem-item" href="#">
                    Hồ Chí Minh
                  </a>
                  <a className="dropdown-item diadiem-item" href="#">
                    Hà Nội
                  </a>
                  <a className="dropdown-item diadiem-item" href="#">
                    Đà Nẵng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default index;
