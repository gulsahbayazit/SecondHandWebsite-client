import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import logo from "../images/logo.png";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setString, string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const location = useLocation();
  const isOnProductsPage = location.pathname === "/products";

  return (
    <nav className="navbar px-5 ">
      <div className="navbar__left">
        <a href="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </a>
        <button className="navbar__toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <a href="/about" className="navbar__link">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a href="/products" className="navbar__link">
              Products
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <ul className="navbar__menu">
          <li className="navbar__item">
            {" "}
            {isOnProductsPage && (
              <Search setString={setString} string={string} />
            )}
          </li>
          {isLoggedIn ? (
            <>
              <li className="navbar__item">
                <a href="/profile" className="navbar__link">
                  My Account
                </a>
              </li>
              <li className="navbar__item">
                <a onClick={logOutUser} className="navbar__link">
                  Logout
                </a>
              </li>
              <span>{user && user.name}</span>
            </>
          ) : (
            <>
              <li className="navbar__item">
                <a href="/signup" className="navbar__link">
                  Signup
                </a>
              </li>
              <li className="navbar__item">
                <a href="/login" className="navbar__link">
                  Login
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
