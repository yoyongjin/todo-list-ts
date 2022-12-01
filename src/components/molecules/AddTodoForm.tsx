import React from "react";
import AddBtn from "../atoms/AddBtn";
import TodoInput from "../atoms/TodoInput";

const AddTodoForm = () => {
  return (
    <form>
      <TodoInput />
      <AddBtn />
    </form>
  );
};

export default AddTodoForm;
