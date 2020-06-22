import React from "react";
import "./style.css";




function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white bg-primary">
      <a className="navbar-brand text-white" href="/">
        Clicky Game
      </a>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a
              href="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            ></a>
          </li> */}
          <h2 className="text-center">{props.navMessage}</h2>
         
        </ul>
        <span>
            <h2 className="d-flex justify-content-end"  id="score">
              {props.scoreMessage}
            </h2>
          </span>
      </div>
    </nav>
  );
}

export default Navbar;
