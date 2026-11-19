import Counter from "../components/Counter";

export const metadata = { title: "Count" };

export default function CountPage() {
  return (
    <section>
      <h1>Count</h1>
      <p>The same Counter component used twice, with different props.</p>
      <div className="counters">
        <Counter label="Counts by 1" incrementBy={1} />
        <Counter label="Counts by 5" incrementBy={5} />
      </div>
    </section>
  );
}
