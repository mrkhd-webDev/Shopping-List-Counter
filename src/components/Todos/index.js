import React from "react";
import PropTypes from "prop-types";
import Styles from "../Todos/Todos.module.css";
import minusIcon from "../../assets/minus-icon.svg";
import plusIcon from "../../assets/plus-icon.svg";
import classnames from "classnames";

export default function Todos({ todos, onSubtraction, onAddition }) {
  return (
    <div className={Styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div
            key={index}
            // className={`${Styles.todo} ${
            //   !(arr.length === index + 1) && {Styles.todoDivider}
            // }`}
            className={classnames(Styles.todo, {
              [Styles.todoDivider]: !(arr.length === index + 1),
            })}
          >
            {todo.title}
            <div className={Styles.todoIconWrapper}>
              <button
                onClick={() => onSubtraction(index)}
                className={Styles.todoActionButton}
              >
                <img src={minusIcon} alt="Minus Icon" />
              </button>
              <div className={Styles.todoCount}>{todo.count}</div>
              <button
                onClick={() => onAddition(index)}
                className={Styles.todoActionButton}
              >
                <img src={plusIcon} alt="Plus Icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubtraction: PropTypes.func,
  onAddition: PropTypes.func,
};
