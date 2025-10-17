import { useState } from "react";
import { searchIndex, getEntity } from "./Api/DnDApi.js";
import ResultsList from "./Components/ResultsList.jsx/index.js";

export default function SearchSection({ onAddToCampaign }) {
  const [category, setCategory] = useState("monsters");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const doSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const matches = await searchIndex(category, query);
      // fetch details for top 10 results (optional)
      const top = matches.slice(0, 10);
      const details = await Promise.all(top.map(m => getEntity(category, m.index)));
      setResults(details);
    } catch (e) {
      console.error(e);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: "1rem 2rem" }}>
      <div style={{ display:"flex", gap:8, marginBottom:8 }}>
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="monsters">Monsters</option>
          <option value="equipment">Items</option>
          <option value="spells">Spells</option>
          <option value="races">Races</option>
        </select>
        <input placeholder="Search e.g. goblin" value={query} onChange={e=>setQuery(e.target.value)} />
        <button onClick={doSearch}>Search</button>
      </div>
      {loading ? <div>Loading...</div> : <ResultsList items={results} onAdd={onAddToCampaign} />}
    </section>
  );
}
