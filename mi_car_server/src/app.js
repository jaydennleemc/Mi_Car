const server = require("http").createServer();
const io = require("socket.io")(server);

const socketMobile = require("./socket.mobile");
const socketCar = require("./socket.car");

io.on("connection", (socket) => {
  console.log("Client connected...");
  socket.on("authenticate", (data) => {
    console.log("received authenticate command: " + JSON.stringify(data));
    if (data.type == "mobile") {
      // this is mobile app
      let mobile = new socketMobile(socket);
    }

    if (data.type == "car") {
      // this is car
      let car = new socketCar(socket);
    }
  });
});

module.exports = server;
