// import Head from "next/head"
// import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Homepahe</h1>
      <Link href="/ninjas/">
        <a>See Ninja Listing</a>
      </Link>
    </>
  );
}
