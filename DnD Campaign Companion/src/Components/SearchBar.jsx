import { useState } from "react";

export default function SearchBar({ placeholder = "Search...", onSearch }) {
  const [q, setQ] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch(q.trim());
  }

  return (
    <form className="searchbar" onSubmit={submit}>
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
      />
      <button className="btn-ghost" type="submit">Search</button>
    </form>
  );
}
