import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/animals">
                {" "}
                Animals{" "}
              </Link>
            </li>
          ) : null}
          <li>
            <Link className="nav-link" to="/locations">
              {" "}
              Locations{" "}
            </Link>
          </li>
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/employees">
                {" "}
                Employees{" "}
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/owners">
                {" "}
                Owners{" "}
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <span className="nav-link" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </span>
            </li>
          ) : (
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);