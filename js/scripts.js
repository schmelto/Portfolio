function setupTypewriter(t) {
  const HTML = t.innerHTML;

  t.innerHTML = '';

  let cursorPosition = 0;
  let tag = '';
  let writingTag = false;
  let tagOpen = false;
  const typeSpeed = 100;
  let tempTypeSpeed = 0;

  const type = function() {
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
typewriter = setupTypewriter(typewriter);
typewriter.type();

function sendMail() {
  subject = document.getElementById('mailsubject').value;
  body = document.getElementById('mailbody').value;
  window.location = `mailto:tom.schmelzer@web.de?subject=${subject}&body=${body}`;
}

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
