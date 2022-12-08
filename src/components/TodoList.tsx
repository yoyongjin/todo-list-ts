import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./types";

const TodoList = (props: any) => {
  return (
    props.todos &&
    props.todos.map((todo: Todo) => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      );
    })
  );
};

export default TodoList;
