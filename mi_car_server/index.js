const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    console.log('Client connected...');
    client.on('disconnect', () => {
        console.log('Client disconnected...');
    });
    client.on('message', data => {
        console.log(data);
    });
});

server.listen(3000);