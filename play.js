const net = require("net");
// importing TCP connection module, creating a new obj
const {connect} = require("./client");

console.log("Connecting ...");
connect();