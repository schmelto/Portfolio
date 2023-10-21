/* eslint-disable no-unused-vars */
function setupTypewriter(t) {
  const HTML = t.innerHTML;
  t.innerHTML = '';
  let cursorPosition = 0;
  let tag = '';
  let writingTag = false;
  let tagOpen = false;
  const typeSpeed = 100;
  let tempTypeSpeed = 0;

  const type = function () {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === '<') {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = '';
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === ' ') {
        tempTypeSpeed = 0;
      } else {
        tempTypeSpeed = Math.random() * typeSpeed + 50;
      }
      t.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === '>') {
      tempTypeSpeed = Math.random() * typeSpeed + 50;
      writingTag = false;
      if (tagOpen) {
        const newSpan = document.createElement('span');
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }
  };

  return {
    type: type,
  };
}
const typer = document.getElementById('typewriter');
// eslint-disable-next-line no-undef
typewriter = setupTypewriter(typewriter);
// eslint-disable-next-line no-undef
typewriter.type();

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', () => {
  setColorSheme();
});

function setColorSheme() {
  const navbar = document.getElementById('navbar');
  const useDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (useDark.matches === true) {
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
  } else {
    navbar.classList.add('navbar-light');
    navbar.classList.remove('navbar-dark');
  }
}
setColorSheme();

// API
var githubprojectsdomelement = document.getElementById('githubprojects');
// using https://fonts.google.com/icons
let githubprojects = [
  {
    name: 'schmelto/100-days-of-code',
    icon: 'description',
  },
  {
    name: 'schmelto/Portfolio',
    icon: 'person',
  },
];

githubprojects.forEach((project) => {
  getproject(project.name, project.icon);
});

function getproject(project, icon) {
  fetch(`https://api.github.com/repos/${project}`)
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      githubprojectsdomelement.innerHTML += createprojectcard(project, icon);
    });
}

function createprojectcard(project, icon) {
  project.description = project.description.replace(/:[^}]*:/, '');
  let projectcard = `<div class="flex-card">
       <a href="${project.html_url}" target="_blank" rel="noopener">
         <div class="card">
           <div class="card-body">
             <h5 class="card-title"><span class="material-icons">
                 ${icon}
               </span> ${project.name}</h5>
             <p class="card-text">${project.description}</p>
           </div>
         </div>
       </a>
     </div>`;
  return projectcard;
}
