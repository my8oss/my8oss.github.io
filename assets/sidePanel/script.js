export async function renderSidePanel(appData, container) {
  const res = await fetch("/assets/sidePanel/template.html");
  const html = await res.text();
  container.innerHTML = html;

  const handleText = document.getElementById("handle-text");
  if (handleText) handleText.textContent = appData.name || "Menu";

  const title = document.getElementById("panel-title");
  if (title) title.textContent = appData.name;

  const menu = document.getElementById("panel-menu");
  menu.innerHTML = appData.menu
    .map(
      (item) => `
        <li>
          <button class="panel-btn" onclick="location.href='${item.link}'">
            ${item.label}
          </button>
        </li>`
    )
    .join("");

  const toggleBtn = document.getElementById("sheet-toggle");
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    container.classList.toggle("expanded");
  });
}