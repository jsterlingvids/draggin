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
      console.log(newData);

      // let initialGifs = Array.from(newData);
      // // console.log(initialGifs)

      //Loop through array from database adding gif content on each iteration
      let i;
      for(i = 0; i < newData.length; i++){
        // grid.sort(newData[i].position)
        // console.log(newData);
        
        var wrapper = document.createElement('div');
        
        
        var columnHTML = `
        <div class="item">
              ${newData[i]["Post Content"]}
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

      
      //Generate Gif Content
      const apiKey = 'K4MR2L3zPWENog4Ureog4PPv6rAeZSTB'

          //When data has been moved — this runs to move boxes on another browser
          socket.on('dataHasBeenMoved', function(data){
            //[old position, new position]
            // console.log(data);
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
            // console.log(grid.getItems().indexOf(item));
            moveDataArray.push(grid.getItems().indexOf(item));

            // console.log(moveDataArray);

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

          // When a drag starts — first get the postions and content put them in an array
          grid.on('dragInit', function(item, event){
            let gridItems = grid.getItems()
            // console.log(gridItems)
            
            //Push [index, Post Content] before move
            let i;
            for(i = 0; i < gridItems.length; i++ ){
              gridItemSnapShotBeforeDrag.push([i, gridItems[i]._element.innerHTML])
            }

            // console.log(gridItemSnapShotBeforeDrag);
      
          })

          let gridItemSnapShotAfterDrag = [];
          let moveDataToSave = [];

          //After drag is done, push the new positions and content and put them into an array to compare
          grid.on('dragReleaseEnd', function(item){
            let gridItems = grid.getItems()


            //Meta data is now hidden into the posts themselves
            //This is the location of the hidden metadata: gridItems[0]._element.children[0].children[0].innerHTML
            // console.log(gridItems[0]._element.children[0].children[0].innerHTML)

            
            //Push [index, Post Content] after move
            let i;
            for(i = 0; i < gridItems.length; i++ ){
              gridItemSnapShotAfterDrag.push([i, gridItems[i]._element.innerHTML])
            }


            //Compare the two before/after move arrays based on URL — if a URL is different (meaning it has been moved), that new index position, and content is pushed to an array
            let k;
            for(k = 0; k < gridItems.length; k++){
              if(gridItemSnapShotBeforeDrag[k][1] !== gridItemSnapShotAfterDrag[k][1]){
                console.log('different')
                moveDataToSave.push([gridItemSnapShotAfterDrag[k][0], gridItemSnapShotAfterDrag[k][1]])
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



          //Adding Links
          let addSomethingButton = document.getElementById('add-something')
          let addLinkButton = document.getElementById('add-link')
          let addNoteButton = document.getElementById('add-note')
          let urlInput = document.getElementById('url-input')

          addLinkButton.style.display = "none";
          addNoteButton.style.display = "none";
          urlInput.style.display = "none";

          addSomethingButton.addEventListener('click', bringInSubmissionQuestions)

          function bringInSubmissionQuestions(e){
            e.preventDefault();

            let overlay = document.createElement('div');
            let overlayHTML = `
            <div class="overlay" style="
            position: fixed;
            right: 0px;
            width: 50%;
            height: 100%; 
            border: 3px solid lightblue;
            padding: 10px;
            z-index: 2;
            top: 0;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.5);
            transition: 1s;
            align-items: center;
            justify-content: center;">
                   <div id="wrapper" style=" 
                   width: 100%;
                   height: 100%;
                   border: 2px solid lightblue;
                   display: flex;
                   flex-direction: column;
                   justify-content:center;
                   align-items: center;
                   justify-content: center;">
                    <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 3%; margin: 2%;">Add Link!</button>
                    <button type="button" class="btn btn-primary btn-lg" id="add-note" style="padding: 3%; margin: 2%;">Add Note!</button>
                    </div>
                    
                    
                 </div>
            `

            overlay.innerHTML = overlayHTML;

            

            document.getElementById('master-div').appendChild(overlay)

            // console.log(document.getElementsByTagName('button'))

            // document.addEventListener('click', function(e){
            //   console.log(e.target);
            //   console.log(e.srcElement);
              

            // })
            
            //Add link button click
            let AddNotesButton = document.getElementsByTagName('button')[3]
            AddNotesButton.addEventListener('click', function(){
              overlay.innerHTML = `
              <div class="overlay" style="
              position: fixed;
              right: 0px;
              width: 50%;
              height: 100%; 
              border: 3px solid lightblue;
              padding: 10px;
              z-index: 2;
              top: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.5);
              transition: 1s;
              align-items: center;
              justify-content: center;">


                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;">

                     <input type="text" id="link-URL-input-Box" placeholder="Copy/Paste a link here" style="height: 10%; width: 50%;">
                     <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 1%; margin: 2%;">---></button>


                     </div>
                     </div>`;


                //Once URL is copied and pasted and next button is clicked
                document.getElementsByTagName('button')[3].addEventListener('click', function(e){
                  e.preventDefault()
                  //This is the URL Input Value
                  let urlInputValue = document.getElementsByTagName('input')[1].value
                  console.log(document.getElementsByTagName('input')[1].value)
                 overlay.innerHTML = `<div class="overlay" style="
                  position: fixed;
                  right: 0px;
                  width: 50%;
                  height: 100%; 
                  border: 3px solid lightblue;
                  padding: 10px;
                  z-index: 2;
                  top: 0;
                  background-color: rgb(0, 0, 0);
                  background-color: rgba(0, 0, 0, 0.5);
                  transition: 1s;
                  align-items: center;
                  justify-content: center;">


                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;">

                     
                     <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 1%; margin: 2%;">---></button>


                     </div>
                     </div>`

                  
                })
              }

            )

            

            


         
          }

       
      
          

          //This submits the link to the server
          function linkFetch(){
            let url = urlInput.value
            // let url = urlInput.value
            // console.log(urlInput)
            socket.emit('linkSubmit', url)
            urlInput.value = '';
            urlInput.style.display = "none";
            addLinkButton.style.display = "none";
            addSomethingButton.style.display = "block";



          }

          //Input in URL box changes look of button
          urlInput.addEventListener('input', changeButton)

          function changeButton(e){
            e.preventDefault();
            addLinkButton.textContent = '--->'
          }

          urlInput.onblur = function resetButton(){
            addLinkButton.textContent = 'Add URL!'
          }

          

          //Once the server gets and process the link, this data is sent back to the original client
          socket.on('newPostData', function(data){
            console.log(data);

             //Create html element
             var wrapper = document.createElement('div');
             var columnHTML = `
             <div class="item">
                 <div class="item-content" id= "post">
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
            //  console.log(columnElem.innerHTML);
             grid.add([columnElem], {index: 0});

             //Refresh the layout once page is loaded
             function respaceItems(){
                 grid.refreshItems().layout();
                 console.log('Respaced! With New Gif!')
                 }

             //Runs on timeout because it takes a second to load the content
                 setTimeout(respaceItems, 300);
              

              //Now that the post is added, the info is sent back to the server to be sent out to other clients and saved in the database
              //[Post Content]
              let newPostInfo = [columnElem.innerHTML]
              // console.log(newPostInfo)

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
                <div class="item-content" id= "post">
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
            // console.log(columnElem.children[0].innerHTML);
            grid.add([columnElem], {index: 0});

            //Refresh the layout once page is loaded
            function respaceItems(){
                grid.refreshItems().layout();
                console.log('Respaced! With New Gif!')
                }

            //Runs on timeout because it takes a second to load the gif
                setTimeout(respaceItems, 300);
          })

         

          
          

          
             


          