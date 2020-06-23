//Initialize
var express = require('express');
// var app = require('express')();
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs');
const { json } = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient



//This Code works from here on down

app.use(bodyParser.json())

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({ extended: true }))

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })

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

//Mongo DB Stuff
MongoClient.connect("mongodb+srv://jsvids:ymXOHeGaV921vaqk@cluster0-elfsq.gcp.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true}) 
  .then(client => {
  console.log('Connected to Database')
  const collection = client.db("test").collection("test_collect");
  app.put('/newgif', (req, res) => {
    console.log(req.body)
    
  })

})
.catch(error => console.error(error))


http.listen(3000, () => {
  console.log('listening on *:3000');
});









  



 




