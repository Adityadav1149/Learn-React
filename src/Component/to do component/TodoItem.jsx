import React from "react";
import ShowContainer from "./ShowContainer";

const TodoItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ShowContainer todoItem={item.name} todoDate={item.date} />
      ))}
    </>
  );
};

export default TodoItem;
