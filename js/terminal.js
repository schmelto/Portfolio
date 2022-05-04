// list of commands
var commands = {
  about: 'Information about Tom',
  clear: 'Clears the terminal',
  contact: 'Displays a list of contact information',
  help: 'Displays a list of commands',
  projects: 'Displays a list of projects',
};

// get the input from the user
function getInput() {
  var input = document.getElementById('console_input').value;
  document.getElementById('console_input').value = '';
  return input.toLowerCase();
}

// append the input to the terminal
function appendToTerminal(input) {
  document.getElementById('terminal').innerHTML +=
    `<span class="terminal_user">> guest@portfolio: </span>` + input + '<br>';
  document.getElementById('consolebody').scrollTop =
    document.getElementById('consolebody').scrollHeight;
}

// on windows load append the welcome message
window.onload = function () {
  appendToTerminal('Welcome to my portfolio!');
  appendToTerminal("Type 'help' for a list of commands");
};

// get input when user hits enter
document
  .getElementById('console_input')
  .addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      var input = getInput();
      // if input is a command
      if (isCommand(input)) {
        if (input === 'help') input += help();
        if (input === 'clear') {
          clear();
          return;
        }
        if (input === 'about') input += about();
        if (input === 'projects') input += projects();
        if (input === 'contact') input += contact();
      } else if (input === '') input += '';
      else
        input +=
          `<br> '` +
          input +
          "' is not recognized as an internal or external command, operable program or batch file.";
      appendToTerminal(input);
    }
  });

// check if the input is a command
function isCommand(input) {
  for (var command in commands) if (input === command) return true;
  return false;
}

// if command is help then print the list of commands
function help() {
  var output = '<table>';

  for (var command in commands) {
    output += '<tr>';
    output += '<td>' + command + '</td>';
    output += '<td style="padding-left: 10px">' + commands[command] + '</td>';
    output += '</tr>';
  }

  output += '</table>';

  return output;
}

function projects() {
  var output = '<br>';
  output +=
    'see projects on <a href="https://github.com/schmelto?tab=repositories" target="_blank" rel="noopener">GitHub</a>.';
  return output;
}

function contact() {
  var output = '<br>';
  output += 'Contact:<br>';
  output += 'Email: tom.schmelzer@web.de';
  return output;
}

function clear() {
  document.getElementById('terminal').innerHTML = '';
}

function about() {
  var output = '<br>';
  output += 'Name: Tom<br>';
  output += 'Occupation: IT Application Consultant';
  return output;
}
