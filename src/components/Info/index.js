import React from "react";
import PropTypes from "prop-types";
import Styles from "../Info/Info.module.css";

export default function Info({ todosLength, totalCount, onDelete }) {
  return (
    <div className={Styles.info}>
      <div className={Styles.infoTotal}>
        <p>{`Total List: ${todosLength}`}</p>
      </div>
      <div className={Styles.infoTotal}>
        <p>{`Total Count: ${totalCount}`}</p>
      </div>
      <button onClick={onDelete} className={Styles.delete}>
        Delete all list
      </button>
    </div>
  );
}

Info.propTypes = {
  todosLength: PropTypes.number,
  totalCount: PropTypes.func,
  onDelete: PropTypes.func,
};
