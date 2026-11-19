import FilterableProductTable from "../components/FilterableProductTable";

export const metadata = { title: "Store" };

export default function StorePage() {
  return (
    <section>
      <h1>Store</h1>
      <p>Type in the search bar to show only products whose title contains that text.</p>
      <FilterableProductTable />
    </section>
  );
}
