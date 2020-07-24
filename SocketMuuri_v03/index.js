var socket = io();

      var grid = new Muuri('.grid', {
      dragEnabled: true,
      layout: {
        },
      });

      //Receive Initial Data and build
      socket.on('initial', function(newData){
      console.log(newData);
      // grid.sort(newData);
      // console.log(newData);

      // let initialGifs = Array.from(newData);
      // // console.log(initialGifs)

      //Loop through array from database adding gif content on each iteration
      let i;
      for(i = 0; i < newData.length; i++){
        // grid.sort(newData[i].position)
        // console.log(newData);

        //Create div to hold looped items
        var wrapper = document.createElement('div');
        var columnHTML = `
        <div class="item">
            <div class="item-content" id="gif5">
              <!-- Safe zone, enter your custom markup -->
              <img src="${newData[i].url}"></img>
              <!-- Safe zone ends -->
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

      //Saving positions of respaced items
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
    })

      //Generate Gif Content
      const apiKey = 'K4MR2L3zPWENog4Ureog4PPv6rAeZSTB'

          //  //Receive Moved Box Data and Function
          // socket.on('box move', function(data){
        
          // // console.log(data[0]);

          // //Select/identify all muuri-items that need positions transformed
          // var moveDivs = document.querySelectorAll(".muuri-item");
          // // console.log(moveDivs);

          // //Loop through the new positions and set them equal to the incoming data
          // for (i = 0; i < data.length; i++){
          //   moveDivs[i].attributes[1].nodeValue = data[i];
          // }
          // grid.refreshItems().layout();
          
          // });








          //When a box has been moved
          // socket.on('boxHasBeenMoved', function(data){
          //   console.log('A Box has been moved - updating!')
          //   console.log(data);

          //   //Reloads other pages once someone moves a box - CLUNKY
          //   // window.location.reload();

          //   //iterate through?
          //   let gridItems = grid.getItems()
          //   console.log(gridItems);
            

          //   console.log(gridItems[0]._element.childNodes[2].previousSibling.children[0].currentSrc)
          //   console.log(data[0][2])

          //   // let o;
          //   // for(o = 0; o < gridItems.length; o++){
          //   //   if(gridItems[o]._element.childNodes[2].previousSibling.children[0].currentSrc != data[o][2]){

          //   //   }
          //   // }

          //   let oldGridItemPositions = []
          //   let j;
          //   for(j = 0; j < gridItems.length; j++){
          //     if(gridItems[j]._element.childNodes[2].previousSibling.children[0].currentSrc != data[j][2]){
          //       oldGridItemPositions.push([data[j][0], gridItems[j]._element.childNodes[2].previousSibling.children[0].currentSrc])
          //     } else {console.log('bummer')}
          //   }

          //   console.log(oldGridItemPositions);

          //   let changedGridItems = [];

          //   let i;
          //   let k;
          //   for(i = 0; i < data.length; i++){
          //     for(k = 0; k < oldGridItemPositions.length; k++){
          //       if(data[i][2] == oldGridItemPositions[k][1]){
          //         changedGridItems.push([data[i][0], oldGridItemPositions[k][0]])
          //       }
          //     }
          //   }

          //   // changedGridItems = [old position, new position]

          //   console.log(changedGridItems)

          //   grid.move(changedGridItems[0][0], changedGridItems[0][1]);


          //   // let l;
          //   // for(l = 0; l < changedGridItems; l++){
          //   //   grid.move(changedGridItems[l][0], changedGridItems[l][1])
          //   // }

          //   // changedGridItems.forEach(item => {
          //   //   grid.move(item[0], item[1])
          //   //   console.log(item)
          //   // }
          //   //   )
        
  
            
          //   //(old position, new position)
          //   // grid.move(0,2)

          // })









          //Captures the data of the moved item, but now it's in an endless loop (on.move)

          let changedItems = [];
          function sendMove(data){
            console.log(data);
            changedItems.push([data.fromIndex, data.toIndex]);
            console.log(changedItems);
            socket.emit('realMove', changedItems);
            grid.off('move', sendMove);
          }

          grid.on('move', sendMove);

          

          
            
            
          //   function sendMove(data){
          //     console.log(data)
          //     let currentGrid = grid.getItems();
          //     console.log(currentGrid);
          //     let currentGridURLs = [];
          //     let i;
          //     for(i = 0; i < currentGrid.length; i++){
          //       currentGridURLs.push(currentGrid[i]._element.childNodes[2].previousSibling.children[0].currentSrc)
          //     }
          //     console.log(currentGridURLs);
          //     changedItems.push([data.fromIndex, data.toIndex]);
          //     console.log(changedItems);
          //     let movePositions = {newPositions: changedItems,
          //     newGrid: currentGridURLs}
          //     socket.emit('realMove', movePositions);
          //     // grid.off('move', sendMove)
          //   }

          //   grid.on('move', sendMove )
          
          

          socket.on('realBoxHasBeenMoved', function(data){
            console.log(data)
            console.log(data[0][0])

            
            function onMove(){
              grid.move(data[0][0], data[0][1])
            }

            onMove();
           
            
            // grid.on('move', onMove);
            // grid.off('move', onMove);
            // let currentGrid = grid.getItems();
            // let i;
            // for(i = 0; i < currentGrid.length; i++){
            //   if(currentGrid[i]._element.childNodes[2].previousSibling.children[0].currentSrc != data.newGrid[i]){
            //     function moveWith(){grid.move(data.newPositions[0][0], data.newPositions[0][1])}
            //     moveWith()
            //     grid.off('move', moveWith)
            //   } else {
            //     console.log('nothing to move')
            //   }
            // }
            // function moveWhenData(){grid.move(data.newPositions[0][0], data.newPositions[0][1])}
            // grid.on('move', function(data){
            //   grid.off('move')
            // })
            // grid.off('move', sendMove)
          })

          // // document.addEventListener('mouseup', function(e){
          // //   let changedItems = [];
          // //   grid.on('move', function(data){
          // //     console.log(data);
          // //     changedItems.push([data.fromIndex, data.toIndex]);
          // //     console.log(changedItems);
          // //     socket.emit('realMove', changedItems);
          // //   })
          // // })

          // // grid.on('dragReleaseEnd', function(item){
          // //   console.log(item);
          // // })


          
          
          

          






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

          //JSON Testing
          jsonButton = document.getElementById("json");

          