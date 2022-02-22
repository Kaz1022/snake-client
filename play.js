const net = require("net");
// importing TCP connection module, creating a new obj
const {connect} = require("./client");
// importing the input module from input.js
const {setupInput} = require("./input.js");

console.log("Connecting ...");
connect();

setupInput();
