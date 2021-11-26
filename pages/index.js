import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Amet culpa similique quo a recusandae. Unde eligendi minus aliquam aliquam nobis recusandae. Sunt alias similique fugit quae illo eius? Voluptate tempora ipsa similique iure saepe Quam minima amet eos.</p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  );
}
