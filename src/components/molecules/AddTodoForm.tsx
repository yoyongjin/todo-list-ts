import React from "react";
import styled from "styled-components";
import AddBtn from "../atoms/AddBtn";
import TodoInput from "../atoms/TodoInput";

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 0.5rem;
  /* background-color: #e3b426; */
`;

const AddTodoForm = () => {
  return (
    <FormContainer>
      <TodoInput />
      <AddBtn />
    </FormContainer>
  );
};

export default AddTodoForm;
