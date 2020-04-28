import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



const styles = {
  navbarStyle: {
    justifyContent: "flex-end",
  },
};


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white bg-primary">
      <Link className="navbar-brand text-white" to="/">
        Clicky Game
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            ></Link>
          </li>
          <h2>Click an Image to Begin!</h2>
          <span>
            <h2 style={styles.navbarStyle} id="score">
              Score:0
            </h2>
          </span>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
