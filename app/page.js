import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>CSCI 331 NextJS Homework</h1>
      <p>Three pages, each built from React components:</p>
      <ul>
        <li><Link href="/count">Count</Link>: two counters that step by different amounts</li>
        <li><Link href="/githublink">GitHub Link</Link>: my final project idea and the code repo</li>
        <li><Link href="/store">Store</Link>: search products from the Fake Store API</li>
      </ul>
    </section>
  );
}
