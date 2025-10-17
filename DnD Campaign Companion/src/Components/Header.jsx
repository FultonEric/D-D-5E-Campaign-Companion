export default function Header() {
  return (
    <header style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 2rem" }}>
      <h1>DnD Campaign Companion</h1>
      <div style={{ opacity:0.8 }}>🎲 Build your world • 🎵 Play mood music</div>
    </header>
  );
}