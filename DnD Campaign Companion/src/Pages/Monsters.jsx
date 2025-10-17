import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar.jsx";
import ResultsList from "../Components/ResultsLists.jsx";
import DetailCard from "../Components/DetailCard.jsx";
import { searchIndex, getEntity } from "../Api/DnDApi.js"; // keep your original helpers

export default function Monsters() {
  const [results, setResults] = useState([]);
  const [detail, setDetail] = useState(null);

  async function doSearch(q) {
    const list = await searchIndex("monsters", q);
    setResults(list || []);
    setDetail(null);
  }

  async function pick(item) {
    const full = await getEntity(item.url || item.index || item);
    setDetail(full || null);
  }

  useEffect(() => {
    doSearch(""); // initial load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="page">
      <h1 className="page-title">Monsters</h1>
      <SearchBar placeholder="Search monsters..." onSearch={doSearch} />
      <div className="columns">
        <div className="col">
          <ResultsList
            items={results}
            getLabel={(m) => m.name || m.index}
            onPick={pick}
          />
        </div>
        <div className="col">
          {detail ? (
            <DetailCard
              title={detail.name}
              subtitle={`${detail.size} ${detail.type}, ${detail.alignment}`}
              onClose={() => setDetail(null)}
            >
              <div className="stat-block">
                <p><strong>Armor Class:</strong> {detail.armor_class?.[0]?.value ?? detail.armor_class}</p>
                <p><strong>Hit Points:</strong> {detail.hit_points}</p>
                <p><strong>Speed:</strong> {typeof detail.speed === 'string' ? detail.speed : Object.entries(detail.speed||{}).map(([k,v])=>`${k} ${v}`).join(", ")}</p>
                <div className="ability-grid">
                  {["STR","DEX","CON","INT","WIS","CHA"].map((k,i)=>(
                    <div key={k}><span className="muted">{k}</span><div className="big-num">{[detail.strength,detail.dexterity,detail.constitution,detail.intelligence,detail.wisdom,detail.charisma][i]}</div></div>
                  ))}
                </div>
                {detail.actions?.length ? (
                  <>
                    <h3>Actions</h3>
                    {detail.actions.map((a) => (
                      <div key={a.name} className="ability">
                        <strong>{a.name}.</strong> {a.desc}
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </DetailCard>
          ) : (
            <div className="card muted">Select a monster to view details.</div>
          )}
        </div>
      </div>
    </section>
  );
}
