import ResultCard from "./ResultCard";

export default function ResultsList({ items, onAdd }) {
  if (!items || items.length === 0) return <div>No results</div>;
  return (
    <div>
      {items.map(it => (
        <ResultCard key={it.index ?? it.name} entity={it} onAdd={onAdd} />
      ))}
    </div>
  );
}