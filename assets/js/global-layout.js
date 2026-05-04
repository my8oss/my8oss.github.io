function getBasePath() {
  const path = window.location.pathname;
  return path.includes('/apps/') ? '..' : '.';
}

const BASE = getBasePath();

function createHeader(appName) {
  const header = document.createElement('header');


  let breadcrumbHTML = '';
  if (appName) {
    breadcrumbHTML = `
      <span class="breadcrumb">
        <a href="${BASE}/index.html">My8OSS</a>
        <span class="separator"> &gt; </span>
        <span class="current">${appName}</span>
      </span>
    `;
  } else {
    breadcrumbHTML = `<span class="breadcrumb home">My8OSS</span>`;
  }

  header.innerHTML = `
    <img src="${BASE}/assets/images/logo.webp" alt="My8OSS" class="logo" />
    ${breadcrumbHTML}
    <button id="menuBtn" class="hamburger">☰</button>
  `;

  return header;
}

export function initGlobalLayout() {
  const headerPlaceholder = document.getElementById('global-header');

  if (headerPlaceholder) {
    const appName = window.APP_NAME || null;

    const header = createHeader(appName);
    headerPlaceholder.replaceWith(header);
  }

  const footerPlaceholder = document.getElementById('global-footer');
  if (footerPlaceholder) {
    const footer = document.createElement('footer');
    footer.innerHTML = `My8OSS`;
    footerPlaceholder.replaceWith(footer);
  }
}

if (document.getElementById('global-header') || document.getElementById('global-footer')) {
  initGlobalLayout();
}