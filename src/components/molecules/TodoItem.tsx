import React from "react";
import styled from "styled-components";
import CheckBox from "../atoms/CheckBox";

const TodoContainer = styled.div`
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

const TodoItem = () => {
  return (
    <TodoContainer>
      <WhatTodo>asdf</WhatTodo>
      <CheckBox />
    </TodoContainer>
  );
};

export default TodoItem;
