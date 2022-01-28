/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="navbar-area">
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <h1>
              <Link className="navbar-brand" to="/">
                Travelers Blogs
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="main-navbar">
        <div className="container">
          <nav className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              <Link className="navbar-brand" to="/">
                Travelers Blogs
              </Link>
            </h1>
            <div className="flex items-center  mean-menu">
              <ul className="flex ml-auto navbar-nav">
                <li className="menu-item  dropdown active nav-item">
                  <Link title="Home" to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <Link title="Dentist" to="write" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <Link title="Services" to="#" className="nav-link">
                    Pages
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <Link
                        title="About Us"
                        to="allService"
                        className="dropdown-item"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <Link
                        title="Single Service"
                        to="#"
                        className="dropdown-item"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <Link
                        title="Single Service"
                        to="#"
                        className="dropdown-item"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <Link
                        title="Single Service"
                        to="#"
                        className="dropdown-item"
                      >
                        Privacy & Policy
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <Link
                        title="Single Service"
                        to="#"
                        className="dropdown-item"
                      >
                        Terms & Services
                      </Link>
                    </li>
                    <li className="menu-item menu-item-object-service nav-item">
                      <Link
                        title="Single Service"
                        to="#"
                        className="dropdown-item"
                      >
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item nav-item">
                  <Link title="Dashboard" to="dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="menu-item nav-item">
                  <Link title="Contact Us" to="#" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="flex items-center others-options">
                <div className="option-item">
                  <Link className="search-box inline-block" to="#">
                    <i>
                      <BiUserCircle />
                    </i>
                  </Link>
                  <span className="pl-2 font-bold text-orange-500">
                    {user.displayName}
                  </span>
                </div>
                <div className="option-item">
                  {user.email ? (
                    <Link
                      onClick={logout}
                      className="default-btn text-red-500 font-bold"
                    >
                      Log Out
                    </Link>
                  ) : (
                    <Link to="login" className="default-btn">
                      Register
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="others-option-for-responsive">
        <div className="container">
          <div className="dot-menu">
            <div className="inner">
              <div className="circle circle-one"></div>
              <div className="circle circle-two"></div>
              <div className="circle circle-three"></div>
            </div>
          </div>
          <div className="container">
            <div className="option-inner">
              <div className="flex items-center others-options">
                <div className="option-item">
                  <Link className="search-box" to="#">
                    <i>
                      <BiUserCircle />
                    </i>
                  </Link>
                </div>
                <div className="option-item">
                  <Link to="#" className="default-btn">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
