import ProductRow from "./ProductRow";

// Shows only the products whose title contains filterText (case-insensitive).
export default function ProductTable({ products, filterText }) {
  const query = filterText.trim().toLowerCase();
  const rows = products
    .filter((product) => product.title.toLowerCase().includes(query))
    .map((product) => <ProductRow key={product.id} product={product} />);

  if (rows.length === 0) {
    return <p>No products match &quot;{filterText}&quot;.</p>;
  }

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
