function MusicPlayer({ mode }) {
  const playlistLinks = {
    battle: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
    tavern: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVqJMsgEN0F4",
    travel: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXi7h4mmmkzD"
  };

  return (
    <div className="music-player">
      <iframe
        src={playlistLinks[mode]}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media"
        title="DnD Music"
      ></iframe>
    </div>
  );
}