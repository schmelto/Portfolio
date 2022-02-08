function parseMarkdown(markdownText) {
  let htmlText = markdownText
    .replace(/^### (.*$)/gim, '<h3 class="h3_markdown">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="h2_markdown">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="h1_markdown">$1</h1>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, '<br />')
    .replace(/```js/gim, '<code>') // for js code
    .replace(/```abap/gim, '<code>') // for abap code
    .replace(/```/gim, '</code>')

    // replace * with <li> only at the beginning of a line
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    // replace - with <li> only at the beginning of a line
    .replace(/^- (.*$)/gim, '<li>$1</li>');

  return htmlText.trim();
}

function parseMarkdown_full(markdownText) {
  const lines = markdownText.split('\n');
  // loop all lines
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    line = parseMarkdown(line);
    // check for single quted codeblocks
    for (let j = 0; j < line.length; j++) {
      let char = line[j];
      let counter = 0;
      if (char === '`' && counter === 0) {
        line = line.replace(char, '<code>');
        counter++;
      }
      if (char === '`') {
        line = line.replace(char, '</code>');
        counter = 0;
      }
    }
    lines[i] = line;
  }
  return lines.join('\n');
}

const fetchData = async () => {
  try {
    const res = await fetch('../blog/blogposts.json');
    let data = await res.json();
    data = data.reverse();
    data.forEach((element) => {
      fetchArticle(element);
    });
  } catch (err) {
    console.log(err);
  }
};

const fetchArticle = async (article) => {
  try {
    const res = await fetch(article);
    let data = await res.text();

    // get the title, author and date
    let author = data.split('\n')[2].replace('author: ', '');
    let title = data.split('\n')[0].replace('title: ', '');
    let date = data.split('\n')[1].replace('date: ', '');

    // get the content
    data = data.split('\n').slice(4).join('\n');
    createArticle(title, author, date, parseMarkdown_full(data));
  } catch (e) {
    console.log('something went wrong!', e);
  }
};

function createArticle(title, author, date, content) {
  let blogpost = `
  <div class="flex-card">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" >${date} - ${author}</h6>
              <details>
                <summary>read the full article</summary>
                <p id="markdown">${content}</p>
              </details>
            </div>
          </div>
      </div>
  `;
  document.getElementById('blogposts').innerHTML += blogpost;
}

window.onload = function () {
  fetchData();
};
