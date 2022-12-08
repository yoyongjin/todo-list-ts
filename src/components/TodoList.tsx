import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { Todo } from "./types";

const DelItem = styled.button`
  border: none;
  background: none;
`;

const TodoList = (props: any) => {
  const onItemDeleteHandler = (e: any) => {
    // console.log(JSON.parse(JSON.stringify(props.todo)).id);

    props.todos.filter((todo: Todo) => todo.id === props.todos[todo.id].id);
    console.log(props.todos);
  };

  return (
    props.todos &&
    props.todos.map((todo: Todo) => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
        >
          <DelItem onClick={onItemDeleteHandler}>X</DelItem>
        </TodoItem>
      );
    })
  );
};

export default TodoList;
