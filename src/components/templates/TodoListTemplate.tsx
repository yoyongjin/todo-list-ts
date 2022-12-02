import React from "react";
import styled from "styled-components";
import DelBtn from "../atoms/DelBtn";
import AddTodoForm from "../molecules/AddTodoForm";
import TodoLists from "../organisms/TodoLists";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  width: 30%;
  max-height: 30vh;
  background-color: #fff;
  padding: 0.75rem 1rem;
`;

const TodoListTemplate = () => {
  return (
    <Container>
      <AddTodoForm />

      <TodoLists />
      <DelBtn />
    </Container>
  );
};

export default TodoListTemplate;
