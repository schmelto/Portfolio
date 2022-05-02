// list of commands
var commands = {
    "help": "Displays a list of commands",
    "clear": "Clears the terminal",
    "about": "Information about Tom",
    "projects": "Displays a list of projects",
    "contact": "Displays a list of contact information"
};

// get the input from the user
function getInput() {
    var input = document.getElementById("console_input").value;
    document.getElementById("console_input").value = "";
    return input;
}

// append the input to the terminal
function appendToTerminal(input) {
    document.getElementById("terminal").innerHTML += `<span class="terminal_user">> guest@portfolio: </span>` + input + "<br>";
    // scroll to bottom
    document.getElementById("terminal").scrollTop = -1;
}

// on windows load append the welcome message
window.onload = function () {
    appendToTerminal("Welcome to my portfolio!");
    appendToTerminal("Type 'help' for a list of commands");
}

// get input when user hits enter
document.getElementById("console_input").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        var input = getInput();
        // if input is a command
        if (isCommand(input)) {
            if (input === "help") input += help();
            if (input === "clear") {
                clear();
                exit();
            }
            if (input === "time") input += time();
            if (input === "date") input += date();
            if (input === "about") input += about();
            if (input === "projects") input += projects();
            if (input === "contact") input += contact();
        } else if (input === "") input += "";
        else input += `<br> '` + input + "' is not recognized as an internal or external command, operable program or batch file.";


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
    var output = "<br>";
    for (var key in commands) {
        output += key + " - " + commands[key] + "<br>";
    }
    return output;
}

function clear() {
    document.getElementById("terminal").innerHTML = "";
}

function about() {
    var output = "<br>";
    output += "Name: Tom<br>";
    output += "Age: 24<br>";
    output += "Location: London, UK<br>";
    output += "Occupation: Software Engineer<br>";
    return output;

}

function projects() {
    var output = "<br>";
    output += "Projects:<br>";
    output += "";

    return output;
}

function contact() {
    var output = "<br>";
    output += "Contact:<br>";
    output += "Email: tom.schmelzer@web.de<br>";

    return output;
}