import React from "react";

const Item = (props) => {
  return (
    <>
      <li className="list-group-item">{props.foodItems}</li>
    </>
  );
};

export default Item;
