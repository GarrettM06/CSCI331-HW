import Counter from "../components/Counter";

export const metadata = { title: "Count" };

export default function CountPage() {
  return (
    <section>
      <h1>Count</h1>
      <p>The same Counter component used twice, with different props.</p>
      <div className="counters">
        <Counter label="Counts by 1" incrementBy={1} maxCount={10} />
        <Counter label="Counts by 2" incrementBy={2} maxCount={10} />
      </div>
    </section>
  );
}
