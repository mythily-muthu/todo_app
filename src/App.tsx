import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import "./App.css";
import TodoList from "./components/TodoList";

let App: React.FC = () => {
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<Todo[]>([]);

  let handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="header">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
