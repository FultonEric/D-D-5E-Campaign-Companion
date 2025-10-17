import { useEffect, useState } from "react";

const KEY = "dnd_notes_v1";

export default function Notes() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setText(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, text);
  }, [text]);

  return (
    <section className="page">
      <h1 className="page-title">Notes</h1>
      <textarea
        className="notes-area"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Session notes, NPCs, hooks, treasure…"
      />
    </section>
  );
}
