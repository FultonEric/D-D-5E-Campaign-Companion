export default function Home() {
  return (
    <section className="page">
      <h1 className="page-title">Welcome, Adventurer</h1>
      <p className="lead">
        Browse monsters, study spells, catalogue items, and track your campaigns.
      </p>
      <div className="grid-2">
        <div className="card">
          <h3>Monsters</h3>
          <p>Hunt through the bestiary and view stat blocks from the 5e SRD.</p>
        </div>
        <div className="card">
          <h3>Spells</h3>
          <p>Search arcane formulae by name and drill into details.</p>
        </div>
        <div className="card">
          <h3>Items</h3>
          <p>Arm yourself with mundane and magical gear.</p>
        </div>
        <div className="card">
          <h3>Campaigns & Notes</h3>
          <p>Track sessions, NPCs, hooks, and treasure.</p>
        </div>
      </div>
    </section>
  );
}
