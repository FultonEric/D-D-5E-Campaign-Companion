const FLUX_HOST = "ai-text-to-image-generator-flux-free-api.p.rapidapi.com";
const FLUX_URL = `https://${FLUX_HOST}/image_generate`;

export async function generateFluxImage(prompt) {
  const res = await fetch(FLUX_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": FLUX_HOST,
    },
    body: JSON.stringify({ prompt }),  
    // or if the API expects a different body shape, adapt to that
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Flux API error: ${res.status} ${text}`);
  }

  const j = await res.json();
  // Adjust this according to the actual API response
  // Suppose the response is { result_url: "...", ... }
  return j.result_url || j.imageUrl || j.output;  
}
