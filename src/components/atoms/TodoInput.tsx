import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  flex-grow: 1;
`;

// 여기서 AddTodoForm으로 input value 전달
const TodoInput = () => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputChangeHandler = (e: any) => {
    setEnteredTodo(e.target.value);
  };

  return (
    <Input
      type="text"
      id="addTodo"
      onChange={todoInputChangeHandler}
      value={enteredTodo}
    />
  );
};

export default TodoInput;
