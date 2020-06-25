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

// io.on('connection', (socket) => {
//   socket.on('box move', function(data){
//     console.log('Someone is moving a box....')
//     io.emit('box move', data);
//   });
// });

//Mongo DB Stuff
MongoClient.connect("mongodb+srv://jsvids:6ybfQtBE4HQWcmZZ@cluster0-elfsq.gcp.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true}) 
  .then(client => {
  console.log('Connected to Database')
  const collection = client.db("test").collection("test");
  const position = client.db("test").collection("position");

  //On load get gif data
  io.on('connection', (socket) => {
    console.log('Grabbing Initial Gif Data...');
    return collection.find().toArray()
    .then(res => {
      // console.log(res);
      let newData = res;
      io.emit('initial', newData);
    })
    .catch(error => console.error(error))
  });

    //On load get gif positions
    io.on('connection', (socket) => {
      return position.find().toArray().then(res =>{
        // console.log(res)
        let newPositionData = res;
        io.emit('newPositions', newPositionData)
        })
    })

    //Sending positions to database  after move
    io.on('connection', (socket) => {
      socket.on('box move', function(data){
        console.log('Sending new positions to Database')
        position.updateOne({'_id':'position'},{$set:{field1:data}},{upsert:true})
        io.emit('box move', data);
      });
    });

  //Socket sends new data to server after "Add Gif" button is clicked
  io.on('connection', (socket) => {
    socket.on('mongo', function(data){
      //Add data to database
      console.log('Mongo!');
      // console.log(data);
      collection.insertOne({URL: data}, {upsert: true}).then(res =>{
        // console.log(res);
      }).catch(err => 
        console.log(err));
      io.emit('mongo', data);
    })
  })



})
.catch(error => console.error(error))


http.listen(3000, () => {
  console.log('listening on *:3000');
});









  



 




