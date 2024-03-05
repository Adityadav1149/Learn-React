import React from "react";
import styles from "./Singleline.module.css";

function ShowContainer({ todoItem, todoDate }) {
  return (
    <div>
      <div className="container">
        <div className={`${styles["Singlebox"]} row`}>
          <div className="col-6">{todoItem}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className={`${styles["Todobtn"]} btn btn-danger`}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowContainer;
