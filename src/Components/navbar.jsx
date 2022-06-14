import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-white">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          MoviesApp
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;