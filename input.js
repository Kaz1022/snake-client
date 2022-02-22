const net = require("net");
// setup interface to handle user input from stdin(standard input)

// create function called handleUserInput and register it as the "data" callback handler for stdin
// It should exit when ctrl + c is input

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  //Add logic to console.log the movement command(WASD) to your screen if one of these keys is pressed.
  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "y") {
    connection.write("Say: Woo! Keep going!")
  }

  if (key === "n") {
    connection.write("Say: Noo! Never give up!")
  }

};


// create a variable in the outer-most scope called connection, which can default to undefined.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Handling CTRL + C User Input
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };