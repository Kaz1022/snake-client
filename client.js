// handling a TCP connection, created this file for its own module

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    hotst: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // Sending up our Name message, it shows on the screen
  conn.on('connect', () => {
    conn.write("Name: KBN");
  //  // Send the string "Move: up" as date to the server, via conn object
  // Below will keep going up once it's connected
  //   setInterval(()=>{
  //     conn.write("Move: up");
  //   }, 50);

  });
  return conn;

}


// Exporting connect function using ES6 shorthand syntax
module.exports = {connect};
