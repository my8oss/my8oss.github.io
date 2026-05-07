module.exports = function(license) {
  if (!license) return null;

  const map = {
    "GNU General Public License version 3": {
      url: "https://www.gnu.org/licenses/gpl-3.0.html",
      short: "GPL-3.0"
    },
    "GNU Affero General Public License version 3": {
      url: "https://www.gnu.org/licenses/agpl-3.0.html",
      short: "AGPL-3.0"
    },
    "GNU General Public License version 2": {
      url: "https://www.gnu.org/licenses/gpl-2.0.html",
      short: "GPL-2.0"
    },
    "GNU Lesser General Public License version 3": {
      url: "https://www.gnu.org/licenses/lgpl-3.0.html",
      short: "LGPL-3.0"
    }
  };

  if (map[license]) {
    return map[license];
  }

  return { url: null, short: license };
};