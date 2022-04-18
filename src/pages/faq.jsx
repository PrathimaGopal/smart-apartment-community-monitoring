import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function FAQ() {
  return (
    <div className="App">
      <div className="nav">
        <div className="title"> SAC Apartments </div>
        <br />
        <nav className="tabs">
          <Link to="/">Home</Link>{" "} 
          <Link to="/contactus">Contact Us</Link>{" "}
          <Link to="/faq">FAQ</Link> {" "}
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <div className="content">What is smart home?</div>
    </div>
  );
}
