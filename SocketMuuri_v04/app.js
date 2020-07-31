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
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});


//Metascraper
// const got = require('got')

// const targetUrl = 'www.joshsterlingvideo.com';

// (async () => {
//   const { body: html, url } = await got(targetUrl)
//   const metadata = await metascraper({ html, url })
//   console.log(metadata)
// })()

io.on('connection', (socket) => {
  socket.on('linkSubmit', function(data){
    // console.log(data)
    const got = require('got')
    const targetUrl = data;

    // (async => {
    // const {body: html, url} = await got(targetUrl)
    // const metadata = metascraper({html, url})
    // console.log(metadata)})

    // got(targetUrl)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))

    (async () => {
      const { body: html, url } = await got(targetUrl)
      const metadata = await metascraper({ html, url })
      console.log(metadata)
      socket.emit('newPostData', metadata);
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

  //Receives data when a box has been moved
  io.on('connection', (socket) => {
    socket.on('thisIsTheMoveData', function(data){
      // console.log(data);
      socket.broadcast.emit('dataHasBeenMoved', data);
    })
  })

  //Receives new Database with new gif data after add new gif is clicked
  io.on('connection', (socket) => {
    socket.on('newDatabaseWithAddition', function(allDatabaseURLs){
      // console.log(allDatabaseURLs);

      allDatabaseURLs.forEach(item => {
        // console.log(item[0]);
      collection.findOneAndUpdate({"index": item[0]}, {$set: {"url": item[1], "New One?": "Yes"}}, {upsert: true}).then(res => console.log("TRYING")).catch(err => console.log(err)) 
    })

    //Send the database containing the new URL to all pages (may need to be paired down to be smaller eventually)
    io.emit('newGifAdded', allDatabaseURLs);
    })
  })


  //Once and item is moved — this updates all positions on the server
  io.on('connection', (socket) => {
    socket.on('newIDs', function(data){
      console.log('Sending new IDs(!) to Database')
      // console.log(data);

      // Add index value to data array
      var i;
      for (i=0; i < data.length; i++){
        data[i].splice(0,0, i)
      }
      // console.log(data);

      // Now that each item has an updated index value, it'll update the database in order
      data.forEach(item => {
        collection.findOneAndUpdate({"index": item[0]}, {$set: {"url": item[2], "Done?": "yes"}}, {upsert: true}).then(res=> console.log("DATABASE UPDATED WITH NEW INDEXES")).catch(err => console.log(err))
      })

    });
  });


  //Adding new Post to Database logic
io.on('connection', (socket) => 
{socket.on('postAddedUpdateDatabase', function(newPostInfo){
  //New Post Data [index, Post HTML content, Post Meta Data]
  console.log(newPostInfo)
  collection.find().toArray().then(res => {
    // console.log(res)
    let databaseEntries = res;
    databaseEntries.unshift(newPostInfo);
    let postArray = Object.entries(databaseEntries);
    socket.emit('gifDataTest', postArray)
    console.log(postArray[1]['Post Content']);

    // postArray.forEach(item => {
    //   console.log(item[1][1][1][0])
    //   // collection.findOneAndUpdate({"index": item[0]}, {$set: {"Post Content": item[1]['Post Content'], "Post Meta-Data": item[2] }}, {upsert: true}).then(res=> console.log("New Post added to Database")).catch(err => console.log(err))
    // })

    
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









  



 




