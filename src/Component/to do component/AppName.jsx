import React from "react";
import styles from "./Singleline.module.css";

function AppName() {
  return (
    <div className="fw-bolder">
      <h1 className={styles["Appname"]}>To-Do App</h1>
    </div>
  );
}

export default AppName;
