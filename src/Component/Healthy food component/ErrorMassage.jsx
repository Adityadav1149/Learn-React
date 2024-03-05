import React from "react";

const ErrorMassage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am hungry.</h3>}</>;
};

export default ErrorMassage;
