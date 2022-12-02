import React, { useState } from "react";
import styled from "styled-components";
import AddBtn from "../atoms/AddBtn";
import TodoInput from "../atoms/TodoInput";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 0.5rem;
  /* background-color: #e3b426; */
`;

// interface FunctionProps {
//   getInputValue: (value: string) => string;
// }

const AddTodoForm = () => {
  // const getInputValue: FunctionProps = (value: string) => {
  //   console.log(value);

  //   return value;
  // };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    // ADD버튼 눌렀을때 실행되어야 할 함수 => TodoLists의 TodoItem으로 input value 보내기
    console.log("onAdd");
  };

  const getInputValue = (value: string) => {};

  return (
    <Form onSubmit={onSubmitHandler}>
      <TodoInput />
      <AddBtn />
    </Form>
  );
};

export default AddTodoForm;
