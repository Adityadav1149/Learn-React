import React from "react";
import styles from "./Singleline.module.css";

function InputContainer() {
  return (
    <div>
      <div className="container">
        <div className={`${styles["Singlebox"]} row`}>
          <div className="col-6">
            <input
              className={styles["Text-input"]}
              type="text"
              placeholder="Enter To Do here"
            />
          </div>
          <div className="col-4">
            <input className={styles["Text-input"]} type="date" />
          </div>
          <div className="col-2">
            <button
              type="button"
              className={`${styles["Todobtn"]} btn btn-success`}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
