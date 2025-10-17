export default function CampaignCard({ entity, onRemove }) {
  return (
    <div style={{
      border: "1px solid #ccc", padding:10, borderRadius:6, marginBottom:8, display:'flex', justifyContent:'space-between'
    }}>
      <div>
        <strong>{entity.name}</strong>
        {entity.hit_points !== undefined && <div>HP: {entity.hit_points}</div>}
      </div>
      <div>
        <button onClick={()=>onRemove(entity.index ?? entity.name)}>Remove</button>
      </div>
    </div>
  );
}