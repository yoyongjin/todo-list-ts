import React from "react";
import styled from "styled-components";
import TodoItem from "../molecules/TodoItem";

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const TodoLists = (props: any) => {
  return (
    <TodosContainer>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodosContainer>
  );
};

export default TodoLists;
