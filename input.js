const net = require("net");

// setup interface to handle user input from stdin(standard input)

// create function called handleUserInput and register it as the "data" callback handler for stdin
// It should exit when ctrl + c is input

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Handling CTRL + C User Input
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};