//Initialize
var express = require('express');
// var app = require('express')();
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs');
const { json } = require('express');

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('connection', (socket) => {
  socket.on('box move', function(data){
    console.log('It moved')
    io.emit('box move', data);;
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});





// JSON TESTING
// fs.readFile('/Users/apple/Desktop/Udemy:Blender:Testing/Muuri_Test/With Socket/users.json', 'utf-8', function(err, data) {
//   if (err) throw err

//   var arrayOfObjects = JSON.parse(data)
//   arrayOfObjects.users.push({
//     name: "Mikhail",
//     age: 24
//   });

//   console.log(arrayOfObjects);

//   fs.writeFile('/Users/apple/Desktop/Udemy:Blender:Testing/Muuri_Test/With Socket/users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
//     if (err) throw err
//     console.log('Done!')
//   })
// })






  



 




