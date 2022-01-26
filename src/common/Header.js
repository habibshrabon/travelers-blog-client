/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="navbar-area">
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <h1>
              <a className="navbar-brand" href="/">
                Travelers
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="main-navbar">
        <div className="container">
          <nav className="flex items-center justify-between main-navbar__navbar navbar-expand-md navbar-light">
            <h1>
              <a className="navbar-brand" href="/">
                Travelers
              </a>
            </h1>
            <div className="flex items-center  mean-menu">
              <ul className="flex ml-auto navbar-nav">
                <li className="menu-item  dropdown active nav-item">
                  <a title="Home" href="/home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Blogs" href="#" className="nav-link">
                    Blogs
                  </a>
                </li>
                <li className="menu-item  dropdown nav-item">
                  <a title="Pages" href="#" className="nav-link">
                    Pages
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-item nav-item">
                      <a title="About Us" href="#" className="dropdown-item">
                        About Us
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Pricing" href="#" className="dropdown-item">
                        Pricing
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a
                        title="Testimonials"
                        href="#"
                        className="dropdown-item"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="FAQ’s" href="#" className="dropdown-item">
                        FAQ’s
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a
                        title="Privacy Policy"
                        href="#"
                        className="dropdown-item"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a
                        title="Terms of Services"
                        href="#"
                        className="dropdown-item"
                      >
                        Terms of Services
                      </a>
                    </li>
                    <li className="menu-item nav-item">
                      <a title="Coming Soon" href="#" className="dropdown-item">
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item nav-item">
                  <a title="Contact Us" href="#" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="flex items-center others-options">
                <div className="option-item">
                  <a className="search-box" href="#">
                    <i>
                      <BiUserCircle />
                    </i>
                  </a>
                </div>
                <div className="option-item">
                  <a href="#" className="default-btn">
                    Login
                  </a>
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
                  <a className="search-box" href="#">
                    <i>
                      <BiUserCircle />
                    </i>
                  </a>
                </div>
                <div className="option-item">
                  <a href="#" className="default-btn">
                    Login
                  </a>
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
