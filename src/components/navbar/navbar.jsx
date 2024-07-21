import React from "react";
import "./navbar.css";
import myImg from "../../assets/cart.png";

const Navbar = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        Foodie
      </a>
      <nav className="navbar">
        <a href="#" className="nav-menu">
          Home
        </a>
        <a href="#" className="nav-menu">
          About
        </a>
        <a href="#" className="nav-menu">
          Testimonials
        </a>
        <a href="#" className="nav-menu">
          Contact
        </a>
        <span className="nav-menu">
          <img src={myImg} alt="delivery" className="cart"/>
        </span>
        <button>Booking Now</button>
      </nav>
      
    </div>
  );
};

export default Navbar;
