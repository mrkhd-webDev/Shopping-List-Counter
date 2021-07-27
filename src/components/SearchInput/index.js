import React from "react";
import PropTypes from "prop-types";
import Styles from "../SearchInput/SearchInput.module.css";

export default function SearchInput({ onSubmit, onChange, value }) {
  return (
    <form className={Styles.form} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        className={Styles.input}
        type="text"
        placeholder="List"
      />
      <button className={Styles.addButton} type="submit">
        Add
      </button>
    </form>
  );
}

SearchInput.propsTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
