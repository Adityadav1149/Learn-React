import React from "react";
import styles from "./Calbutton.module.css";

const CalcButton = () => {
  let btnitem = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div className={styles.borderbtn}>
        {btnitem.map((item) => (
          <button className={styles.btncls}>{item}</button>
        ))}
      </div>
    </>
  );
};

export default CalcButton;
