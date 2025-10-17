import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav-root">
      <div className="nav-brand">
        <span className="brand-glyph">⚔️</span>
        <span>Campaign Companion</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/monsters" className="nav-link">Monsters</NavLink>
        <NavLink to="/spells" className="nav-link">Spells</NavLink>
        <NavLink to="/items" className="nav-link">Items</NavLink>
        <NavLink to="/notes" className="nav-link">Notes</NavLink>
        <NavLink to="/Character" className="nav-link">CharectarGeneration</NavLink>
        <NavLink to="/campaigns" className="nav-link">Campaigns</NavLink>
      </nav>
    </header>
  );
}
