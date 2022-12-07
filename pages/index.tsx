import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Gang</title>
        <meta name="description" content="Hey :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{`It's a game gang website. Hi.`}</h1>

        <p className={styles.description}>lol</p>
      </main>

      <footer className={styles.footer}>Powered by weed.</footer>
    </div>
  );
}
