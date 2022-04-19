const server = require("http").createServer();
const io = require("socket.io")(server);

const socketMobile = require("./socket.mobile");
const socketCar = require("./socket.car");

io.on("connection", (socket) => {
  console.log("Client connected...");
  socket.on("authenticate", (data) => {
    if (data == "mobile") {
      // this is mobile app
      let mobile = new socketMobile(socket);
    }

    if (data == "car") {
      // this is car
      let car = new socketCar(socket);
    }
  });
});

module.exports = server;
