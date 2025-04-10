function getVersionOfPortfolio() {
  fetch('https://api.github.com/repos/schmelto/Portfolio/releases/latest')
    .then((response) => response.json())
    .then((release) => {
      const versionElement = document.getElementById('version');
      if (versionElement) {
        versionElement.innerHTML = `- <a href="${release.html_url}" target="_blank" rel="noopener">${release.tag_name}</a>`;
      }
    })
    .catch((error) => console.error('Error fetching version:', error));
}

getVersionOfPortfolio();
