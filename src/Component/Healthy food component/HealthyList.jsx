import React from "react";
import Item from "./Item";

const HealthyList = (props) => {
  // If else condition
  // if (foodItem.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  return (
    <>
      <ul className="list-group">
        {props.items.map((item) => (
          <Item key={item} foodItems={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default HealthyList;
