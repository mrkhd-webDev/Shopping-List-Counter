import React from "react";
import PropTypes from "prop-types";
import Styles from "../Container/Container.module.css";

export default function Container({ children }) {
  return <section className={Styles.container}>{children}</section>;
}

Container.propTypes = {
  children: PropTypes.node,
};
