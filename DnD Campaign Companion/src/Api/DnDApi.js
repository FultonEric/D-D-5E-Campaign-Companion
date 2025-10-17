// src/Api/DnDApi.js (example)
const BASE = "https://www.dnd5eapi.co/api";

export async function searchIndex(collection, q = "") {
  const url = `${BASE}/${collection}`;
  const res = await fetch(url);
  const data = await res.json();
  const list = data.results || [];
  if (!q) return list;
  const low = q.toLowerCase();
  return list.filter((x) => (x.name || x.index || "").toLowerCase().includes(low));
}

export async function getEntity(resourceOrUrl) {
  // Allow passing whole result object, index, or absolute url
  if (typeof resourceOrUrl === "string" && resourceOrUrl.startsWith("http")) {
    const res = await fetch(resourceOrUrl);
    return res.json();
  }
  const path =
    typeof resourceOrUrl === "string"
      ? resourceOrUrl
      : resourceOrUrl.url || `/${resourceOrUrl.index}`;
  const full = path.startsWith("http") ? path : `https://www.dnd5eapi.co${path}`;
  const res = await fetch(full);
  return res.json();
}
