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
    //Sort the database based on position
    collection.find().toArray().then(res => {
      // console.log(res)
      let newData = res;
      socket.emit('initial', newData);
    })
      .catch(err => console.log(err))
  });

  //Once the new gif button is pressed, send that info to the client
  io.on('connection', (socket) => {
    socket.on('requestForData', function(data){
      // let newGifData = "This is the data I'm sending"
      collection.find().toArray().then(res => {
        // console.log(res)
        let newGifData = res;
        socket.emit('addNewGifToThis', newGifData)
      })
        .catch(err => console.log(err))
    })
  })

    //Sending positions to database  after move
    // io.on('connection', (socket) => {
    //   socket.on('box move', function(data){
    //     console.log('Sending new positions to Database')

    //     //URL console.log
    //     // console.log(data[0][0]);

    //     //Position console.log
    //     //console.log(data[0][1])

    //     var items = collection.find()

    //     let i;
    //     for(i = 0; i < data.length; i++){
    //       // //URL Data
    //       // console.log(data[i][0]);
    //       // //Position Data
    //       // console.log(data[i][1]);

    //       //Update position data on each
    //       collection.findOneAndUpdate({"url": data[i][0]}, {$set: {"position": data[i][1]}}).then(res =>
    //         console.log('Database Updated with new positions')).catch(err => console.log(err))
    //     }

    //   //  collection.find().sort( {"position": 1} ).toArray().then(res => console.log('Sorting')).catch(err => console.log(err));


    //     io.emit('box move', data);
    //   });
    // });

  //Socket sends new data to server after "Add Gif" button is clicked
  // io.on('connection', (socket) => {
  //   socket.on('mongo', function(data){
  //     //Add data to database
  //     console.log('Got a new gif!');
  //     // console.log(data)
  //     const newItem = {
  //       "index": data[0].index,
  //       "url" : data[0].url,
  //       "position": data[0].position,
  //       "newGIF": "newGif"
  //     }
  //     collection.insertOne(newItem).then(res =>{
  //       // console.log(res);
  //     }).catch(err => 
  //       console.log(err));
  //     socket.broadcast.emit('mongo', data);
  //   })
  // })

  //Receives new Database with new gif data after add new gif is clicked
  io.on('connection', (socket) => {
    socket.on('newDatabaseWithAddition', function(allDatabaseURLs){
      // console.log(allDatabaseURLs);

      allDatabaseURLs.forEach(item => {
        // console.log(item[0]);
      collection.findOneAndUpdate({"index": item[0]}, {$set: {"url": item[1], "New One?": "Yes"}}, {upsert: true}).then(res => console.log("TRYING")).catch(err => console.log(err)) 
    })

    })
  })


  //Once and item is moved — this updates all positions
  io.on('connection', (socket) => {
    socket.on('newIDs', function(data){
      console.log('Sending new IDs(!) to Database')
      // console.log(data);

      // Add index value to data array
      var i;
      for (i=0; i < data.length; i++){
        data[i].splice(0,0, i)
      }
      console.log(data);

      // Now that each item has an updated index value, it'll update the database in order
      data.forEach(item => {
        collection.findOneAndUpdate({"index": item[0]}, {$set: {"url": item[2], "Done?": "yes"}}, {upsert: true}).then(res=> console.log("DATABASE UPDATED")).catch(err => console.log(err))
      })

      // io.emit('newIDs', data);
    });
  });

})
.catch(error => console.error(error))





http.listen(3000, () => {
  console.log('listening on *:3000');

});









  



 




