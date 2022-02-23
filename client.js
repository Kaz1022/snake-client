// handling a TCP connection, created this file for its own module

const net = require("net");
const { IP, PORT, NAME } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // Sending up our Name message, it shows on the screen
  conn.on('connect', () => {
    conn.write("Name: " + NAME);
  });
  return conn;

};


// Exporting connect function using ES6 shorthand syntax
module.exports = { connect };
