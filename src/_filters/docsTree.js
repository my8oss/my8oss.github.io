module.exports = function buildTree(pages, base = "/docs/") {
  const filtered = pages.filter(p => p.url.startsWith(base) && p.url !== base);

  const leaves = [];
  const dirMap = {};

  for (const page of filtered) {
    let rel = page.url.slice(base.length);
    if (rel.endsWith('/')) rel = rel.slice(0, -1);
    const parts = rel.split('/');

    if (parts.length === 1 && parts[0]) {
      leaves.push({ page, name: parts[0] });
    } else if (parts.length > 1) {
      const dirName = parts[0];
      if (!dirMap[dirName]) {
        dirMap[dirName] = { name: dirName, children: [], index: null };
      }
      if (page.url === base + dirName + '/' || page.url === base + dirName) {
        dirMap[dirName].index = page;
      } else {
        dirMap[dirName].children.push(page);
      }
    }
  }


  const realLeaves = [];
  for (const leaf of leaves) {
    if (dirMap[leaf.name]) {
      if (!dirMap[leaf.name].index) {
        dirMap[leaf.name].index = leaf.page;
      }
    } else {
      realLeaves.push(leaf.page);
    }
  }


  const result = [];

  const sortedDirs = Object.keys(dirMap).sort();
  for (const dirName of sortedDirs) {
    const dir = dirMap[dirName];
    result.push({
      type: 'directory',
      name: dirName,
      index: dir.index,
      children: buildTree(dir.children, base + dirName + '/')
    });
  }

  for (const leaf of realLeaves.sort((a, b) => a.url.localeCompare(b.url))) {
    result.push({
      type: 'leaf',
      page: leaf
    });
  }

  return result;
};