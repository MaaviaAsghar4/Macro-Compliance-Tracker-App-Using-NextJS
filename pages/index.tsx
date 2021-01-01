import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Result from "../components/Result";
import dayjs from "dayjs";
import Form from "../components/Form";

export default function Home({ fetchedData }) {
  useEffect(() => {
    console.log(fetchedData);
  });
  const [results, setResults] = useState(fetchedData);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const data = { ...results };
    let name = e.currentTarget.name;
    let resultType = name.split(" ")[0].toLowerCase();
    let resultMacro = name.split(" ")[1].toLowerCase();
    data[resultMacro][resultType] = e.currentTarget.value;
    setResults(data);
  };

  const getDataForPreviousDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    const res = await fetch(
      "http://localhost:3000/api/tracker?date=" + newDate
    );
    const json = await res.json();

    setResults(json);
  };

  const getDataForNextDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.add(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    const res = await fetch(
      "http://localhost:3000/api/tracker?date=" + newDate
    );
    const json = await res.json();

    setResults(json);
  };

  const updateMacros = async () => {
    const res = await fetch("http://localhost:3000/api/tracker", {
      method: "post",
      body: JSON.stringify(results),
    });

    console.log(res);
  };

  return (
    <div>
      <Head>
        <title>Macro Compliance Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Macro Compliance Tracker</h1>
      </main>
      <div className={styles.topContainer}>
        <div>
          <span onClick={getDataForPreviousDay}>Previous Day</span>
        </div>
        <div>
          <span>{dayjs(results.date).format("MM/DD/YYYY")}</span>
        </div>
        <div>
          <span onClick={getDataForNextDay}>Next Day</span>
        </div>
      </div>
      <div className={styles.result}>
        <Result results={results.calories} />
        <Result results={results.carbs} />
        <Result results={results.fat} />
        <Result results={results.protein} />
      </div>
      <div className={styles.form}>
        <Form item={"Total"} onChange={onChange} />
        <Form item={"Target"} onChange={onChange} />
        <Form item={"Variant"} onChange={onChange} />
      </div>
      <div>
        <button className={styles.btn} onClick={updateMacros}>
          Save
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/tracker");
  const fetchedData = await res.json();
  return {
    props: {
      fetchedData,
    },
  };
}
