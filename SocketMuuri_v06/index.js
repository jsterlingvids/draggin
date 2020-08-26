//Declaring constants

// const { link } = require("fs");

const videoURL = "youtube.com" || "youtu.be";
const imgURL = ".gif"

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



//On loadup

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


        if(newData[i]["Post Type"] === "link-video"){
          var wrapper = document.createElement('div');
          
          
          var columnHTML = `
          <div class="item">
          <div class="item-content" id="post" data-type="${newData[i]["Post Type"]}" style="opacity: 1; transform: scale(1);">
                <!-- Safe zone, enter your custom markup -->
                  <div class="link-content" id="link-master" style="
                  position: relative;
                  display: inline-block;">

                  <a href="${newData[i]["Post Link"]}">
                  <img src="${newData[i]["Post Image"]}">
                  </a>
                      <div class="post-description" id="post-description-master" style="
                          position: absolute;
                          z-index: 999;
                          left: 0;
                          bottom: 0;
                          text-align: left;
                          font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                          padding-bottom: 10px;
                          padding-left: 5px;
                          padding-top: 5px;
                          text-size-adjust: auto;
                          margin-right: 10px;
                          margin-bottom: 5px;
                          margin-left: 5px;
                          padding-right: 3px;
                          box-shadow: 3px -3px 0px 3px #00000052;
                          background-color: #8f3cb96b;
                          /* background-color: #ff5c4ca3; */">

                          <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO</b></span>

                          <span id="post-description" style="
                          margin-left: 5px;
                          font-size: 15px;
                          font-size-adjust: inherit;
                          font-variant-caps: titling-caps;
                          font-weight: bold;
                          ">${newData[i]["Post Description"]}</span>
                      </div>
                      </div>
                  <!-- Safe zone ends -->
                      </div>
              </div>
          `

          //Grid.add function to properly add to grid
          wrapper.innerHTML = columnHTML;
          var columnElem = wrapper.children[0]; 
          grid.add([columnElem]);
          } else if (newData[i]["Post Type"] === "link-img"){
            var wrapper = document.createElement('div');
        
        
            var columnHTML = `
            <div class="item">
            <div class="item-content" id="post" data-type="${newData[i]["Post Type"]}" style="opacity: 1; transform: scale(1);">
                  <!-- Safe zone, enter your custom markup -->
                    <div class="link-content" id="link-master" style="
                    position: relative;
                    display: inline-block;">
    
                    <a href="${newData[i]["Post Link"]}">
                    <img src="${newData[i]["Post Image"]}">
                    </a>
                        <div class="post-description" id="post-description-master" style="
                            position: absolute;
                            z-index: 999;
                            left: 0;
                            bottom: 0;
                            text-align: left;
                            font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                            padding-bottom: 10px;
                            padding-left: 5px;
                            padding-top: 5px;
                            text-size-adjust: auto;
                            margin-right: 10px;
                            margin-bottom: 5px;
                            margin-left: 5px;
                            padding-right: 3px;
                            box-shadow: 3px -3px 0px 3px #00000052;
                            background-color: #8f3cb96b;
                            display: none;
                            /* background-color: #ff5c4ca3; */">
    
                            <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO</b></span>
    
                            <span id="post-description" style="
                            margin-left: 5px;
                            font-size: 15px;
                            font-size-adjust: inherit;
                            font-variant-caps: titling-caps;
                            font-weight: bold;
                            ">${newData[i]["Post Description"]}</span>
                        </div>
                        </div>
                    <!-- Safe zone ends -->
                        </div>
                </div>
            `
    
            //Grid.add function to properly add to grid
            wrapper.innerHTML = columnHTML;
            var columnElem = wrapper.children[0]; 
            grid.add([columnElem]);

          }
          else if (newData[i]["Post Type"] === "note") {
            var wrapper = document.createElement('div');
            var columnHTML = `
            <div class="item">
              <div class="item-content" id="post" data-type="${newData[i]["Post Type"]}" style="opacity: 1; transform: scale(1);">
              <!-- Safe zone, enter your custom markup -->

              <div class="notes-content" id = "notes-content" style= "
              width: 300px;
              height: 300px;
              color: white;
              background: rgb(19 191 247);
              text-shadow: 2px 2px 0px black;
              word-wrap: break-word;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              padding: 5px;
              overflow: hidden;
              ">
              <span class="textFitted" style="${newData[i]["Post Description"]}">
              ${newData[i]["Post Link"]}
              </span>
              </div>
                
              <!-- Safe zone ends -->
              </div>
            </div>
            `       
                         
            
        //Grid.add function to properly add to grid
        wrapper.innerHTML = columnHTML;
        var columnElem = wrapper.children[0]; 
        // console.log(columnElem.children[0].childNodes[3])
        grid.add([columnElem]);

        
            
          } else {

            var wrapper = document.createElement('div');
        
        
            var columnHTML = `
            <div class="item">
            <div class="item-content" id="post" data-type="${newData[i]["Post Type"]}" style="opacity: 1; transform: scale(1);">
                  <!-- Safe zone, enter your custom markup -->
                    <div class="link-content" id="link-master" style="
                    position: relative;
                    display: inline-block;">

                    <a href="${newData[i]["Post Link"]}">
                    <img src="${newData[i]["Post Image"]}">
                    </a>
                        <div class="post-description" id="post-description-master" style="
                            position: absolute;
                            z-index: 999;
                            left: 0;
                            bottom: 0;
                            text-align: left;
                            font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                            padding-bottom: 10px;
                            padding-left: 5px;
                            padding-top: 5px;
                            text-size-adjust: auto;
                            margin-right: 10px;
                            margin-bottom: 5px;
                            margin-left: 5px;
                            padding-right: 3px;
                            box-shadow: 3px -3px 0px 3px #00000052;
                            background-color: #8f3cb96b;
                            /* background-color: #ff5c4ca3; */">

                            <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>LINK</b></span>

                            <span id="post-description" style="
                            margin-left: 5px;
                            font-size: 15px;
                            font-size-adjust: inherit;
                            font-variant-caps: titling-caps;
                            font-weight: bold;
                            ">${newData[i]["Post Description"]}</span>
                        </div>
                        </div>
                    <!-- Safe zone ends -->
                        </div>
                </div>
            `

            //Grid.add function to properly add to grid
            wrapper.innerHTML = columnHTML;
            var columnElem = wrapper.children[0]; 
            grid.add([columnElem]);

          }
        } 
    })

    //Refresh the layout once page is loaded
      function respaceItems(){ 
        // textFit(document.getElementById('notes-content'), {minFontSize:14, maxFontSize: 50, multiLine: true})
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


//Moving Posts

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

          // When a drag starts — first get the indexes and info and put them in an array
          grid.on('dragInit', function(item, event){
            let gridItems = grid.getItems()
            console.log(gridItems)

            //This is where the notes text content is:
            // griditems[i]._element.childNodes[1].firstElementChild.childNodes[0].childNodes[0].nodeValue

            //This is where the data type is hidden:
            // griditems[i]._element.childNodes[1].attributes[2].nodeValue

            
            //Push [index, Post Link, Post Image, Post Description, Post Type] before move
            let i;
            for(i = 0; i < gridItems.length; i++ ){
              let postingType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue
              console.log(postingType)

              if(postingType === 'link'){

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotBeforeDrag.push([i, postLink , postImage, postDescription, postType])

              } else if (postingType === 'link-img'){
                console.log('not this guyyyy')

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotBeforeDrag.push([i, postLink , postImage, postDescription, postType])


              } else if(postingType === 'link-video'){

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotBeforeDrag.push([i, postLink , postImage, postDescription, postType])

              } else if (postingType === 'note'){

                let postLink = gridItems[i]._element.children[0].children[0].children[0].innerHTML
                let postDescription = gridItems[i]._element.children[0].children[0].children[0].attributes[1].nodeValue
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotBeforeDrag.push([i, postLink, null, postDescription, postType])


              }
            }

            console.log(gridItemSnapShotBeforeDrag);
      
          })

          let gridItemSnapShotAfterDrag = [];
          let moveDataToSave = [];

          //After drag is done, push the new positions and content and put them into an array to compare
          grid.on('dragReleaseEnd', function(item){
            let gridItems = grid.getItems()


            //Meta data is now hidden into the posts themselves
            //This is the location of the hidden metadata: gridItems[0]._element.children[0].children[0].innerHTML
            // console.log(gridItems[0]._element.children[0].children[0].innerHTML)

            
            //Push [index, link, image, description, type] after move
            let i;
            for(i = 0; i < gridItems.length; i++ ){
              let postingType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue
              console.log(postingType)

              if(postingType === 'link'){

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotAfterDrag.push([i, postLink , postImage, postDescription, postType])

              } else if (postingType === 'link-img'){
                console.log('not this guyyyy')

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotAfterDrag.push([i, postLink , postImage, postDescription, postType])


              } else if(postingType === 'link-video'){

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotAfterDrag.push([i, postLink , postImage, postDescription, postType])

              } else if (postingType === 'note'){

                let postLink = gridItems[i]._element.children[0].children[0].children[0].innerHTML
                let postDescription = gridItems[i]._element.children[0].children[0].children[0].attributes[1].nodeValue
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotAfterDrag.push([i, postLink, null, postDescription, postType])


              }
            }
           

            console.log(gridItemSnapShotAfterDrag)


            //Compare the two before/after move arrays based on Post Link value [1] — if a URL is different (meaning it has been moved), that new index position, link, image, description and type are pushed to an array to send to server
            let k;
            for(k = 0; k < gridItems.length; k++){
              if(gridItemSnapShotBeforeDrag[k][1] !== gridItemSnapShotAfterDrag[k][1]){
                console.log('different')
                moveDataToSave.push([gridItemSnapShotAfterDrag[k][0], gridItemSnapShotAfterDrag[k][1], gridItemSnapShotAfterDrag[k][2], gridItemSnapShotAfterDrag[k][3], gridItemSnapShotAfterDrag[k][4]])
              }
            }

            
            console.log(gridItemSnapShotBeforeDrag)
            console.log(gridItemSnapShotAfterDrag)
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
          // let urlInput = document.getElementById('url-input')

          // addLinkButton.style.display = "none";
          // addNoteButton.style.display = "none";
          // urlInput.style.display = "none";

          addSomethingButton.addEventListener('click', bringInSubmissionQuestions)

  

          //Adding new post to page for all clients simultaneously
          socket.on('someoneElseAddedNewPost', function(data){
            console.log(data);

            if(data[3] === "link-video"){

            //Create html element with new GIF URL in it
            var wrapper = document.createElement('div');
            var columnHTML = `
            <div class="item">
            <div class="item-content" id="post" data-type="${data[3]}" style="opacity: 1; transform: scale(1);">
                  <!-- Safe zone, enter your custom markup -->
                    <div class="link-content" id="link-master" style="
                    position: relative;
                    display: inline-block;">

                    <a href="${data[0]}">
                    <img src="${data[1]}">
                    </a>
                        <div class="post-description" id="post-description-master" style="
                            position: absolute;
                            z-index: 999;
                            left: 0;
                            bottom: 0;
                            text-align: left;
                            font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                            padding-bottom: 10px;
                            padding-left: 5px;
                            padding-top: 5px;
                            text-size-adjust: auto;
                            margin-right: 10px;
                            margin-bottom: 5px;
                            margin-left: 5px;
                            padding-right: 3px;
                            box-shadow: 3px -3px 0px 3px #00000052;
                            background-color: #8f3cb96b;
                            /* background-color: #ff5c4ca3; */">

                            <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO</b></span>

                            <span id="post-description" style="
                            margin-left: 5px;
                            font-size: 15px;
                            font-size-adjust: inherit;
                            font-variant-caps: titling-caps;
                            font-weight: bold;
                            ">${data[2]}</span>
                        </div>
                        </div>
                    <!-- Safe zone ends -->
                        </div>
                </div>
            `

            } else if(data[3] === "link-img"){
              //Create html element with new GIF URL in it
              var wrapper = document.createElement('div');
              var columnHTML = `

                              <div class="item">
                              <div class="item-content" id="post" data-type="${data[3]}" style="opacity: 1; transform: scale(1);">
                                    <!-- Safe zone, enter your custom markup -->
                                      <div class="link-content" id="link-master" style="
                                      position: relative;
                                      display: inline-block;">
  
                                      <a href="${data[0]}">
                                      <img src="${data[1]}">
                                      </a>
                                          <div class="post-description" id="post-description-master" style="
                                              position: absolute;
                                              z-index: 999;
                                              left: 0;
                                              bottom: 0;
                                              text-align: left;
                                              font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                                              padding-bottom: 10px;
                                              padding-left: 5px;
                                              padding-top: 5px;
                                              text-size-adjust: auto;
                                              margin-right: 10px;
                                              margin-bottom: 5px;
                                              margin-left: 5px;
                                              padding-right: 3px;
                                              box-shadow: 3px -3px 0px 3px #00000052;
                                              background-color: #8f3cb96b;
                                              display:none;
                                              /* background-color: #ff5c4ca3; */">
  
                                              <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO</b></span>
  
                                              <span id="post-description" style="
                                              margin-left: 5px;
                                              font-size: 15px;
                                              font-size-adjust: inherit;
                                              font-variant-caps: titling-caps;
                                              font-weight: bold;
                                              ">${data[2]}</span>
                                          </div>
                                          </div>
                                      <!-- Safe zone ends -->
                                          </div>
                                  </div>
                              `
            } 

            else if(data[3] === "note"){

              var wrapper = document.createElement('div');
              var columnHTML = `
              <div class="item">
                <div class="item-content" id="post" data-type="${data[3]}" style="opacity: 1; transform: scale(1);">
                <!-- Safe zone, enter your custom markup -->
  
                <div class="notes-content" id = "notes-content" style= "
                width: 300px;
                height: 300px;
                color: white;
                background: rgb(19 191 247);
                text-shadow: 2px 2px 0px black;
                word-wrap: break-word;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                padding: 5px;
                overflow: hidden;
                ">
                <span class="textFitted" style="${data[2]}">
                ${data[0]}
                </span>
                </div>
                  
                <!-- Safe zone ends -->
                </div>
              </div>
              `    }  else {
                            //Create html element with new GIF URL in it
            var wrapper = document.createElement('div');
            var columnHTML = `
            <div class="item">
            <div class="item-content" id="post" data-type="${data[3]}" style="opacity: 1; transform: scale(1);">
                  <!-- Safe zone, enter your custom markup -->
                    <div class="link-content" id="link-master" style="
                    position: relative;
                    display: inline-block;">

                    <a href="${data[0]}">
                    <img src="${data[1]}">
                    </a>
                        <div class="post-description" id="post-description-master" style="
                            position: absolute;
                            z-index: 999;
                            left: 0;
                            bottom: 0;
                            text-align: left;
                            font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                            padding-bottom: 10px;
                            padding-left: 5px;
                            padding-top: 5px;
                            text-size-adjust: auto;
                            margin-right: 10px;
                            margin-bottom: 5px;
                            margin-left: 5px;
                            padding-right: 3px;
                            box-shadow: 3px -3px 0px 3px #00000052;
                            background-color: #8f3cb96b;
                            /* background-color: #ff5c4ca3; */">

                            <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>LINK</b></span>

                            <span id="post-description" style="
                            margin-left: 5px;
                            font-size: 15px;
                            font-size-adjust: inherit;
                            font-variant-caps: titling-caps;
                            font-weight: bold;
                            ">${data[2]}</span>
                        </div>
                        </div>
                    <!-- Safe zone ends -->
                        </div>
                </div>
            `

              } 
                           
              
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




// Submissions HTML Builds

      //Submission Overlay Loads Up
      function bringInSubmissionQuestions(e){
        e.preventDefault();

        let overlay = document.createElement('div');
        let overlayHTML = `
        <div class="overlay" id="overlay" style="
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
              
              <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px;
                right: 20px; font-size: 20px;">
              <i class="fas fa-times-circle" aria-hidden="true"></i>
              </button>




                <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 3%; margin: 2%;">Add Link!</button>
                <button type="button" class="btn btn-primary btn-lg" id="add-note" style="padding: 3%; margin: 2%;">Add Note!</button>
                <button type="button" class="btn btn-primary btn-lg" id="live-stream" style="padding: 3%; margin: 2%;">Stream!</button>
                
                </div>
                
                
            </div>
        `

        overlay.innerHTML = overlayHTML;

        document.getElementById('master-div').appendChild(overlay)
        
        //Animate Overlay In
        document.getElementById('overlay').animate([
          // keyframes
          { transform: 'translateX(600px)' }, 
          { transform: 'translateX(0px)' }
        ], 300);

        
        console.log(document.getElementsByTagName('button'))

        //"Add Submission" Button Disappears
        document.getElementById('submission-start').style = "display: none;"

        //Exit button clicked
        document.getElementById('exit-button').addEventListener('click', exitButton)

        //Add Notes button clicked
        document.getElementById('add-note').addEventListener('click', addNote)
        
        //Add link button clicked
        document.getElementById('add-link').addEventListener('click', addLink)

        //Live Stream button Clicked
        document.getElementById('live-stream').addEventListener('click', addLiveStream)
      }




      //Exit Button
      function exitButton(){
        console.log('exit button')

       //Animate the overlay to the right side
       document.getElementById('overlay').animate([
       // keyframes
       { transform: 'translateX(0px)' }, 
       { transform: 'translateX(600px)' }
       ], 300);
                      
       //Remove Overlay on timeout once it is slid over
       function removeOverlay(){
       document.getElementById('overlay').remove()
       document.getElementById('submission-start').style = "float: right; padding: 10px; display: block;"}
                      
       setTimeout(removeOverlay, 300);
      }

      //Back Button
      function backButton(e){
        console.log('back button')
        e.preventDefault();

        let overlayHTML = `
       
              <div id="wrapper" style=" 
              width: 100%;
              height: 100%;
              border: 2px solid lightblue;
              display: flex;
              flex-direction: column;
              justify-content:center;
              align-items: center;
              justify-content: center;">
              
              <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px;
                right: 20px; font-size: 20px;">
              <i class="fas fa-times-circle" aria-hidden="true"></i>
              </button>


                <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 3%; margin: 2%;">Add Link!</button>
                <button type="button" class="btn btn-primary btn-lg" id="add-note" style="padding: 3%; margin: 2%;">Add Note!</button>
                <button type="button" class="btn btn-primary btn-lg" id="live-stream" style="padding: 3%; margin: 2%;">Stream!</button>
                </div>
        `

        overlay.innerHTML = overlayHTML;
        
        
        console.log(document.getElementsByTagName('button'))

        //"Add Submission" Button Disappears
        document.getElementById('submission-start').style = "display: none;"



        //Exit button clicked
        document.getElementById('exit-button').addEventListener('click', exitButton)

        //Add Notes button clicked
        document.getElementById('add-note').addEventListener('click', addNote)
        
        //Add link button clicked
        document.getElementById('add-link').addEventListener('click', addLink)

        //Live Stream button Clicked
        document.getElementById('live-stream').addEventListener('click', addLiveStream)
      }

      //Add Notes  
      function addNote(){
        console.log('notessss')
              overlay.innerHTML = `
                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;
                     font-family: helvetica, sans-serif;">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                     
                     <span class = "note-preview-span" style="position: relative; padding-right: 160px;
                     color: white; font-family: Helvetica Neue; margin-top: 25px;"> 
                     Your Note Preview:</span>

                     <div class="notes-preview" id = "notes-content-preview" style= "
                     width: 300px;
                     height: 300px;
                     margin: 10px;
                     color: white;
                     background: rgb(19 191 247);
                     text-shadow: 2px 2px 0px black;
                     word-wrap: break-word;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     font-weight: bold;
                     padding: 5px;
                     overflow: hidden;
                     text-align: center;
                     ">

                     
                     
                     </div>

                     <textarea id="note-input-Box" placeholder="What do you want to say?" style="height: 20%; width: 50%;"></textarea>
                     <button type="button" class="btn btn-primary btn-lg" id="Add Note" style="padding: 1%; margin: 2%;">Submit Note?</button>


                     </div>
                     `;

                     //Exit Button Clicked
                     document.getElementById('exit-button').addEventListener('click', exitButton)

                     //Back Button Clicked
                     document.getElementById('back-button').addEventListener('click', backButton)
                     

                     //This gets the boxes input value and inserts into the box (with textFit for resizing)
                     document.getElementById('note-input-Box').addEventListener('keyup', function(e){
                      console.log(document.getElementById('note-input-Box').value)
                      let notesPreview = document.getElementById('notes-content-preview')
                      notesPreview.textContent = `
                      ${document.getElementById('note-input-Box').value}
                      `
                      textFit(document.getElementById('notes-content-preview'), {minFontSize:14, maxFontSize: 50, multiLine: true})
                     })


                     //This is the button click that adds the note to the grid and the database
                     document.getElementById('Add Note').addEventListener('click', function(e){
                      //  console.log('yeeeeee')
                      //  console.log(document.getElementById('notes-content').innerHTML)
                       //Create html element
                       var wrapper = document.createElement('div');
                       var columnHTML = `
                       <div class="item">
                           <div class="item-content" id= "post" data-type="note">
                           <!-- Safe zone, enter your custom markup -->

                           <div class="notes-content" id = "notes-content" style= "
                            width: 300px;
                            height: 300px;
                            color: white;
                            background: rgb(19 191 247);
                            text-shadow: 2px 2px 0px black;
                            word-wrap: break-word;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: bold;
                            padding: 5px;
                            overflow: hidden;
                            ">
                           ${document.getElementById('notes-content-preview').innerHTML}
                           </div>

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
                         //[Post Link, Post Image, Post Description (for notes this is font size and style), Post Type]

                         let newPostInfo = [columnElem.children[0].childNodes[3].children[0].innerHTML, null, columnElem.children[0].children[0].children[0].attributes[1].value , columnElem.children[0].attributes[2].nodeValue]
                        
                         //This is how to access the post data type
                        //  console.log(columnElem.children[0].attributes[2].nodeValue)
                        //This is how to access the link font:
                        // [0]._element.children[0].children[0].children[0].attributes[1].value

                        //  console.log(columnElem.children[0].children[0].children[0].attributes[1].value)
                         //This is where the text content of a notes post lives:
                        //  console.log(columnElem.children[0].childNodes[3].children[0].innerHTML)
                         console.log(newPostInfo)


                         

                         socket.emit('postAddedUpdateDatabase', newPostInfo);

                        document.getElementById('overlay').remove();
                        document.getElementById('submission-start').style = "float: right; padding: 10px; display: block;"


                     })
                    }


            //Add Links
            function addLink(){
              console.log('linksss')

              overlay.innerHTML = `
                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                     <input type="text" id="link-URL-input-Box" placeholder="Copy/Paste a link here" style="height: 10%; width: 50%;">
                     <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 1%; margin: 2%;">---></button>


                     </div>`;

               //Exit Button Clicked
               document.getElementById('exit-button').addEventListener('click', exitButton)

              //Back Button Clicked
              document.getElementById('back-button').addEventListener('click', backButton)                     

                
                //Once URL is copied and pasted and next button is clicked
                document.getElementById('link-URL-input-Box').addEventListener('paste', function(e){
                  e.preventDefault()
                  console.log(e);
                  let paste = (event.clipboardData || window.clipboardData).getData('text');
                  console.log(paste);
                  e.path[0].placeholder = paste;

                  //A loader runs on a timer just before sending the link
                  function loader(){
                    let wrapper = document.getElementById('wrapper')
                    wrapper.innerHTML = `

                     <div class="loader" id= "post-loader" style = "  border: 16px solid #f3f3f3; /* Light grey */
                     border-top: 16px solid #3498db; /* Blue */
                     border-radius: 50%;
                     width: 120px;
                     height: 120px;
                     animation: spin 2s linear infinite;"></div>
                    `
                    document.getElementById('post-loader').animate([
                      {transform: 'rotate(0deg)'},
                      {transform:'rotate(360deg)'}
                    ],{
                      duration: 1000,
                      iterations: Infinity
                    })
                    
                  }

                  setTimeout(loader, 300);

                  //The Link is sent to the server
                  function submitLinkToServer(){
                    let url = paste
                    if (url.includes(videoURL)){
                      console.log('IT DOES CONTAIN YOUTUBE')
                    }
                    socket.emit('linkSubmit', url)
                  }

                  setTimeout(submitLinkToServer, 1000)
                
                })
                
                


                // This is the Post Preview
                socket.on('newPostData', function(metadata){
                  let linkType;
                  console.log(metadata)

                  //These are the different preview builds
                  if(metadata === 'no dice'){ console.log('not gonna happen!')
                  overlay.innerHTML = `
                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>
                      
                     <span id = "error-text" style="color: white; font-family:Helvetica Neue;">Unable to create a post from your pasted URL!</span>

                     <textarea id="link-description-input-Box" placeholder="Post Description" style="height: 20%; width: 50%; display: none;">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%; display: none;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;">Submit Post?</button>
                     </div>
                     
                     </div>
                     `   
                     
                     
              }             

                  else if (metadata.url.includes(videoURL)){

                  overlay.innerHTML = `
                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>                     

                    <!-- Post Preview --!>
                     <div class="new-post" style= "
                     width: 300px;
                     margin: 5px;
                     color: white;">

                     Post Preview:<p></p>
                     <!-- Safe zone, enter your custom markup -->
                     <div class="link-content" id="link-master" style="
                     position: relative;
                     display: inline-block;">

                     <a href="${metadata.url}">
                     <img src="${metadata.image}">
                     </a>
                         <div class="post-description" id="post-description-master" style="
                             position: absolute;
                             z-index: 999;
                             left: 0;
                             bottom: 0;
                             text-align: left;
                             font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                             padding-bottom: 10px;
                             padding-left: 5px;
                             padding-top: 5px;
                             text-size-adjust: auto;
                             margin-right: 10px;
                             margin-bottom: 5px;
                             margin-left: 5px;
                             padding-right: 3px;
                             box-shadow: 3px -3px 0px 3px #00000052;
                             background-color: #8f3cb96b;
                             /* background-color: #ff5c4ca3; */">

                             <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO </b></span>

                             <span id="post-description-preview" style="
                             margin-left: 5px;
                             font-size: 15px;
                             font-size-adjust: inherit;
                             font-variant-caps: titling-caps;
                             font-weight: bold;
                             ">${metadata.title}</span>
                         </div>
                         </div>
                     <!-- Safe zone ends -->
                     </div>
                     <!-- Post Preview --!>

                     <textarea id="link-description-input-Box" placeholder="Post Description" style="height: 20%; width: 50%;">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;">Submit Post?</button>
                     </div>
                   
                     </div>`
                    
                    linkType = 'link-video'
                  } 
                     
                     else if(metadata.url.includes(imgURL)){
                       console.log("wowww")
                       overlay.innerHTML = `
                          <div id="wrapper" style=" 
                          width: 100%;
                          height: 100%;
                          border: 2px solid lightblue;
                          display: flex;
                          flex-direction: column;
                          justify-content:center;
                          align-items: center;
                          justify-content: center;">

                          <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                          <i class="fas fa-times-circle" aria-hidden="true"></i>
                          </button>
     
                          <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                          <i class="fas fa-arrow-alt-circle-left"></i>
                          </button>

                          <!-- Post Preview --!>
                          <div class="new-post" style= "
                          width: 300px;
                          margin: 5px;
                          color: white;">

                          Post Preview:<p></p>
                          <!-- Safe zone, enter your custom markup -->
                          <div class="link-content" id="link-master" style="
                          position: relative;
                          display: inline-block;">

                     <a href="${metadata.url}">
                     <img src="${metadata.image}">
                     </a>
                         <div class="post-description" id="post-description-master" style="
                             position: absolute;
                             z-index: 999;
                             left: 0;
                             bottom: 0;
                             text-align: left;
                             font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                             padding-bottom: 10px;
                             padding-left: 5px;
                             padding-top: 5px;
                             text-size-adjust: auto;
                             margin-right: 10px;
                             margin-bottom: 5px;
                             margin-left: 5px;
                             padding-right: 3px;
                             box-shadow: 3px -3px 0px 3px #00000052;
                             background-color: #8f3cb96b;
                             display: none;
                             /* background-color: #ff5c4ca3; */">

                             <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO </b></span>

                             <span id="post-description-preview" style="
                             margin-left: 5px;
                             font-size: 15px;
                             font-size-adjust: inherit;
                             font-variant-caps: titling-caps;
                             font-weight: bold;
                             ">${metadata.title}</span>
                         </div>
                         </div>
                     <!-- Safe zone ends -->
                     </div>
                     <!-- Post Preview --!>

                     <textarea id="link-description-input-Box" placeholder="Post Description" style="height: 20%; width: 50%; display: none;">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;">Submit Post?</button>
                     </div>
                   
                     </div>`

                     } 
                     
                     else {
                       console.log('link normale')
                       overlay.innerHTML = `
                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                    <!-- Post Preview --!>
                     <div class="new-post" style= "
                     width: 300px;
                     margin: 5px;
                     color: white;">

                     Post Preview:<p style="
                     margin: 5px;
                     "></p>
                     <!-- Safe zone, enter your custom markup -->
                     <div class="link-content" id="link-master" style="
                     position: relative;
                     display: inline-block;">

                     <a href="${metadata.url}">
                     <img src="${metadata.image}">
                     </a>
                         <div class="post-description" id="post-description-master" style="
                             position: absolute;
                             z-index: 999;
                             left: 0;
                             bottom: 0;
                             text-align: left;
                             font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                             padding-bottom: 10px;
                             padding-left: 5px;
                             padding-top: 5px;
                             text-size-adjust: auto;
                             margin-right: 10px;
                             margin-bottom: 5px;
                             margin-left: 5px;
                             padding-right: 3px;
                             box-shadow: 3px -3px 0px 3px #00000052;
                             background-color: #8f3cb96b;
                             /* background-color: #ff5c4ca3; */">

                             <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>LINK</b></span>

                             <span id="post-description-preview" style="
                             margin-left: 5px;
                             font-size: 15px;
                             font-size-adjust: inherit;
                             font-variant-caps: titling-caps;
                             font-weight: bold;
                             ">${metadata.title}</span>
                         </div>
                         </div>
                     <!-- Safe zone ends -->
                     </div>
                     <!-- Post Preview --!>

                     <span style="margin: 2px; padding-right: 175px; color: white;">Post Description: </span>

                     <textarea id="link-description-input-Box" placeholder="Post Description" style="height: 20%; width: 50%;">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;">Submit Post?</button>
                     </div>
                   
                     </div>`
                     }

                     //Exit Button Clicked
                     document.getElementById('exit-button').addEventListener('click', exitButton)

                     //Back Button Clicked
                     document.getElementById('back-button').addEventListener('click', backButton)

                     //Post Description Preview Input
                     document.getElementById('link-description-input-Box').addEventListener('keyup', function(e){
                       
                      document.getElementById('post-description-preview').textContent = document.getElementById('link-description-input-Box').value;

                     })
                     

                     //Clicking "Submit Link" and submitting link
                     document.getElementById('submit-link').addEventListener('click', function(e){
                      //  console.log('woahhhh')

                      //Define linkType
                      if(metadata.url.includes(videoURL)){
                        linkType = "link-video"
                      } else if(metadata.url.includes(imgURL || ".gif")){
                        linkType = "link-img"
                      } else {
                        linkType = "link"
                      }
                      console.log(linkType)

                           //Create html element
                            var wrapper = document.createElement('div');
                            // <a href = "${metadata.url}">
                            //     <img src="${metadata.image}"></img></a>
                            if(linkType === "link-video"){
                            var columnHTML = `

                            <div class="item">
                            <div class="item-content" id="post" data-type="${linkType}" style="opacity: 1; transform: scale(1);">
                                  <!-- Safe zone, enter your custom markup -->
                                    <div class="link-content" id="link-master" style="
                                    position: relative;
                                    display: inline-block;">

                                    <a href="${metadata.url}">
                                    <img src="${metadata.image}">
                                    </a>
                                        <div class="post-description" id="post-description-master" style="
                                            position: absolute;
                                            z-index: 999;
                                            left: 0;
                                            bottom: 0;
                                            text-align: left;
                                            font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                                            padding-bottom: 10px;
                                            padding-left: 5px;
                                            padding-top: 5px;
                                            text-size-adjust: auto;
                                            margin-right: 10px;
                                            margin-bottom: 5px;
                                            margin-left: 5px;
                                            padding-right: 3px;
                                            box-shadow: 3px -3px 0px 3px #00000052;
                                            background-color: #8f3cb96b;
                                            /* background-color: #ff5c4ca3; */">

                                            <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO</b></span>

                                            <span id="post-description" style="
                                            margin-left: 5px;
                                            font-size: 15px;
                                            font-size-adjust: inherit;
                                            font-variant-caps: titling-caps;
                                            font-weight: bold;
                                            ">${document.getElementById('link-description-input-Box').value}</span>
                                        </div>
                                        </div>
                                    <!-- Safe zone ends -->
                                        </div>
                                </div>
                            `} else if(linkType === "link-img"){
                              console.log('gifff post!')
                              var columnHTML = `

                              <div class="item">
                              <div class="item-content" id="post" data-type="${linkType}" style="opacity: 1; transform: scale(1);">
                                    <!-- Safe zone, enter your custom markup -->
                                      <div class="link-content" id="link-master" style="
                                      position: relative;
                                      display: inline-block;">
  
                                      <a href="${metadata.url}">
                                      <img src="${metadata.image}">
                                      </a>
                                          <div class="post-description" id="post-description-master" style="
                                              position: absolute;
                                              z-index: 999;
                                              left: 0;
                                              bottom: 0;
                                              text-align: left;
                                              font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                                              padding-bottom: 10px;
                                              padding-left: 5px;
                                              padding-top: 5px;
                                              text-size-adjust: auto;
                                              margin-right: 10px;
                                              margin-bottom: 5px;
                                              margin-left: 5px;
                                              padding-right: 3px;
                                              box-shadow: 3px -3px 0px 3px #00000052;
                                              background-color: #8f3cb96b;
                                              display:none;
                                              /* background-color: #ff5c4ca3; */">
  
                                              <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>VIDEO</b></span>
  
                                              <span id="post-description" style="
                                              margin-left: 5px;
                                              font-size: 15px;
                                              font-size-adjust: inherit;
                                              font-variant-caps: titling-caps;
                                              font-weight: bold;
                                              ">${document.getElementById('link-description-input-Box').value}</span>
                                          </div>
                                          </div>
                                      <!-- Safe zone ends -->
                                          </div>
                                  </div>
                              `
                              
                            } else {
                              var columnHTML = 
                              `<div class="item">
                              <div class="item-content" id="post" data-type="${linkType}" style="opacity: 1; transform: scale(1);">
                              <!-- Safe zone, enter your custom markup -->
                              <div class="link-content" id="link-master" style="
                              position: relative;
                              display: inline-block;">

                              <a href="${metadata.url}">
                              <img src="${metadata.image}">
                              </a>
                                  <div class="post-description" id="post-description-master" style="
                                      position: absolute;
                                      z-index: 999;
                                      left: 0;
                                      bottom: 0;
                                      text-align: left;
                                      font-family: interface, &quot;Helvetica Neue&quot;, helvetica, sans-serif;
                                      padding-bottom: 10px;
                                      padding-left: 5px;
                                      padding-top: 5px;
                                      text-size-adjust: auto;
                                      margin-right: 10px;
                                      margin-bottom: 5px;
                                      margin-left: 5px;
                                      padding-right: 3px;
                                      box-shadow: 3px -3px 0px 3px #00000052;
                                      background-color: #8f3cb96b;
                                      /* background-color: #ff5c4ca3; */">

                                      <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>LINK</b></span>

                                      <span id="post-description" style="
                                      margin-left: 5px;
                                      font-size: 15px;
                                      font-size-adjust: inherit;
                                      font-variant-caps: titling-caps;
                                      font-weight: bold;
                                      ">${metadata.title}</span>
                                  </div>
                                  </div>
                              <!-- Safe zone ends -->
                              </div>
                              </div>`
                              
                            }
                            

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

                              console.log(columnElem.children[0].attributes[2].nodeValue)
   
                              //[Post Content, Post Type]
                              // let newPostInfo = [columnElem.innerHTML, columnElem.children[0].attributes[2].nodeValue]
                              
                              //NEW [Post Link, Post Image, Post Description, Post Type]
                              let newPostInfo = [metadata.url, metadata.image, document.getElementById('link-description-input-Box').value, linkType]
                              console.log(newPostInfo)

                              socket.emit('postAddedUpdateDatabase', newPostInfo);

                              document.getElementById('overlay').remove();
                              document.getElementById('submission-start').style = "float: right; padding: 10px; display: block;"

                          })
                     })



            }

            //Add LiveStream function
            function addLiveStream(){

              console.log('notessss')
              overlay.innerHTML = `
                     <div id="wrapper" style=" 
                     width: 100%;
                     height: 100%;
                     border: 2px solid lightblue;
                     display: flex;
                     flex-direction: column;
                     justify-content:center;
                     align-items: center;
                     justify-content: center;
                     font-family: helvetica, sans-serif;">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                     <div id = "video-grid"></div>

                     <button type = "button" class="btn btn-primary" id="start-stream-button">Start The Stream?</button>

                     <canvas id = "thumbnail" style = "display:none;"></canvas>
                     

                
                     </div>

                     `;

                     //Exit Button Clicked
                     document.getElementById('exit-button').addEventListener('click', exitButton)

                     //Back Button Clicked
                     document.getElementById('back-button').addEventListener('click', backButton)

                     //Getting Video
                     let videoGrid = document.getElementById('video-grid')
                     let startStreamButton = document.getElementById('start-stream-button')

                     //Create Peer
                     var peer = new Peer();

                     peer.on('open', function(id) {
                      console.log('My peer ID is: ' + id);
                    });



                     navigator.mediaDevices.getUserMedia({
                      video: true,
                      audio: true
                      //From here we can use the stream
                      }).then(stream => {
                    
                        //This code puts the stream on your preview page
                        let myVideo = document.createElement('video')
                        myVideo.muted = true;
                        myVideo.style = "width: 400px;"
                        myVideo.id = "video-play"
                        myVideo.srcObject = stream;
                        videoGrid.append(myVideo)
                        myVideo.play()

                        console.log(videoGrid)
                        
                        console.log(stream)

                        //Posting the Stream
                        startStreamButton.addEventListener('click', function(){
                          // var wrapper = document.createElement('div');
                          console.log('heyyy')
                          console.log(stream)

                          //Taking screenshot of Stream
                          let video2 = document.getElementById("video-play");
                          let canvas = document.getElementById('thumbnail')
                          let width = '200px'
                          let height = '200px'
                          var context = canvas.getContext('2d');
                          context.drawImage(video2, 10, 10);
                          var data = canvas.toDataURL('image/png');
                          console.log(data)
                         
          
          
                          var columnHTML = `
                          <div class="item">
                          <div class="item-content" id="post" data-type="live-stream" style="opacity: 1; transform: scale(1);">
                                <!-- Safe zone, enter your custom markup -->
                                <div id= "video-grid">
                                <img src="${data}"></img>
                                </div>
                                  <!-- Safe zone ends -->
                                      </div>
                              </div>
                            `

                         
                          //NOTE: If I want to add my stream to the grid, it all must be done after grid.add is called
                          //Grid.add function to properly add to grid
                          wrapper.innerHTML = columnHTML;
                          var columnElem = wrapper.children[0]; 
                          console.log(wrapper)
                          grid.add([columnElem]);



                        })

                    
                      })


            }
          
          

          
             


          