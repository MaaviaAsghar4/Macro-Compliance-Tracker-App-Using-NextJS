import React from "react";
import styles from "../styles/Form.module.css";

const Form = ({ item, onChange }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{item}</h2>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Calories"}>
          Calories
        </label>
        <input
          className={styles.input}
          type="number"
          name={item + " Calories"}
          id={item + " Calories"}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Carbs"}>
          Carbs
        </label>
        <input
          className={styles.input}
          type="number"
          name={item + " Carbs"}
          id={item + " Carbs"}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Fat"}>
          Fat
        </label>
        <input
          className={styles.input}
          type="number"
          name={item + " Fat"}
          id={item + " Fat"}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Protein"}>
          Protein
        </label>
        <input
          className={styles.input}
          type="number"
          name={item + " Protein"}
          id={item + " Protein"}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default Form;
