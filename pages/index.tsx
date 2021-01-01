import Head from "next/head";
import styles from "../styles/Home.module.css";
import Result from "../components/Result";
import Form from "../components/Form";

export default function Home() {
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
          <span>Previous Day</span>
        </div>
        <div>
          <span>Today</span>
        </div>
        <div>
          <span>Next Day</span>
        </div>
      </div>
      <div className={styles.result}>
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
      <div className={styles.form}>
        <Form />
        <Form />
        <Form />
      </div>
    </div>
  );
}
