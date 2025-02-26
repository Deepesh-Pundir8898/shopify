import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className={styles.nav}>
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact Us</Link>
      <button className={styles.btn} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Nav;
