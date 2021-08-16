import React from "react";
import Todo from "./Todo";
export default function todos(props) {
return (
<div className="container my-3">
      <h3 className=" my-3">Todos List</h3>
      {props.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
