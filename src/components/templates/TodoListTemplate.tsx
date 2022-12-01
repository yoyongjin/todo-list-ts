import React from "react";
import styled from "styled-components";
import DelBtn from "../atoms/DelBtn";
import AddTodoForm from "../molecules/AddTodoForm";
import CheckAll from "../molecules/CheckAll";
import TodoLists from "../organisms/TodoLists";

const Container = styled.div``;

const TodoListTemplate = () => {
  return (
    <Container>
      <AddTodoForm />
      <CheckAll />
      <TodoLists />
      <DelBtn />
    </Container>
  );
};

export default TodoListTemplate;
