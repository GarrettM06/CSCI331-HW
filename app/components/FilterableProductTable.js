"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const API_URL = "https://fakestoreapi.com/products";

// Owns the state (products + search text) and passes it down as props.
export default function FilterableProductTable() {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [status, setStatus] = useState("loading");

  // Fetch the products once, when the component first mounts.
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      {status === "loading" && <p>Loading products...</p>}
      {status === "error" && <p>Couldn&apos;t load products from fakestoreapi.com.</p>}
      {status === "ready" && <ProductTable products={products} filterText={filterText} />}
    </div>
  );
}
