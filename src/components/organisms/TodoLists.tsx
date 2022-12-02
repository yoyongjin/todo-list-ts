import React from "react";
import styled from "styled-components";
import CheckAll from "../molecules/CheckAll";
import TodoItem from "../molecules/TodoItem";

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(30vh - 4rem - 4px);
  justify-content: space-between;
  gap: 5px;
  border: 1px solid black;
  overflow-y: scroll;
  padding: 0.5rem;
  /* padding-bottom: 5px; */
  /* background-color: #98dab9; */
`;

const TodoLists = (props: any) => {
  return (
    <TodosContainer>
      <CheckAll />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodosContainer>
  );
};

export default TodoLists;
