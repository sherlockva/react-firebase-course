import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">Devtamin</div>
      <ul className="navbar-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
