// handling a TCP connection, created this file for its own module

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    hotst: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you ded cuz you idled");
  });

  return conn;

}


// Exporting connect function using ES6 shorthand syntax
module.exports = {connect};
