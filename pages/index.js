// import Head from "next/head"
// import styles from "../styles/Home.module.css"
import Link from "next/link";
import Navbar from "../comps/Navbar"
import Footer from "../comps/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Homepahe</h1>
      <Link href="/ninjas/">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </>
  );
}
