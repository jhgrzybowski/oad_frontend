import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../logo.svg";
import LoginButton from "./LoginButton";
import MeButton from "./MeButton";

const Navbar = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div className="navbar">
      <Link to="/" className="navbar-button logo">
        <img src={logo} />
      </Link>
      <Link to="/users" className="navbar-button">
        ALL USERS
      </Link>
      <Link to="/matches" className="navbar-button">
      MY MATCHES
      </Link>
      {keycloak.authenticated && <MeButton />}
      {!keycloak.authenticated && <LoginButton />}
    </div>
  );
};

export default Navbar;
