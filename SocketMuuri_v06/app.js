//Initialize
var express = require('express');
var cors = require('cors')
// var app = require('express')();
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs');
const { json } = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient
const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])





// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
 
// var cors_proxy = require('cors-anywhere');
// const { resolve } = require('path');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

// Get metadata from post url after new link is submitted
io.on('connection', (socket) => {
  socket.on('linkSubmit', function(data){
    //The data is the URL received
    console.log(data)
    const got = require('got')
    const targetUrl = data;

    //Scrapes the data for the Metadata
    async function run() { 
      
      //Successful MetaData
      try {

      const { body: html, url } = await got(targetUrl)
      const metadata = await metascraper({ html, url })
      console.log('metadata below')
      console.log(metadata)

      //Sends new post metadata back to original client
      socket.emit('newPostData', metadata);

      //Sends new post metadata to everyone connected to update immediately
      // socket.broadcast.emit('someoneElseAddedNewPost', metadata);

      }
      //No MetaData found
      catch(e){
        metadata = "no dice"
        socket.emit('newPostData', metadata);
        // console.log(e)
      }
      finally {
        console.log('The MetaData has been sent back')
      }

    }

    run()


    })
  })


//This Code works from here on down

app.use(bodyParser.json())

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

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

// let numUsers = 0;

//Chat Message Handling
io.on('connection', (socket) => {
  
  let numClients = {};
  socket.on('join-room', function(room, username){

    socket.join(room);

    //This produces an object with the client IDs
    clients = io.sockets.adapter.rooms[room].sockets
    // console.log(clients)

    //To get the number of clients
    var numClients = Object.keys(clients).length
    console.log(numClients)

    io.to(room).emit('a-user-connected-to-room', numClients)
    // return numClients[room]

  })

  //When users leave the room
  socket.on('leave-room', function(room){
    socket.leave(room);


        //When there are no clients, this produces an error, so we need an if statement to handle an undefined 0 user situation
        if (io.sockets.adapter.rooms[room] === undefined){
          console.log('there is nothing here')
        } else {
          clients = io.sockets.adapter.rooms[room].sockets
          // console.log(clients)
          var numClients = Object.keys(clients).length
          console.log(numClients)
        }
        

        io.to(room).emit('a-user-left-the-room', numClients)

  })

  socket.on('chat-message-sent', function(username, message, room){
    // console.log(room);
    // console.log(username);
    // console.log(message);
    // socket.join(room)

    socket.broadcast.to(room).emit('send-message-to-all', username, message)
  })
})

