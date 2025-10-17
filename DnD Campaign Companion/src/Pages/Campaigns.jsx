import { useEffect, useState } from "react";

const KEY = "dnd_campaigns_v1";

export default function Campaigns() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(list));
  }, [list]);

  function addCampaign(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setList((prev) => [...prev, { id: crypto.randomUUID(), name }]);
    setName("");
  }

  function remove(id) {
    setList((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="page">
      <h1 className="page-title">Campaigns</h1>
      <form className="searchbar" onSubmit={addCampaign}>
        <input
          className="search-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New campaign name…"
        />
        <button className="btn-ghost" type="submit">Add</button>
      </form>

      <ul className="campaign-list">
        {list.map((c) => (
          <li key={c.id} className="campaign-item">
            <span>{c.name}</span>
            <button className="btn-ghost" onClick={() => remove(c.id)}>Delete</button>
          </li>
        ))}
        {!list.length && <li className="muted">No campaigns yet.</li>}
      </ul>
    </section>
  );
}
