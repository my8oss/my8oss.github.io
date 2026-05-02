/**
 * Fetch and parse a JSON file.
 * @param {string} path – URL path to the JSON file.
 * @returns {Promise<any>}
 */
export async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
  }
  return await res.json();
}

/**
 * Fetches ALL apps (used by index.html).
 * @returns {Promise<Array<{ name: string, description: string, slug: string }>>}
 */
export async function fetchApps() {
  const slugs = await fetchJSON("data/index.json");
  const apps = await Promise.all(
    slugs.map(async (slug) => {
      const data = await fetchJSON(`data/apps/${slug}.json`);
      return { ...data, slug };
    })
  );
  return apps;
}