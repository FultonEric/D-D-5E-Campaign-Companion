import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import MusicPlayer from "./Components/MusicPlayer.jsx";
import Home from "./Pages/Home.jsx";
import Monsters from "./Pages/Monsters.jsx";
import Spells from "./Pages/Spells.jsx";
import Items from "./Pages/Items.jsx";
import Notes from "./Pages/Notes.jsx";
import Characters from "./Pages/Character.jsx";
import Campaigns from "./Pages/Campaigns.jsx";
import "./App.css";

function Layout() {
  return (
    <div className="app-shell">
      <NavBar />
      <MusicPlayer />
      <main className="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/monsters" element={<Monsters />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/items" element={<Items />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/character" element={<Characters />} />
        <Route path="/campaigns" element={<Campaigns />} />
        {/* 404 */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
