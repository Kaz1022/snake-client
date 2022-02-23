const net = require("net");
// importing TCP connection module, creating a new obj
const { connect } = require("./client");
// importing the input module from input.js
const { setupInput } = require("./input.js");

console.log("Connecting ...");
// connect(); pass the object returned from connect into the setupInput function
//input module can now use the connection variable to send movement commands/messages to the server.
setupInput(connect());
