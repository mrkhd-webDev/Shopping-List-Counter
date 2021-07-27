import React from "react";
import shoppingIcon from "../../assets/shopping-icon.svg";
import Styles from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
      <img className={Styles.navIcon} src={shoppingIcon} alt="Shopping Icon" />
      <h1 className={Styles.navTitle}>Shopping List</h1>
    </nav>
  );
}
