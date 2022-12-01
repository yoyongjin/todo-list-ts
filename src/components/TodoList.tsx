import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <div>
        <input />
        <button>ADD</button>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
