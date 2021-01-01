import React from "react";
import styles from "../styles/Result.module.css";

const Result = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Results.Total</h2>
      <div className={styles.resultFlex}>
        <div>1222</div>
        <div>2322</div>
        <div>1222</div>
      </div>
      <h3 className={styles.result}>results.label</h3>
    </div>
  );
};

export default Result;
