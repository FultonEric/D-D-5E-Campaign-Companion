import { useState } from "react";
import { generateFluxImage } from "../Api/FluxImageApi.js";

export default function CharacterGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e) {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");
    setImgUrl("");
    try {
      const url = await generateFluxImage(prompt);
      setImgUrl(url);
    } catch (err) {
      console.error(err);
      setError("Failed to generate image with Flux API.");
    }
    setLoading(false);
  }

  return (
    <div className="card image-gen">
      <h2 className="page-title">Character Portrait Generator</h2>
      <form className="searchbar" onSubmit={handleGenerate}>
        <input
          type="text"
          className="search-input"
          placeholder="Describe your hero (e.g. 'tiefling wizard in silver robes')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="btn-ghost" type="submit" disabled={loading}>
          {loading ? "Summoning…" : "Generate"}
        </button>
      </form>
      {error && <p className="muted">{error}</p>}
      {imgUrl && (
        <div className="generated-image">
          <img
            src={imgUrl}
            alt={prompt}
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      )}
    </div>
  );
}

