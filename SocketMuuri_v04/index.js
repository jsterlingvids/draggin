var socket = io();

      var grid = new Muuri('.grid', {
      dragEnabled: true,
      layout: {
        },
        dragStartPredicate: {
          distance: 15,
          delay: 0,
        },
      });




      //Receive Initial Data and build
      socket.on('initial', function(newData){
      // console.log(newData[9]["Post Content"]);
      // grid.sort(newData);
      // console.log(newData);

      // let initialGifs = Array.from(newData);
      // // console.log(initialGifs)

      //Loop through array from database adding gif content on each iteration
      let i;
      for(i = 0; i < newData.length; i++){
        // grid.sort(newData[i].position)
        // console.log(newData);

        let metaDataString = JSON.stringify(newData[i]["Post Meta-Data"])
        
        var wrapper = document.createElement('div');
        
        
        var columnHTML = `
        <div class="item">
            <div class="item-content" id="gif5">
            <div class= "meta-data" id="meta-data" style= "display: none">${metaDataString}</div>
              ${newData[i]["Post Content"]}
              </div>
            </div>
        `

        //Grid.add function to properly add to grid
        wrapper.innerHTML = columnHTML;
        var columnElem = wrapper.children[0]; 
        grid.add([columnElem]);
          }
    })

    //Refresh the layout once page is loaded
      function respaceItems(){
        grid.refreshItems().layout();
        console.log('Respaced!')
        // var divs = document.querySelectorAll(".muuri-item");
        //   console.log(divs);
          console.log(grid.getItems());
      }

      //Runs on timeout because it only properly resorts once all data has been loaded
      setTimeout(respaceItems, 500);

      //Saving positions of respaced items (change to mouseup?)
      document.getElementById('main-grid').addEventListener('mouseup', function(e){
        
        var activeItems = grid.getItems().filter(function (item) {
        return item.isActive();
      });

      console.log(activeItems);
      console.log(activeItems[0]._id);

      let divIDs = grid.getItems();
      //This is the gridID
      console.log(divIDs[0]._gridId);

      //This is the URL for the Gif
      console.log(divIDs[0]._element.children[0].childNodes[3].currentSrc);

      //This is the array to push the new IDs to
      function sendNewInfo(){
      let newIDs = new Array();

      //This is the loop that will push the new IDs and URLs to the newIDs array
      let i;
      for(i = 0; i < divIDs.length; i++){
        newIDs.push([divIDs[i]._id, divIDs[i]._element.children[0].childNodes[3].currentSrc])
      }

      console.log(newIDs);
      console.log('Sending new info now!')

      socket.emit('newIDs', newIDs);

      }
    
      setTimeout(
          sendNewInfo, 600);

          // e.preventDefault();
    })

      //Generate Gif Content
      const apiKey = 'K4MR2L3zPWENog4Ureog4PPv6rAeZSTB'

          //When data has been moved — this runs to move boxes on another browser
          socket.on('dataHasBeenMoved', function(data){
            //[old position, new position]
            console.log(data);
            grid.move(data[0], data[1])
          })
          
          //This function captures the positions when Data has been moved
          function moveData(){

          // moveDataArray = old position, new position
          let moveDataArray = [];


          //DragInit to get the index number when the drag starts
          grid.on('dragInit', function (item, event) {
            // console.log(event);

            //Get index of item at move and push to array
            console.log(grid.getItems().indexOf(item));
            moveDataArray.push(grid.getItems().indexOf(item))


            console.log(moveDataArray);

          });

          
          //dragRelease End gets the new position at the end of the drag
          grid.on('dragReleaseEnd', function (item) {

            //Get index of item when move is done and also add to array
            console.log(grid.getItems().indexOf(item));
            moveDataArray.push(grid.getItems().indexOf(item));

            console.log(moveDataArray);

            //Emit the data to server and clear the array
            socket.emit('thisIsTheMoveData', moveDataArray);
            moveDataArray = [];

            // console.log(moveDataArray);

           

            
          });
        }

          moveData();

          // Saving moved positions on the server
          function moveDataServerUpdate(){

          let gridItemSnapShotBeforeDrag = [];

          // When a drag starts — first get the postions, content and meta data and put them in an aray
          grid.on('dragInit', function(item, event){
            let gridItems = grid.getItems()
            // console.log(gridItems)
            
            //Push [index, Post Content, Post Meta-Data] before move
            let i;
            for(i = 0; i < gridItems.length; i++ ){
              gridItemSnapShotBeforeDrag.push([i, gridItems[i]._element.innerHTML, gridItems[i]._element.children[0].children[0].innerHTML])
            }

            // console.log(gridItemSnapShotBeforeDrag);
      
          })

          let gridItemSnapShotAfterDrag = [];
          let moveDataToSave = [];

          //After drag is done, push the new positions, content and meta data into an array to compare
          grid.on('dragReleaseEnd', function(item){
            let gridItems = grid.getItems()


            //Meta data is now hidden into the posts themselves
            //This is the location of the hidden metadata: gridItems[0]._element.children[0].children[0].innerHTML
            // console.log(gridItems[0]._element.children[0].children[0].innerHTML)

            
            //Push [index, Post Content, Post Meta-Data] after move
            let i;
            for(i = 0; i < gridItems.length; i++ ){
              gridItemSnapShotAfterDrag.push([i, gridItems[i]._element.innerHTML, gridItems[i]._element.children[0].children[0].innerHTML])
            }


            //Compare the two before/after move arrays based on URL — if a URL is different (meaning it has been moved), that new index position, content and meta data is pushed to an array
            let k;
            for(k = 0; k < gridItems.length; k++){
              if(gridItemSnapShotBeforeDrag[k][1] !== gridItemSnapShotAfterDrag[k][1]){
                console.log('different')
                moveDataToSave.push([gridItemSnapShotAfterDrag[k][0], gridItemSnapShotAfterDrag[k][1], gridItemSnapShotAfterDrag[k][2]])
              }
            }

            
            // console.log(gridItemSnapShotBeforeDrag)
            // console.log(gridItemSnapShotAfterDrag)
            // console.log(moveDataToSave);

            //The Array with the info for the database to update is sent to the server
            socket.emit('moveDataToSavetoServer', moveDataToSave)
          })

          




        }

        moveDataServerUpdate()


          //Add New Gif Button
          button = document.getElementById("new-gif");

          button.addEventListener('click', getDatabaseData);

          //Clicking the button gets the database data so the new item can be correctly added
          function getDatabaseData(){
            console.log('getting database data!')
            let request = new Array();
            socket.emit('requestForData', request)
          };

          //The data comes back from the database and the new URL is added here
          socket.on('addNewGifToThis', function(newGifData){
            console.log(newGifData);
            let allDatabaseURLs = new Array();

            

            //Get all current URLS in Database and add to array
            let i;
            for(i = 0; i < newGifData.length; i++){
              allDatabaseURLs.push([newGifData[i].url]);
            }
            console.log(allDatabaseURLs);

            //Fetch Gif URL
            function innerGif5(){
              fetch('https://api.giphy.com/v1/gifs/random?api_key=K4MR2L3zPWENog4Ureog4PPv6rAeZSTB&tag=&rating=G').then(response => response.json()).then(json => {
                // console.log(json)
                let randomGif = json.data.images.fixed_width.url;
                console.log(randomGif);
                
                // Add Gif URL to beginning of Database Array
                allDatabaseURLs.unshift([randomGif]);

                // console.log(allDatabaseURLs);
               

              })
              //Gets new Database out of promise
              return allDatabaseURLs
            }
            console.log(allDatabaseURLs);

            innerGif5();

            //Adds an index number to the array so it can be properly added to the database
            function addIndex(){
            let j;
                for(j = 0; j < allDatabaseURLs.length; j++){
                  allDatabaseURLs[j].splice(0,0,j)
                }
                console.log(allDatabaseURLs)};

                setTimeout(addIndex, 500);

                //Sends the data back to the database
                function emitToDatabase(){
                socket.emit('newDatabaseWithAddition', allDatabaseURLs)}
                
                //Sends on a timeout because it takes some time for all of the data to load
                setTimeout(emitToDatabase, 500);
                            
          });

          //Adds new Gif to all pages
          socket.on('newGifAdded', function(data){
              console.log(data[0][1].toString());
              let newGifURL = data[0][1].toString();

              //Adds gif to homepage
                //Create html element with new GIF URL in it
                var wrapper = document.createElement('div');
                var columnHTML = `
                <div class="item">
                    <div class="item-content" id="gif5">
                    <!-- Safe zone, enter your custom markup -->
                    <img src="${newGifURL}"></img>
                    <!-- Safe zone ends -->
                    </div>
                    </div>
                `
                //Grid.add function to properly add to grid
                wrapper.innerHTML = columnHTML;
                var columnElem = wrapper.children[0]; 
                // console.log(columnElem);
                grid.add([columnElem], {index: 0});

                //   Refresh the layout once page is loaded
                function respaceItems(){
                    grid.refreshItems().layout();
                    console.log('Respaced! With New Gif!')
                    }
                //Runs on timeout because it takes a second to load the gif
                    setTimeout(respaceItems, 300);

            })

          //Function that adds new Gif
          // function addNewGif(e){
          //   console.log('It worked!')
          //   e.preventDefault;
          //   var giphy = new Array();
          //   socket.emit('newGifClicked', giphy);

          //   socket.on('addTheNewGifToThis', function(allGifData){
          //     console.log('HIIIIIIHIIIIIII')
          //   });

            // //Fetch Gif URL
            // function innerGif5(){fetch('https://api.giphy.com/v1/gifs/random?api_key=K4MR2L3zPWENog4Ureog4PPv6rAeZSTB&tag=&rating=G')
            // .then(response => response.json())
            // .then(json => {
            // console.log(json)
            // let randomGif = json.data.images.fixed_width.url;
            // console.log(randomGif);

          //   //Create Element to Add
          //   var wrapper = document.createElement('div');
          //   var columnHTML = ` <div class="item">
          //   <div class="item-content" id="gif5">
          //     <!-- Safe zone, enter your custom markup -->
          //     <img src="${randomGif}"></img>
          //     <!-- Safe zone ends -->
          //     </div>
          //   </div>
          //   `;

          //   var i;
          //   var numbers = 0;
          //   for(i = 0; i < grid.getItems().length; i++){
          //    var numbers = i + 1;
          //   }
          //   console.log(numbers);
            
          //   wrapper.innerHTML = columnHTML;
          //   var columnElem = wrapper.children[0];
          //   grid.add([columnElem], { index: 0 });
          //   grid.refreshItems().layout();
          //   // grid.refreshSortData();
          //   // console.log([columnElem][0].attributes[1].nodeValue);
          //   console.log(columnElem);

          //   let urlAndPositionArray = [];
          //   urlAndPositionArray.push({index: numbers, url: [columnElem][0].lastElementChild.children[0].src, position: 1})
          //   console.log(urlAndPositionArray);
          //   data = urlAndPositionArray;
          //   // [columnElem][0].attributes[1].nodeValue

          
          //   //.layout()
          //   // grid.synchronize();

          //   //Emit Gif URL
          //   // socket.emit('mongo', randomGif);
          //   socket.emit('mongo', data);
          //   // grid.refreshItems().layout();
          //     }
              
              
          //   )};



          //   innerGif5();
   
          

          //Once new gif is clicked — add to pages without having to consult database
        //   socket.on('mongo', function(data){
        //     console.log('This is the new gif data:')
        //     console.log(data[0].url);

        //     //Create Element to Add
        //     var wrapper = document.createElement('div');
        //     var columnHTML = ` <div class="item">
        //     <div class="item-content" id="gif5">
        //       <!-- Safe zone, enter your custom markup -->
        //       <img src="${data[0].url}"></img>
        //       <!-- Safe zone ends -->
        //       </div>
        //     </div>
        //     `;
        //     wrapper.innerHTML = columnHTML;
        //     var columnElem = wrapper.children[0];
        //     grid.add([columnElem], { index: 0 });
        //     grid.refreshItems();
        //     // grid.refreshSortData();

        //   })



          //Adding Links
          document.getElementById('video').addEventListener('click', linkFetch)
          let urlInput = document.getElementById('url-input')

          //This submits the link to the server
          function linkFetch(){
            let url = urlInput.value
            // let url = urlInput.value
            // console.log(urlInput)
            socket.emit('linkSubmit', url)
            urlInput.value = '';
          }

          //Once the server gets and process the link, this data is sent back to the original client
          socket.on('newPostData', function(data){
            console.log(data);

             //Create html element with new GIF URL in it
             var wrapper = document.createElement('div');
             var columnHTML = `
             <div class="item">
                 <div class="item-content">
                 <!-- Safe zone, enter your custom markup -->
                 <a href = "${data.url}">
                 <img src="${data.image}"></img></a>
                 <!-- Safe zone ends -->
                 </div>
                 </div>
             `
             //Grid.add function to properly add to grid
             wrapper.innerHTML = columnHTML;
             var columnElem = wrapper.children[0]; 
             console.log(columnElem.children[0].innerHTML);
             grid.add([columnElem], {index: 0});

             //Refresh the layout once page is loaded
             function respaceItems(){
                 grid.refreshItems().layout();
                 console.log('Respaced! With New Gif!')
                 }

             //Runs on timeout because it takes a second to load the gif
                 setTimeout(respaceItems, 300);
              

              //Now that the post is added, the info is sent back to the server to be sent out to other clients and saved in the database
              //[Post Content, URL Meta Data]
              let newPostInfo = [columnElem.children[0].innerHTML, data]
              console.log(newPostInfo)

              socket.emit('postAddedUpdateDatabase', newPostInfo);

              return newPostInfo

          })

          //Adding new post to page for all clients simultaneously
          socket.on('someoneElseAddedNewPost', function(data){
            // console.log(data);

            //Create html element with new GIF URL in it
            var wrapper = document.createElement('div');
            var columnHTML = `
            <div class="item">
                <div class="item-content">
                <!-- Safe zone, enter your custom markup -->
                <a href = "${data.url}">
                <img src="${data.image}"></img></a>
                <!-- Safe zone ends -->
                </div>
                </div>
            `
            //Grid.add function to properly add to grid
            wrapper.innerHTML = columnHTML;
            var columnElem = wrapper.children[0]; 
            console.log(columnElem.children[0].innerHTML);
            grid.add([columnElem], {index: 0});

            //Refresh the layout once page is loaded
            function respaceItems(){
                grid.refreshItems().layout();
                console.log('Respaced! With New Gif!')
                }

            //Runs on timeout because it takes a second to load the gif
                setTimeout(respaceItems, 300);
          })

         

          
          

          
             


          