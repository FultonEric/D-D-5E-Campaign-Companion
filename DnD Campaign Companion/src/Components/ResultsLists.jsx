export default function ResultsList({ items, getLabel, onPick }) {
  if (!items?.length) {
    return <div className="card muted">No results.</div>;
  }
  return (
    <ul className="results-list">
      {items.map((it) => (
        <li key={getLabel(it)} className="result-item">
          <button className="result-btn" onClick={() => onPick(it)}>
            {getLabel(it)}
          </button>
        </li>
      ))}
    </ul>
  );
}
