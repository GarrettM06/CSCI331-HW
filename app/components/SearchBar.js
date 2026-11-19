export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search products by title..."
        aria-label="Search products by title"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </form>
  );
}
