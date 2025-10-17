import { useMemo } from "react";

const playlists = {
  tavern: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVqJMsgEN0F4",
  battle: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
  travel: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXi7h4mmmkzD" // example URIs
};

export default function MusicPlayer({ mode, setMode }) {
  const src = useMemo(() => playlists[mode] || playlists.tavern, [mode]);
  return (
    <div style={{ padding: '0 1rem' }}>
      <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:8 }}>
        <button onClick={()=>setMode("tavern")}>Tavern</button>
        <button onClick={()=>setMode("travel")}>Travel</button>
        <button onClick={()=>setMode("battle")}>Battle</button>
      </div>
      <iframe
        src={src}
        title="music"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      />
    </div>
  );
}