import React from "react";
import "./style.css";



const styles = {
  navbarStyle: {
    justifyContent: "flex-end",
  },
};


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white bg-primary">
      <a className="navbar-brand text-white" href="/">
        Clicky Game
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            ></a>
          </li>
          <h2>{props.navMessage}</h2>
          <span>
            <h2 style={styles.navbarStyle} id="score">
              <h3>{props.scoreMessage} </h3>
            </h2>
          </span>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
