import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  // Link to는 'a href'와는 다르게 리액트를 죽이고 새로고침하지 않음.
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
