import CampaignCard from "./CampaignCard";

export default function CampaignSection({ campaign, onRemove }) {
  return (
    <section style={{ padding: '1rem 2rem', borderTop:'1px solid #eee' }}>
      <h2>Your Campaign</h2>
      {campaign.length === 0 ? <div>No saved entities yet</div> : campaign.map(e => (
        <CampaignCard key={e.index ?? e.name} entity={e} onRemove={onRemove} />
      ))}
    </section>
  );
}