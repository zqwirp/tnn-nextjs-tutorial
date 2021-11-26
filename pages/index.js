// import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Homepahe</h1>
      <p className={styles.text}>Consectetur soluta repellat eius reprehenderit consectetur Nam quidem laboriosam cumque iusto facilis! Architecto quis eaque neque molestias officia? Similique dolorum sed ex voluptas enim? Eius alias quaerat earum dolorem dolores.</p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  );
}
