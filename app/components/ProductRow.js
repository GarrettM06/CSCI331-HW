export default function ProductRow({ product }) {
  return (
    <tr>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <td><img src={product.image} alt="" width={48} height={48} /></td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td className="price">${product.price.toFixed(2)}</td>
    </tr>
  );
}
