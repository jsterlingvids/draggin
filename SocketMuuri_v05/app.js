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
 
var cors_proxy = require('cors-anywhere');
const { resolve } = require('path');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

// Get metadata from post url after new link is submitted
io.on('connection', (socket) => {
  socket.on('linkSubmit', function(data){
    //The data is the URL received
    console.log(data)
    const got = require('got')
    const targetUrl = data;

    //Scrapes the data for the Metadata
    (async () => {
      const { body: html, url } = await got(targetUrl)
      const metadata = await metascraper({ html, url })
      // console.log('metadata below')
      // console.log(metadata)

      //Sends new post metadata back to original client
      socket.emit('newPostData', metadata);

      //Sends new post metadata to everyone connected to update immediately
      // socket.broadcast.emit('someoneElseAddedNewPost', metadata);
    })()


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

//Mongo DB Stuff
MongoClient.connect("mongodb+srv://jsvids:6ybfQtBE4HQWcmZZ@cluster0-elfsq.gcp.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true}) 
  .then(client => {
  console.log('Connected to Database')
  const collection = client.db("test").collection("test");
  const position = client.db("test").collection("position");

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
  {socket.on('postAddedUpdateDatabase', function(newPostInfo){

    //Sends new post metadata to everyone connected to update immediately
    socket.broadcast.emit('someoneElseAddedNewPost', newPostInfo);
    //New Post Data [Post HTML content]
    console.log('----CHECK IT OUT-----')
    console.log(newPostInfo)

    //Get current database
    collection.find().toArray().then(res => {
      console.log('here')
      // console.log(res)
      let databaseEntries = res;
      // console.log(databaseEntries)

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
  

  //Adds new post to database
  
})
})

})
.catch(error => console.error(error))



http.listen(3000, () => {
  console.log('listening on *:3000');

});









  



 




