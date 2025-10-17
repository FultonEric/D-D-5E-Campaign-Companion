import { useMemo } from "react";

const playlists = {
  tavern: "https://soundcloud.com/dungeons-and-dragons/sets/dungeons-and-dragons-battle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", // fantasy tavern ambience
  battle: "https://www.youtube.com/watch?v=t3B802PIuB0&list=RDt3B802PIuB0&start_radio=1", // combat music
  travel: "https://www.youtube.com/watch?v=RQJiDxIiWAc&list=RDRQJiDxIiWAc&start_radio=1"  // travel soundtrack
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
  height="120"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
    </div>
  );
}
