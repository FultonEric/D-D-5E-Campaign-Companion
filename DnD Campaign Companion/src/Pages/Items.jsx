import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar.jsx";
import ResultsList from "../Components/ResultsLists.jsx";
import DetailCard from "../Components/DetailCard.jsx";
import { searchIndex, getEntity } from "../Api/DnDApi.js";

export default function Items() {
  const [results, setResults] = useState([]);
  const [detail, setDetail] = useState(null);

  async function doSearch(q) {
    const list = await searchIndex("equipment", q);
    setResults(list || []);
    setDetail(null);
  }

  async function pick(item) {
    const full = await getEntity(item.url || item.index || item);
    setDetail(full || null);
  }

  useEffect(() => { doSearch(""); }, []);

  return (
    <section className="page">
      <h1 className="page-title">Items</h1>
      <SearchBar placeholder="Search items..." onSearch={doSearch} />
      <div className="columns">
        <div className="col">
          <ResultsList items={results} getLabel={(i) => i.name || i.index} onPick={pick} />
        </div>
        <div className="col">
          {detail ? (
            <DetailCard
              title={detail.name}
              subtitle={detail.equipment_category?.name}
              onClose={() => setDetail(null)}
            >
              {detail.desc?.map((d, i) => <p key={i}>{d}</p>)}
              {"weapon_category" in detail ? (
                <p><strong>Weapon:</strong> {detail.weapon_category} • {detail.damage?.damage_dice} {detail.damage?.damage_type?.name}</p>
              ) : null}
              {"armor_category" in detail ? (
                <p><strong>Armor:</strong> {detail.armor_category} • AC {detail.armor_class?.base}</p>
              ) : null}
              {detail.cost ? <p><strong>Cost:</strong> {detail.cost.quantity} {detail.cost.unit}</p> : null}
              {detail.weight ? <p><strong>Weight:</strong> {detail.weight} lb.</p> : null}
            </DetailCard>
          ) : (
            <div className="card muted">Select an item to view details.</div>
          )}
        </div>
      </div>
    </section>
  );
}
