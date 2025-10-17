export default function ResultCard({ entity, onAdd, detail }) {
  // entity: full detailed object or partial. detail prop optional for rendering specifics
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 8,
      marginBottom: 8,
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <div>
        <strong>{entity.name}</strong>
        <div style={{ fontSize: 13, color: "#555" }}>
          {entity.type ? entity.type : entity.index}
        </div>
        {entity.hit_points !== undefined && <div>HP: {entity.hit_points}</div>}
      </div>

      <div style={{ display:'flex', gap:8 }}>
        <button onClick={() => onAdd(entity)}>Add</button>
      </div>
    </div>
  );
}