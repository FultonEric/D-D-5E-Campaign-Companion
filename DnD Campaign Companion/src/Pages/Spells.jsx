import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar.jsx";
import ResultsList from "../Components/ResultsLists.jsx";
import DetailCard from "../Components/DetailCard.jsx";
import { searchIndex, getEntity } from "../Api/DnDApi.js";

export default function Spells() {
  const [results, setResults] = useState([]);
  const [detail, setDetail] = useState(null);

  async function doSearch(q) {
    const list = await searchIndex("spells", q);
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
      <h1 className="page-title">Spells</h1>
      <SearchBar placeholder="Search spells..." onSearch={doSearch} />
      <div className="columns">
        <div className="col">
          <ResultsList items={results} getLabel={(s) => s.name || s.index} onPick={pick} />
        </div>
        <div className="col">
          {detail ? (
            <DetailCard
              title={detail.name}
              subtitle={`Level ${detail.level} • ${detail.school?.name || ""}`}
              onClose={() => setDetail(null)}
            >
              <p><strong>Casting Time:</strong> {detail.casting_time}</p>
              <p><strong>Range:</strong> {detail.range}</p>
              <p><strong>Components:</strong> {detail.components?.join(", ")} {detail.material ? `(${detail.material})` : ""}</p>
              <p><strong>Duration:</strong> {detail.duration}</p>
              <div className="ability">
                {detail.desc?.map((d, i) => <p key={i}>{d}</p>)}
              </div>
              {detail.higher_level?.length ? (
                <>
                  <h3>At Higher Levels</h3>
                  {detail.higher_level.map((d, i) => <p key={i}>{d}</p>)}
                </>
              ) : null}
            </DetailCard>
          ) : (
            <div className="card muted">Select a spell to view details.</div>
          )}
        </div>
      </div>
    </section>
  );
}
