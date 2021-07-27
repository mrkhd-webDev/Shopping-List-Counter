import React from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Tahu Sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Harap isi list dulu");
      return;
    }

    const addedTodos = [...todos, { title: value, count: 1 }];
    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubtractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  };

  const getTotalCount = () => {
    const totalCount = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCount;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <Info
          todosLength={todos.length}
          totalCount={getTotalCount()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubtraction={(index) => handleSubtractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}
