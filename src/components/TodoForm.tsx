import React from "react";
import styled from "styled-components";

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
const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 0.5rem;
  /* background-color: #e3b426; */
`;
const Input = styled.input`
  flex-grow: 1;
`;
const Button = styled.button`
  width: 5rem;
  height: 1.5rem;
`;
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
const CheckAllContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 3px 0.5rem 0;
  /* background-color: #a3aea3; */
`;
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

const TodoForm = () => {
  return (
    <Container>
      <FormContainer>
        <Input
          type="text"
          id="addTodo"
          placeholder="Tell me what to do:"
        />
        <Button type="submit">ADD</Button>
      </FormContainer>

      <TodosContainer>
        <CheckAllContainer>
          <span>전체선택</span>
          <input type="checkbox" />
        </CheckAllContainer>
        <TodoContainer>
          <WhatTodo>asdf</WhatTodo>
          <input type="checkbox" />
        </TodoContainer>
      </TodosContainer>

      <Button>DEL</Button>
    </Container>
  );
};

export default TodoForm;