//Mongo DB Stuff
MongoClient.connect("mongodb+srv://jsvids:6ybfQtBE4HQWcmZZ@cluster0-elfsq.gcp.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true}) 
  .then(client => {
  console.log('Connected to Database')
  const collection = client.db("test").collection("test");
  const chatMessages = client.db("test").collection("chat-messages");

  // On load get gif data
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

  //Receives data when a box has been moved (NEW)
  io.on('connection', (socket) => {
    socket.on('thisIsTheMoveData', function(data){
      // console.log(data);
      socket.broadcast.emit('dataHasBeenMoved', data);
    })
  })

  //Saving new positions in the server
  io.on('connection', (socket) => {
    socket.on('moveDataToSavetoServer', function(data){
      //[index to update, new Post Content, Post Type]
      // console.log(data)

      //For each item in data, search based on index, and update the link, image, description and type based on what's in the array
      data.forEach(item => {
        // console.log(item[0])
        collection.findOneAndUpdate({"index": item[0]}, {$set: {"Post Link": item[1], "Post Image": item[2], "Post Description": item[3], "Post Type": item[4]}}).then(res=> console.log("Locations Updated on Database")).catch(err => console.log(err))
      })
    })
  })


  //Adding new Post to Database logic
  io.on('connection', (socket) => 

  {

    //Deleting Livestream from Database on End
    socket.on('stream-has-stopped', function(data, postLink){
      console.log('yahhhoooo')
      console.log(data)
      console.log(postLink)

      //First an Async Function to properly delete from Database and return an array of the new Database
      async function deleteDatabase(){
        let databaseDelete = await collection.deleteOne({"Post Link": data})

        let databaseRecompile = await collection.find().toArray()

        let databaseReUpload = await databaseRecompile.map(item => [item["Post Link"], item["Post Image"], item["Post Description"], item["Post Type"]])


        return databaseReUpload
      }

      //After the Async function is run, the database is numerated and reuploaded (just like posting)

      deleteDatabase().then(res => {

        //Adds a number to the array
        let i;
        for(i = 0; i < res.length; i++){
          // console.log(updateDatabaseArray[i])
          res[i].splice(0,0,i)
        }

        // console.log(res)

        //Then goes through each item and updates based on the link content (for some reason the index number would not work)
        res.forEach(item => {
          // console.log(item)
          collection.findOneAndUpdate({"Post Link": item[1]}, {$set: {"index": item[0], "Post Link": item[1], "Post Image": item[2], "Post Description": item[3], "Post Type": item[4]}}).then(res=> console.log("These posts are updated")).catch(err => console.log(err))
        })

      })
      

      //Emit to everyone that the live stream is gone
      io.emit('someone-has-stopped-livestreaming', data)
      //Need to send this to room to change visuals once stream has stopped
      io.to(postLink).emit('the-stream-has-stopped', data)

    })
    
    
    
    
    socket.on('postAddedUpdateDatabase', function(newPostInfo){

    //Sends new post metadata to everyone connected to update immediately
    socket.broadcast.emit('someoneElseAddedNewPost', newPostInfo);
    //New Post Data [Post HTML content]
    // console.log('----CHECK IT OUT-----')
    // console.log(newPostInfo)

    //Get current database
    collection.find().toArray().then(res => {
      console.log('here')
      // console.log(res)
      let databaseEntries = res;

      //Map current Database entries to new array to easily add new link info
      let updateDatabaseArray = databaseEntries.map(item => [item["Post Link"], item["Post Image"], item["Post Description"], item["Post Type"]]);
      // console.log("--SEE WHAT ADDING A NEW POST LOOKS LIKE HERE----")
      // console.log(updateDatabaseArray);

      //Add new link to the front of the database array
      updateDatabaseArray.unshift(newPostInfo);
      // console.log("--AFTER THE NEW URL IS ADDED TO THE TOP")
      // console.log(updateDatabaseArray);

      //Add index number to newly updated array
      let i;
              for(i = 0; i < updateDatabaseArray.length; i++){
                // console.log(updateDatabaseArray[i])
                updateDatabaseArray[i].splice(0,0,i)
              }
      // console.log("--AFTER THE NUMBERS ARE ADDED----")
      // console.log(updateDatabaseArray);
      
      
      //Update database with new links 
      updateDatabaseArray.forEach(item => {
        // console.log('item')
        collection.findOneAndUpdate({"index": item[0]}, {$set: {"Post Link": item[1], "Post Image": item[2], "Post Description": item[3], "Post Type": item[4]}}, {upsert: true}).then(res=> console.log("New Post added to Database")).catch(err => console.log(err))
      })

    
  })
    .catch(err => console.log(err))
  
  
})
})

//Getting and loading chat messages
io.on('connection', (socket) => {
  // console.log('Grabbing chat messages...');

  //When a user connects to a page, chat messages are retrieved
  socket.on('retrieve-chat-messages', function(data){
    chatMessages.find({'room_id': data}).toArray()
    .then(res => {
    socket.emit('archived-chat-messages-from-server', res)
    console.log(res)})
    .catch(err => console.log(err))
  })


  //When a user sends a message, the server is updated with the messages
  socket.on('chat-message-to-server', function(data){
    console.log(data[0].username)
    chatMessages.findOneAndUpdate(
      {"room_id": data[0].room },
      { $push:  {'message_and_username':[{'message': data[0].message, 'username': data[0].username}]}}, {upsert: true}).then(res => console.log(res)).catch(err => console.log(err))
  })


});



})
.catch(error => console.error(error))


//Requesting a LiveStream
io.on('connection',(socket) => {

  socket.on('i-want-to-watch-livestream', function(myVisitorPeerId, OthersocketId){
    //myVisitorPeerId is the Peer ID of the person who wants the stream
    console.log(myVisitorPeerId)
    
    //OthersocketId is the Socket ID of the person streaming, so this event goes directly to them
    console.log(OthersocketId)

    socket.to(OthersocketId).emit('someoneWantsMyStream', myVisitorPeerId)
    })

    //Update Stream Screenshot
    socket.on('update-stream-screenshot', function(data1, data2){
      io.emit('new-stream-screenshot', data1, data2)
    })
  })



http.listen(3000, () => {
  console.log('listening on *:3000');

});









  



 




