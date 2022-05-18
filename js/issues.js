let githubprojects = [
  'schmelto/100-days-of-code',
  'schmelto/NewsApp',
  'schmelto/Portfolio',
  'schmelto/ImpactHackathon',
  'schmelto/schmelto',
  'schmelto/abap',
];

githubprojects.forEach((project) => {
  getprojectissues(project);
});

var githubissues = document.getElementById('githubissues');

function getprojectissues(project) {
  fetch(`https://api.github.com/repos/${project}/issues`)
    .then((response) => {
      return response.json();
    })
    .then((issues) => {
      issues.forEach((issue) => {
        if (!issue.pull_request) {
          githubissues.innerHTML += createIssueCard(issue);
        }
      });
    });
}

function createIssueCard(issue) {
  let labelstring = addLabels(issue.labels);
  let repo = issue.repository_url.replace(`https://api.github.com/repos/`, '');
  let issueCard = `
  <div class="flex-card">
    <a href="${issue.html_url}" target="_blank" rel="noopener">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"><img class="rounded-circle" alt="${issue.user.login}" src="${issue.user.avatar_url}"
          data-holder-rendered="true" style="height: 30px; margin-right: 5px">${issue.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${repo}</h6>
          <p class="card-text">${labelstring}</p>
        </div>
      </div>
    </a>
  </div>`;

  return issueCard;
}

function addLabels(labels) {
  let labelstring = '';
  labels.forEach((label) => {
    labelstring += `<span class="badge" style="background-color: #${
      label.color
    }; color: ${invertColor(label.color, true)}; margin-right: 5px">${
      label.name
    }</span>`;
  });
  return labelstring;
}

function invertColor(hex, bw) {
  hex = `#` + hex;
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
