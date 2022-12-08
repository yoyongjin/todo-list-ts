import React, { useState } from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
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

const TodoItem = (props: any) => {
  console.log("Render TodoItem");

  const [isChecked, setIsChecked] = useState(false);

  const onTodoCheckHandler = (e: any) => {
    setIsChecked((prev) => !prev);
  };

  return (
    <TodoItemContainer key={props.todo.id}>
      <WhatTodo>{props.todo.title}</WhatTodo>

      <input
        type="checkbox"
        onChange={onTodoCheckHandler}
        checked={isChecked}
      />
    </TodoItemContainer>
  );
};

export default React.memo(TodoItem);
