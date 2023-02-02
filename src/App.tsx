import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";

let App: React.FC = () => {
  let [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span className="header">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
