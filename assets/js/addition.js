import { renderSidePanel } from "../sidePanel/script.js";

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return await res.json();
}

async function loadApp(appName) {
  const appData = await fetchJSON(`/data/apps/${appName}.json`);

  injectSEO(appData);

  const panelContainer = document.getElementById("side-panel");
  if (panelContainer) {
    await renderSidePanel(appData, panelContainer);
  }
}

function injectSEO(appData) {
  document.title = `${appData.name} - My8OSS`;
  let meta = document.querySelector("meta[name='description']");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = appData.description || "";
}

loadApp(window.APP_NAME);