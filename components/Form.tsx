import React from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Items</h2>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Calories"}>
          Calories
        </label>
        <input
          className={styles.input}
          type="number"
          name={"Calories"}
          id="Calories"
        />
      </div>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Carbs"}>
          Carbs
        </label>
        <input
          className={styles.input}
          type="number"
          name={"Carbs"}
          id="Carbs"
        />
      </div>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Fat"}>
          Fat
        </label>
        <input className={styles.input} type="number" name={"Fat"} id="Fat" />
      </div>
      <div className={styles.formContainer}>
        <label className={styles.label} htmlFor={"Protein"}>
          Protein
        </label>
        <input
          className={styles.input}
          type="number"
          name={"Protein"}
          id="Protein"
        />
      </div>
      <div>
        <button className={styles.btn}>Save</button>
      </div>
    </div>
  );
};

export default Form;
