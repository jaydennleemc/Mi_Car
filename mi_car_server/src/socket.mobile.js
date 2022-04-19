class SocketMobile {
  constructor(socket) {
    this.socket = socket;
    this.socket.on("disconnect", this.onDisconnect);
    this.socket.on("move", this.onMove);
    this.socket.on("stop", this.onStop);
    this.socket.on("recordStart", this.onRecordStart);
    this.socket.on("recordStop", this.onRecordStop);
    this.socket.on("takePhoto", this.onTakePhoto);
  }

  onDisconnect() {
    console.log("mobile disconnected");
  }

  onMove(data) {
    console.log("received move command: " + data);
    if (data == "forward") {
      // forward
      console.log("forward");
    }
    if (data == "backward") {
      // backward
      console.log("backward");
    }
    if (data == "left") {
      // left
      console.log("left");
    }
    if (data == "right") {
      // right
      console.log("right");
    }
  }

  onStart() {
    console.log("received start command");
    this.socket.emit("carStart");
  }

  onStop() {
    console.log("received stop command");
    this.socket.emit("carStop");
  }

  onRecordStart() {
    console.log("received recordStart command");
    this.socket.emit("carRecordStart");
  }

  onRecordStop() {
    console.log("received recordStop command");
    this.socket.emit("carRecordStop");
  }

  onTakePhoto() {
    console.log("received takePhoto command");
    this.socket.emit("carTakePhoto");
  }
}

module.exports = SocketMobile;
