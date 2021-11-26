import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas/">Ninja Listing</Link>
    </nav>
  );
}
