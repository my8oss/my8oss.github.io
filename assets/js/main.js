async function fetchJSON(path) {
  const res = await fetch(path);
  return await res.json();
}