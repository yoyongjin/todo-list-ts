import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "./types";

const TodoListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 2px;
  /* background-color: #fffeb9; */
`;
const WhatTodo = styled.span`
  /* background-color: #e05353; */
`;

const TodoList = (props: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const onTodoCheckHandler = (e: any) => {
    setIsChecked((prev) => !prev);
  };
  return props.todo.map((todo: Todo) => (
    <TodoListContainer key={todo.id}>
      <WhatTodo>{todo.title}</WhatTodo>

      <input
        type="checkbox"
        onChange={onTodoCheckHandler}
        checked={isChecked}
      />
    </TodoListContainer>
  ));
};

export default TodoList;
