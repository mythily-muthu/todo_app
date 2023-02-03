import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; //function which returns nothing
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        className="input_box"
        placeholder="Add a todo"
        type="input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button className="searchIcon" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
