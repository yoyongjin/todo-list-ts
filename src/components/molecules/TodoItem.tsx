import React from "react";
import styled from "styled-components";
import CheckBox from "../atoms/CheckBox";

const TodoContainer = styled.div`
  display: flex;
`;

const TodoItem = () => {
  return (
    <TodoContainer>
      <span>asdf</span>
      <CheckBox />
    </TodoContainer>
  );
};

export default TodoItem;
