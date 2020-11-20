import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <>
      <h1>TO-DO-LIST</h1>
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
