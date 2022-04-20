class SocketMobile {
  constructor(socket) {
    this.socket = socket;
    this.socket.on("disconnect", this.onDisconnect);
    this.socket.on("move", this.onMove);
    this.socket.on("stop", this.onStop);
    this.socket.on("recordStart", this.onRecordStart);
    this.socket.on("recordStop", this.onRecordStop);
    this.socket.on("takePicture", this.onTakePicture);
  }

  onDisconnect() {
    console.log("mobile disconnected");
  }

  onMove(data) {
    console.log("received move command: " + data);
    this.socket.emit("car_move", data);
  }

  onStart() {
    console.log("received start command");
    this.socket.emit("car_start");
  }

  onStop() {
    console.log("received stop command");
    this.socket.emit("car_stop");
  }

  onRecordStart() {
    console.log("received recordStart command");
    this.socket.emit("car_record_start");
  }

  onRecordStop() {
    console.log("received recordStop command");
    this.socket.emit("car_record_stop");
  }

  onTakePicture() {
    console.log("received takePicture command");
    this.socket.emit("car_take_picture");
  }
}

module.exports = SocketMobile;
