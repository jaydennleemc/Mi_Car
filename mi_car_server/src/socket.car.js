class SocketCar {
  constructor(socket) {
    this.socket = socket;
    this.socket.on("disconnect", this.onDisconnect);
    this.socket.on("stream", this.onStream);
  }

  onDisconnect() {
    console.log("car disconnected");
  }

  onStream(data) {
    console.log("received stream data: " + data);
  }
}

module.exports = SocketCar;
