import axios from "axios";

const BASE = "https://www.dnd5eapi.co/api"; // well-known 5e API base

export async function searchIndex(category, query) {
  // category: "monsters" | "equipment" | "spells" | "races" etc.
  // query: partial name (we'll do simple filtering client-side)
  const url = `${BASE}/${category}`;
  const res = await axios.get(url);
  const matches = res.data.results.filter(r => r.name.toLowerCase().includes(query.toLowerCase()));
  return matches; // each match has { index, name, url } where url is /api/.../{index}
}

export async function getEntity(category, index) {
  const url = `${BASE}/${category}/${index}`;
  const res = await axios.get(url);
  return res.data;
}