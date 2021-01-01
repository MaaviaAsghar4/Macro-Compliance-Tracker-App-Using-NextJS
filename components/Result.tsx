import React, { useState, useEffect } from "react";
import styles from "../styles/Result.module.css";

const Result = ({ results }) => {
  let [bg, setBg] = useState("");
  useEffect(() => {
    setBackground();
  });
  const setBackground = () => {
    let min = results.target - results.variant;
    let max = results.target + results.variant;
    if (results.total >= min && results.total <= max) {
      setBg("green");
    } else if (results.total < min) {
      setBg("blue");
    } else {
      setBg("red");
    }
  };
  return (
    <div
      className={
        bg === "red" ? styles.red : bg === "blue" ? styles.blue : styles.green
      }
    >
      <h2 className={styles.heading}>{results.total}</h2>
      <div className={styles.resultFlex}>
        <div>{results.target - results.variant}</div>
        <div>{results.target}</div>
        <div>{parseInt(results.target) + parseInt(results.variant)}</div>
      </div>
      <h3 className={styles.result}>{results.label}</h3>
    </div>
  );
};

export default Result;
