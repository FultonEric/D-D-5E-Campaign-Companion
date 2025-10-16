import { useState } from "react";
import axios from "axios";

function MonsterSearch({ onAdd }) {
  const [query, setQuery] = useState("");
  const [monster, setMonster] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://www.dnd5eapi.co/api/monsters/${query.toLowerCase()}`);
      setMonster(res.data);
    } catch {
      setMonster(null);
    }
  };

  return (
    <div className="search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a monster (e.g., goblin)"
      />
      <button onClick={handleSearch}>Search</button>

      {monster && (
        <div className="card">
          <h3>{monster.name}</h3>
          <p>HP: {monster.hit_points}</p>
          <p>Armor Class: {monster.armor_class[0]?.value}</p>
          <button onClick={() => onAdd(monster)}>Add to Campaign</button>
        </div>
      )}
    </div>
  );
}

export default MonsterSearch;
