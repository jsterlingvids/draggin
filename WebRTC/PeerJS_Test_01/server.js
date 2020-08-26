//Initialize
const express = require('express')
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname))


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('newPeerId', function(data){
    console.log(data)
  })

  socket.on('broadcastClicked', function(data){
    console.log(data);
    socket.broadcast.emit('dataForBroadCast', data)
  })

  socket.on('RequestButtonClicked', function(data){
    socket.broadcast.emit('I want to the stream', data)
  })

  socket.on('screencap taken', function(data){
    socket.broadcast.emit('sendingScreenCap', data)
  })
});




http.listen(3000, () => {
  console.log('listening on *:3000');
});

