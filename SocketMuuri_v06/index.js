//Declaring constants

// const Peer = require("peerjs");

// const { link } = require("fs");


const videoURL = "youtube.com" || "youtu.be";
const imgURL = ".gif"

var socket = io();


      var grid = new Muuri('.grid', {
      dragEnabled: true,
      layout: {},
      dragHammerSettings: {
        touchAction: 'pan-y'
      },
      dragContainer: document.body,
      dragStartPredicate: (item, hammerEvent) => {

        // console.log(hammerEvent.pointerType);
        // console.log(hammerEvent.distance)

        // For mouse interactions dragging starts at a distance greater than .001
        if (hammerEvent.pointerType === 'mouse' && hammerEvent.distance > .001) {
          this.isResolved = true;
          return true;
        }
        // For other type of interactions (touch) let's wait 500ms before dragging starts.
        else {
          if (hammerEvent.deltaTime >= 500) {
            this.isResolved = true;
            return true;
          }
        }

       
    
      }

      });


      //Create username based on emojis
      let emojis = [
        '😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
      ];


      const username = emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)]
      
      console.log(username)



//On loadup

      //Receive Initial Data and build
      socket.on('initial', function(newData){
      // console.log(newData[9]["Post Content"]);
      // grid.sort(newData);
      console.log(newData);

      // let initialGifs = Array.from(newData);
      // // console.log(initialGifs)
       
      //This if statement makes sure that content won't be re-loaded if there is already content on the page
      if(document.getElementById('main-grid').innerhtml === undefined){

        
        
  
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
                  <img src="${newData[i]["Post Image"]}" id="${[i]}">
                  </a>
                      <div class="post-description" id="post-description-master">

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
                    <img src="${newData[i]["Post Image"]}" id="${[i]}">
                    
                    </a>
                    
                        <div class="post-description" id="post-description-master" style = "display: none;">
    
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
              height: 300px;
              color: white;
              background: rgb(19 191 247);
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

        
            
          } else if(newData[i]["Post Type"] === 'live-stream'){

            var wrapper = document.createElement('div');
        
        
            var columnHTML = `
            <div class="item">
            <div class="item-content" id="post" data-type="${newData[i]["Post Type"]}" style="opacity: 1; transform: scale(1);">
                  <!-- Safe zone, enter your custom markup -->

                    <div class="link-content" id="${newData[i]["Post Link"]}" data-type="${newData[i]["Post Link"]}" style="
                    position: relative;
                    display: inline-block;">
                    
                    <a href="${newData[i]["Post Link"]}">
                    <img src="${newData[i]["Post Image"]}" id="${[i]}">
                    </a>

                    <div id = "live-stream-description" style= "display:none;">${newData[i]["Post Description"]}</div>
                        
                        
                        </div>

                        <div class="Rec"></div>

                    <!-- Safe zone ends -->
                        </div>
                </div>
            `
    
            //Grid.add function to properly add to grid
            wrapper.innerHTML = columnHTML;
            var columnElem = wrapper.children[0]; 
            grid.add([columnElem]);

          }
          
          else {

            var wrapper = document.createElement('div');
        
        
            var columnHTML = `
            <div class="item">
            <div class="item-content" id="post" data-type="${newData[i]["Post Type"]}" style="opacity: 1; transform: scale(1);">
                  <!-- Safe zone, enter your custom markup -->
                    <div class="link-content" id="link-master" style="
                    position: relative;
                    display: inline-block;">

                    <a href="${newData[i]["Post Link"]}">
                    <img src="${newData[i]["Post Image"]}" id="${[i]}">
                    </a>
                        <div class="post-description" id="post-description-master">

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

          //If NSFW - add the blur feature
          if(newData[i]["Post Type"].includes("-nsfw")){
            console.log('I SEE SOMETHING NSFW!')
            document.getElementById([i]).style = "filter: blur(8px);"
          }
        }
      } else if(document.getElementById('main-grid').innerhtml !== undefined) {
        console.log('things are already here')
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
      setTimeout(respaceItems, 700);

      
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

              if(postingType === 'link' || 'link-nsfw'){

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotBeforeDrag.push([i, postLink , postImage, postDescription, postType])

              } else if (postingType === 'link-img' || 'link-img-nsfw'){
                console.log('not this guyyyy')

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotBeforeDrag.push([i, postLink , postImage, postDescription, postType])


              } else if(postingType === 'link-video' || 'link-video-nsfw'){

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
              else if (postingType === 'live-stream'){

                let postLink = gridItems[i]._element.childNodes[1].children[0].attributes[1].value.split(',');
                // console.log(postLink)
                let postDescription = null
                let postImage = gridItems[i]._element.children[0].children[0].children[0].children[0].currentSrc;
                let postType = postingType;

                gridItemSnapShotBeforeDrag.push([i, postLink, postImage, postDescription, postType])
                
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

              if(postingType === 'link' || 'link-nsfw'){

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotAfterDrag.push([i, postLink , postImage, postDescription, postType])

              } else if (postingType === 'link-img' || 'link-img-nsfw'){
                console.log('not this guyyyy')

                let postDescription = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[1].children[1].innerText
                let postLink = gridItems[i]._element.childNodes[1].children[0].lastChild.parentElement.children[0].href
                let postImage = gridItems[i]._element.childNodes[1].childNodes[3].childNodes[1].childNodes[1].currentSrc
                let postType = gridItems[i]._element.childNodes[1].attributes[2].nodeValue;

                gridItemSnapShotAfterDrag.push([i, postLink , postImage, postDescription, postType])


              } else if(postingType === 'link-video' || 'link-video-nsfw'){

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

              else if (postingType === 'live-stream'){

                let postLink = gridItems[i]._element.childNodes[1].children[0].attributes[1].value.split(',');
                // console.log(postLink)
                let postDescription = null
                let postImage = gridItems[i]._element.children[0].children[0].children[0].children[0].currentSrc;
                let postType = postingType;

                gridItemSnapShotAfterDrag.push([i, postLink, postImage, postDescription, postType])

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


//Clicking Posts - Post Buildout

      document.getElementById('main-grid').addEventListener('click', postBuildOut)

      function postBuildOut(e){
        e.preventDefault();
        // console.log('I`M CLICKING')
        console.log(e)
        console.log(e.composedPath())
        console.log(socket.id)

        document.body.style.overflow = 'hidden'

        //Post Type
       
        // let postType = e.path[3].attributes[2].nodeValue
        // let postTypeNote = e.path[1].attributes[2].nodeValue

        //Post Image
        // let postImage = e.path[2].childNodes[1].childNodes[1].src

        //Post Link
        // let postLink = e.path[2].childNodes[1].href

        //Post Description
        // if(!e.path[2].childNodes[3].childNodes[3].textContent === null){
        //   // let postDescription = e.path[2].childNodes[3].childNodes[3].textContent
        //   console.log('hey theres no description')
        // } 
        

        // //Post Description Type
        // let postDescriptionType = e.path[2].childNodes[3].childNodes[1].textContent


        let postLink = e.composedPath()[1].href || e.composedPath()[0].lastElementChild.outerText
        console.log(postLink)

        //Retrive Previous Messages from the Server
        socket.emit('retrieve-chat-messages', postLink)

        //When the buildout is opened, socket will join the specific chatroom based on the link URL
        let room = postLink;
        socket.emit('join-room', room, username)


        //If post is livestream emit from socket to get info
        if (e.composedPath()[3].attributes[2].nodeValue === "live-stream"){
          console.log('we got a livestream on our hands')

                    //Seperate out Socket ID and Peer ID from Link
                    let IdsPath = e.composedPath()[1].href
                    let IdsPathSplitSlash = IdsPath.split('/')
                    let IdsPathSplitComma = IdsPathSplitSlash[3].split(',')
                    console.log(IdsPathSplitComma)
          
                    //I need the socketID to emit directly to the person livestreaming
                    let OtherPeerId = IdsPathSplitComma[0]
                    let OtherSocketId = IdsPathSplitComma[1]

                    //This blocks the streamer from being able to enter into his own stream
                    if(OtherSocketId === socket.id){
                      console.log('hey! That is your own stream!')
                      return
                    } else {

        //The Post Description
        let postDescription = e.composedPath()[2].children[1].innerText

        let postBuildOutHTML = `
        <div id = "post-buildout-background">

        <button type="button" class="btn btn-primary" id="exit-button" >
        <i class="fas fa-times-circle" aria-hidden="true"></i>
        </button>


        <div id = "post-content-container">
          <div id = "post-buildout-description" >
          ${postDescription}
          </div>
          <div id = "post-buildout-image" >

          </div>

          <div id = "number-of-clients">

          </div>

          
          <div id = "messages-holder">
          <ul class="messages" id= "chat-messages"></ul>
          </div>
          <div id = "username-display">${username}</div>
          <input class="inputMessage" id = "chat-input"  placeholder="says...."></input>
          </div>

          </div>
          
        </div>
        `


        //Build Out Wrapper HTML
        var buildOutWrapper = document.createElement('div');
        buildOutWrapper.id = "post-buildout-wrapper"
        console.log(e.composedPath()[2].childNodes[3].textContent)
        



        buildOutWrapper.innerHTML = postBuildOutHTML

        document.getElementById('master-div').appendChild(buildOutWrapper)

        let videoGrid = document.getElementById('post-buildout-image')


        //Description
        // let liveStreamDescription = document.getElementById('live-stream-description')
        // let liveStreamDescriptionContent = document.createTextNode(e.path[2].childNodes[3].textContent)
        // console.log(liveStreamDescriptionContent)
        // liveStreamDescription.appendChild(liveStreamDescriptionContent)



          let visitorPeer = new Peer();

          //Once the page is open, it generates a PeerId for the person who wants to get the stream
          visitorPeer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            myVisitorPeerId = id;

            socket.emit('i-want-to-watch-livestream', myVisitorPeerId, OtherSocketId)
          
          })

          //The Person sending the stream sends back the info once a call is initiated, the stream plays in the windows
          visitorPeer.on('call', function(call){
            console.log('callll')
            call.answer();
            const video = document.createElement('video')
            video.id = "video-play"
            video.controls = true;
            // video.style = "width:100%; height:100%;"
            call.on('stream', function(stream){
              console.log(stream)
              video.srcObject = stream
              video.play().then(_ => {
                videoGrid.append(video)
              })

            } )

          })

          //When the stream has stopped
          socket.on('the-stream-has-stopped',function(data){
            console.log('hey - did my buddy stop streaming?')
            console.log(data)
            // visitorPeer.disconnect();
            document.getElementById('post-buildout-image').innerHTML =`
            <div id = "user-has-stopped-streaming">
            <span id = "user-has-stopped-span">The Stream has stopped</span>
            </div> 
            `
          })

        }

          
          
        }  else if (e.composedPath()[3].attributes[2].nodeValue === 'link-img') {

        //Post Image
        let postImage = e.composedPath()[2].childNodes[1].childNodes[1].src

        //The Post Description
        let postDescription = e.composedPath()[2].childNodes[3].childNodes[3].textContent

        //Build Out Wrapper HTML
        var buildOutWrapper = document.createElement('div');
        buildOutWrapper.id = "post-buildout-wrapper"

        let postLink = e.composedPath()[1].href

                //Retrive Previous Messages from the Server
                socket.emit('retrieve-chat-messages', postLink)

                //When the buildout is opened, socket will join the specific chatroom based on the link URL
                let room = postLink;
                socket.emit('join-room', room, username)

        let postBuildOutHTML = `
        <div id = "post-buildout-background">

        <button type="button" class="btn btn-primary" id="exit-button" >
        <i class="fas fa-times-circle" aria-hidden="true"></i>
        </button>


        <div id = "post-content-container">
          <div id = "post-buildout-description" >
          ${postDescription}
          </div>
          <div id = "post-buildout-image" >
            <a href ="${postLink}">
            <img src = "${postImage}"></img>
            </a>
          </div>

          <div id = "number-of-clients">

          </div>

          
          <div id = "messages-holder">
          <ul class="messages" id= "chat-messages"></ul>
          </div>
          <div id = "username-display">${username}</div>
          <input class="inputMessage" id = "chat-input"  placeholder="says...."></input>
          </div>

          </div>
          
        </div>
        `

        buildOutWrapper.innerHTML = postBuildOutHTML

        // document.getElementById('master-div').appendChild(buildOutWrapper)
        document.body.appendChild(buildOutWrapper)

        //TextFit for Post Description
        textFit(document.getElementById('post-buildout-description'))


        
      } else if (e.composedPath()[3].attributes[2].nodeValue  === 'link'){

        console.log('just a link')

        //Post Image
        let postImage = e.composedPath()[2].childNodes[1].childNodes[1].src

        //The Post Description
        let postDescription = e.composedPath()[2].childNodes[3].childNodes[3].textContent

        //Build Out Wrapper HTML
        var buildOutWrapper = document.createElement('div');
        buildOutWrapper.id = "post-buildout-wrapper"

        let postBuildOutHTML = `
        <div id = "post-buildout-background">

        <button type="button" class="btn btn-primary" id="exit-button" >
        <i class="fas fa-times-circle" aria-hidden="true"></i>
        </button>


        <div id = "post-content-container">
          <div id = "post-buildout-description" >
          ${postDescription}
          </div>
          <div id = "post-buildout-image" >
            <a href ="${postLink}">
            <img src = "${postImage}"></img>
            </a>
          </div>

          <div id = "number-of-clients">

          </div>

          
          <div id = "messages-holder">
          <ul class="messages" id= "chat-messages"></ul>
          </div>
          <div id = "username-display">${username}</div>
          <input class="inputMessage" id = "chat-input"  placeholder="says...."></input>
          </div>

          </div>
          
        </div>
        `

        buildOutWrapper.innerHTML = postBuildOutHTML

        // document.getElementById('master-div').appendChild(buildOutWrapper)
        document.body.appendChild(buildOutWrapper)

        //TextFit for Post Description
        textFit(document.getElementById('post-buildout-description'))


      }
        else if (e.composedPath()[1].attributes[2].nodeValue === "note"){
        console.log('you just clicked a note')
        
        //Get the text of the note from the click event
        let noteText = e.composedPath()[0].lastElementChild.outerText

        var buildOutWrapper = document.createElement('div');
        buildOutWrapper.id = "post-buildout-wrapper"

        let postBuildOutHTML = `
        <div id = "post-buildout-background">

        <button type="button" class="btn btn-primary" id="exit-button">
        <i class="fas fa-times-circle" aria-hidden="true"></i>
        </button>

          <div id = "post-content-container">
          <div id = "post-buildout-note-content">
          ${noteText}
          </div>

          <div id = "number-of-clients">

          </div>

          <div id = "messages-holder">
          <ul class="messages" id= "chat-messages"></ul>
          </div>
          <div id = "username-display">${username}</div>
          <input class="inputMessage" id = "chat-input"  placeholder="says...."></input>
          </div>

          </div>
          
        </div>
        `

        buildOutWrapper.innerHTML = postBuildOutHTML

        document.body.appendChild(buildOutWrapper)

        //Fit the Text
        textFit(document.getElementById('post-buildout-note-content'), {minFontSize:14, maxFontSize: 100, multiLine: true})

      } 


        //Blur the background
        document.getElementById('main-grid').style = "filter: blur(4px);"
        document.getElementById('submission-start').style.filter = "blur(3px)"

        document.getElementById('exit-button').addEventListener('click', buildOutExit)

        


        


                //Joining the room and getting the number of users in it
                socket.on('a-user-connected-to-room', function(numClients){
                  console.log(numClients)
                  //Change the HTML of the span to numClients
                  let span = `<span>${numClients} <i class="fas fa-user"></i></span>`
                  document.getElementById('number-of-clients').innerHTML = span
                })

                //When a user leaves the room
                socket.on('a-user-left-the-room', function(numClients){
                  console.log(numClients)
                  //Change the HTML of the span to numClients
                  let span = `<span>${numClients} <i class="fas fa-user"></i> </span>`
                  document.getElementById('number-of-clients').innerHTML = span
                  
                })

        //Append incoming server messages
        socket.on('archived-chat-messages-from-server', function(data){
          // console.log(data[0].message_and_username)
          let chatMessageDiv = document.getElementById('chat-messages')

          if(chatMessageDiv.hasChildNodes()) {
            chatMessageDiv.innerHTML = ""
          }

          //Loops through each message on the server and creates a node to load into the window
          data[0].message_and_username.forEach(data => {
            // console.log(data)
            var chatMessageNode = document.createElement("LI"); 
            let chatMessageTextNode = document.createTextNode(data[0].username + ": " + data[0].message)
            chatMessageNode.appendChild(chatMessageTextNode);
            document.getElementById('chat-messages').appendChild(chatMessageNode)
          })  
        })


        // Chat Input
        // document.getElementById('chat-input').focus()

        document.getElementById('chat-input').addEventListener('keyup', function(){

          //Get the value of the chat input box, and send it on pressing enter
          if (event.keyCode === 13) {
            
            console.log(document.getElementById('chat-input').value)
            console.log(username)
            
            console.log('this room is below' + room)
            console.log(room)

            //Create nodes to properly append to the UI
            var chatMessageNode = document.createElement("LI"); 
            let chatMessageText = document.getElementById('chat-input').value
            let chatMessageTextNode = document.createTextNode(username + ": " + chatMessageText)
            chatMessageNode.appendChild(chatMessageTextNode);
            document.getElementById('chat-messages').appendChild(chatMessageNode)

            // $messages[0].scrollTop = $messages[0].scrollHeight;
            document.getElementById('chat-messages').scrollTop = 
            document.getElementById('chat-messages').scrollHeight

            let message = document.getElementById('chat-input').value

            //Send the message to the server and to others
            socket.emit('chat-message-sent', username, message, room)

            let chatMessageToSendToServer = [{'username': username, 'message': message, 'room': room}]
            console.log(chatMessageToSendToServer[0].username)
            socket.emit('chat-message-to-server', chatMessageToSendToServer)


            //Clear the input
            document.getElementById('chat-input').value = "";

          }

        })

        //When a message is sent from someone else, this is what the server sends to you
        socket.on('send-message-to-all', function(otherUsername, message){
          // console.log(otherUsername)
          // console.log(message);

          //The message is add to a created element and appended
          var receivedChatMessageNode = document.createElement("LI");
          let receivedChatMessageTextNode = document.createTextNode(otherUsername + ": " + message)
          console.log(receivedChatMessageTextNode)

          receivedChatMessageNode.appendChild(receivedChatMessageTextNode);
          document.getElementById('chat-messages').appendChild(receivedChatMessageNode)

        


        })

                //Exit button clicked
                function buildOutExit(e){
                  e.preventDefault()
                  console.log('exit button buildOut')
                  document.body.style.overflow = ''
                  document.getElementById('post-buildout-wrapper').remove()
                  document.getElementById('main-grid').style = ""
                  document.getElementById('submission-start').style.filter = ""
                  socket.emit('leave-room', room)
                  grid.refreshItems().layout();
                }

      }


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
                    <img src="${data[1]}" id="new-post-image">
                    </a>
                        <div class="post-description" id="post-description-master">

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
                                      <img src="${data[1]}" id="new-post-image">
                                      </a>
                                          <div class="post-description" id="post-description-master" style = "display: none;">
  
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
              `    }  else if (data[3] === "live-stream"){
                console.log('live-streaminggg')
                var wrapper = document.createElement('div');
                var columnHTML = `
                <div class="item">
                <div class="item-content" id="post" data-type="${data[3]}" style="opacity: 1; transform: scale(1);">
                      <!-- Safe zone, enter your custom markup -->
                        <div class="link-content" id="${data[0]}" style="
                        position: relative;
                        display: inline-block;">

                        
                        <a href="${data[0]}">
                        <img src="${data[1]}" id="new-post-image">
                        </a>
                        <div id = "live-stream-description" style = "display:none;">
                        <span>${data[2]}</span>
                        </div>
                            </div>

                            <div class="Rec"></div>

                        <!-- Safe zone ends -->
                            </div>
                    </div>
                `
              }
              else {
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
                    <img src="${data[1]}" id="new-post-image">
                    </a>
                    <div class="post-description" id="post-description-master">

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
              

            
                           
              
          //Grid.add function to properly add to grid
          wrapper.innerHTML = columnHTML;
          
          var columnElem = wrapper.children[0]; 
          
          //If the added image is NSFW, then make the image style blurred
          if(data[3].includes('-nsfw')){
            columnElem.childNodes[1].children[0].children[0].children[0].style = "filter: blur(8px)"
          }
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
        <div class="overlay" id="overlay">
              <div id="wrapper">
              
              <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px;
                right: 20px; font-size: 20px;">
              <i class="fas fa-times-circle" aria-hidden="true"></i>
              </button>




                <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 3%; margin: 2%;">
                <i class="fas fa-link"></i>
                <i class="fas fa-photo-video"></i>
                </button>

                <button type="button" class="btn btn-primary btn-lg" id="add-note" style="padding: 3%; margin: 2%;"><i class="fas fa-edit"></i>
                </button>

                <button type="button" class="btn btn-primary btn-lg" id="live-stream" style="padding: 3%; margin: 2%;"><i class="fas fa-video"></i></button>

                <button type="button" class="btn btn-primary btn-lg" id="screen-share" style="padding: 3%; margin: 2%;"><i class="fas fa-desktop"></i></button>

                
                </div>
                
                
            </div>
        `

        overlay.innerHTML = overlayHTML;

        document.body.appendChild(overlay)
        
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

        //Live Stream button Clicked
        document.getElementById('screen-share').addEventListener('click', addScreenShare)
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
        // e.preventDefault();

        let overlayHTML = `
        
              <div id="wrapper">
              
              <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px;
                right: 20px; font-size: 20px;">
              <i class="fas fa-times-circle" aria-hidden="true"></i>
              </button>




                <button type="button" class="btn btn-primary btn-lg" id="add-link" style="padding: 3%; margin: 2%;">
                <i class="fas fa-link"></i>
                <i class="fas fa-photo-video"></i>
                </button>

                <button type="button" class="btn btn-primary btn-lg" id="add-note" style="padding: 3%; margin: 2%;"><i class="fas fa-edit"></i>
                </button>

                <button type="button" class="btn btn-primary btn-lg" id="live-stream" style="padding: 3%; margin: 2%;"><i class="fas fa-video"></i></button>

                <button type="button" class="btn btn-primary btn-lg" id="screen-share" style="padding: 3%; margin: 2%;"><i class="fas fa-desktop"></i></button>

                
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

        //Screenshare button clicked
        document.getElementById('screen-share').addEventListener('click', addScreenShare)
      }

      //Add Notes  
      function addNote(){
        console.log('notessss')
        let overlay = document.getElementById('overlay')
              overlay.innerHTML = `
                     <div id="wrapper">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                     
                     <span class = "note-preview-span" style="position: relative; padding-right: 160px;
                     color: white; font-family: Helvetica Neue; margin-top: 25px; display: none;"> 
                     Your Note Preview:</span>

                     <div class="notes-preview" id = "notes-content-preview">

                     
                     
                     </div>

                     <textarea id="note-input-Box" placeholder="What do you want to say?"></textarea>
                     <button type="button" class="btn btn-primary btn-lg" id="add-bote-button-submit">
                     <i class="fas fa-check-square"></i>
                     </button>


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
                     document.getElementById('add-bote-button-submit').addEventListener('click', function(e){
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
              let overlay = document.getElementById('overlay')

              overlay.innerHTML = `
                     <div id="wrapper">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                     <input type="text" id="link-URL-input-Box" placeholder="Copy/Paste a link here" >


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
                  e.composedPath()[0].placeholder = paste;

                  //A loader runs on a timer just before sending the link
                  function loader(){
                    let wrapper = document.getElementById('wrapper')
                    wrapper.innerHTML = `
                     <div class="loader" id= "post-loader" ></div>
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
                socket.on('newPostData', function(metadata, NSFW){
                  let linkType;
                  console.log(metadata)
                  console.log(NSFW)

                  //These are the different preview builds
                  if(metadata === 'no dice'){ console.log('not gonna happen!')
                  overlay.innerHTML = `
                     <div id="wrapper">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>
                      
                     <span id = "error-text" style="color: black; font-family:Helvetica Neue;">Unable to create a post from your pasted URL!</span>

                     <textarea id="link-description-input-Box" placeholder="Post Description" style="height: 20%; width: 50%; display: none;">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%; display: none;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;"><i class="fas fa-check-square"></i></button>
                     </div>
                     
                     </div>
                     `   
                     
                     
              }             

                  else if (metadata.url.includes(videoURL)){

                  overlay.innerHTML = `
                     <div id="wrapper">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>                     

                    <!-- Post Preview --!>
                     <div class="new-post">

                     Post Preview:<p></p>
                     <!-- Safe zone, enter your custom markup -->
                     <div class="link-content" id="link-master" style="
                     position: relative;
                     display: inline-block;">

                     <a href="${metadata.url}">
                     <img src="${metadata.image}">
                     </a>
                         <div class="post-description" id="post-description-master">

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

                     <textarea id="link-description-input-Box" placeholder="Post Description">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;"><i class="fas fa-check-square"></i></button>
                     </div>
                   
                     </div>`
                    
                    linkType = 'link-video'
                  } 
                     
                     else if(metadata.url.includes(imgURL)){
                       console.log("wowww")
                       overlay.innerHTML = `
                          <div id="wrapper">

                          <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                          <i class="fas fa-times-circle" aria-hidden="true"></i>
                          </button>
     
                          <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                          <i class="fas fa-arrow-alt-circle-left"></i>
                          </button>

                          <!-- Post Preview --!>
                          <div class="new-post">

                          Post Preview:<p></p>
                          <!-- Safe zone, enter your custom markup -->
                          <div class="link-content" id="link-master" style="
                          position: relative;
                          display: inline-block;">

                     <a href="${metadata.url}">
                     <img src="${metadata.image}">
                     </a>
                         <div class="post-description" id="post-description-master" style= "display: none;">

                             <span id="post-type" style="display: inline-block;margin-left: 5px;font-size: 18px;font-weight: bolder;"> <b>IMAGE OR GIF:</b></span>

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

                     <textarea id="link-description-input-Box" placeholder="Post Description">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;"><i class="fas fa-check-square"></i></button>
                     </div>
                   
                     </div>`

                     } 
                     
                     else {
                       console.log('link normale')
                       overlay.innerHTML = `
                     <div id="wrapper" >

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                    <!-- Post Preview --!>
                     <div class="new-post">

                     Post Preview:<p style="
                     margin: 5px;
                     "></p>
                     <!-- Safe zone, enter your custom markup -->
                     <div class="link-content" id="link-master" style="
                     position: relative;
                     display: inline-block;">

                     <a href="${metadata.url}">
                     <img src="${metadata.image}" id="post-preview-image">
                     </a>
                         <div class="post-description" id="post-description-master">

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

                     <textarea id="link-description-input-Box" placeholder="Post Description">${metadata.title}</textarea>
                     <div class= "button-holder" style = "margin: 2%;">
                     <button type="button" class="btn btn-primary btn-lg" id="submit-link" style="padding: 1%; margin: 2%;"><i class="fas fa-check-square"></i></button>
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

                     //If a post comes in NSFW, change the style properties of the image
                     if(NSFW === 'NSFW'){
                      let NSFWStyle = "filter: blur(8px);"
                      document.getElementById('post-preview-image').style = NSFWStyle
                     } else {
                       let NSFWStyle = ""
                     }

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
                      

                      //If NSFW is active, add a -nsfw to the end of the link type
                      if(NSFW === "NSFW"){
                        linkType += "-nsfw"
                      } else {
                        linkType
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
                                        <div class="post-description" id="post-description-master">

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
                                          <div class="post-description" id="post-description-master" style = "display: none;">
  
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
                                  <div class="post-description" id="post-description-master">

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

                            //If the added image is NSFW, then make the image style blurred
                            if(linkType.includes('-nsfw')){
                              columnElem.childNodes[1].children[0].children[0].children[0].style = "filter: blur(8px)"
                            }

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
              let overlay = document.getElementById('overlay')
              
              console.log('LiveStream')
              overlay.innerHTML = `
                     <div id="wrapper">

                     <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                     <i class="fas fa-times-circle" aria-hidden="true"></i>
                     </button>

                     <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                     <i class="fas fa-arrow-alt-circle-left"></i>
                     </button>

                     <div id = "video-grid"></div>

                     <textarea id ="live-stream-description-input"></textarea>
                     
                     <button type = "button" class="btn btn-primary" id="start-stream-button"><i class="fas fa-check-square"></i></button>

                     <canvas id = "thumbnail" width = "500" height = "400" style = "
                     position: absolute;
                     left: 140px;
                     bottom: 90px;"></canvas>
                     

                
                     </div>

                     `;

                     
                     //Getting Video
                     let videoGrid = document.getElementById('video-grid')
                     let startStreamButton = document.getElementById('start-stream-button')

                     //Create Peer
                     var peer = new Peer();

                     peer.on('open', function(id) {
                      console.log('My peer ID is: ' + id);
                    });


                     //Start the stream from a camera 
                     navigator.mediaDevices.getUserMedia({
                      video: true,
                      audio: true
                      //From here we can use the stream
                      }).then(stream => {
                    
                        //This code puts the stream on your preview page
                        let myVideo = document.createElement('video')
                        myVideo.muted = true;
                        myVideo.id = "video-preview-play"
                        myVideo.srcObject = stream;
                        videoGrid.append(myVideo)
                        myVideo.play()

                        console.log(videoGrid)
                        
                        console.log(stream)

                       //Exit Button Clicked
                       document.getElementById('exit-button').addEventListener('click', function(){
                         exitButton()
                         stream.getTracks().forEach(track => track.stop());
                         peer.disconnect();
                         peer.destroy();
                       })

                       //Back Button Clicked
                        document.getElementById('back-button').addEventListener('click', function(){
                          console.log('back button stop that stream!')
                          backButton()
                          stream.getTracks().forEach(track => track.stop());
                          peer.disconnect();
                          peer.destroy();
                        })

                        //Posting the Stream
                        startStreamButton.addEventListener('click', function(){
                          // var wrapper = document.createElement('div');
                          console.log('heyyy')
                          console.log(stream)

                          //Getting Description Value
                          let liveStreamDescription = document.getElementById('live-stream-description-input').value

                          exitButton()

                          //Taking screenshot of Stream
                          let video2 = document.getElementById("video-preview-play");
                          let canvas = document.getElementById('thumbnail')
                          let width = '200px'
                          let height = '200px'
                          var context = canvas.getContext('2d');
                          context.drawImage(video2, -50, 0);
                          var screenShot = canvas.toDataURL('image/jpeg', 0.5);
                          console.log(screenShot)
                         
                          //Create unique post id
                          let postID = [peer.id, socket.id]
                          console.log(postID)
          
                          //Adding to grid with Screenshot as Image
                          var columnHTML = `
                          <div class="item">
                          <div class="item-content" id="${postID}" data-type="live-stream" style="opacity: 1; transform: scale(1);">
                                <!-- Safe zone, enter your custom markup -->
                                
                                <div id= "video-grid" data-type="${postID}">
                                <a href = "${postID}">
                                <img src="${screenShot}" style = "position: relative;
                                left: -130px;
                                top: -100px;"></img>
                                </a>
                                <div id = "live-stream-description" style = "display:none;">
                                <span>${liveStreamDescription}</span>
                                </div>
                                </div>
                                <div class="Rec"></div>

                                  <!-- Safe zone ends -->
                                      </div>
                              </div>
                            `

                         
                          //NOTE: If I want to add my stream to the grid, it all must be done after grid.add is called
                          //Grid.add function to properly add to grid
                          wrapper.innerHTML = columnHTML;
                          var columnElem = wrapper.children[0]; 
                          console.log(wrapper)
                          grid.add([columnElem], { index: 0 });

                          setTimeout(respaceItems, 300);

                          //This creates the little mini stream in the bottom left hand
                          let streamingVideoGrid = document.createElement('div')
                          streamingVideoGrid.id = "my-streaming-video-div"
                          let myStreamingVideo = document.createElement('video')
                          myStreamingVideo.muted = true;
                          myStreamingVideo.controls = true;
                          myStreamingVideo.id = "streaming-video-play"
                          myStreamingVideo.srcObject = stream;
                          streamingVideoGrid.append(myStreamingVideo)
                          myStreamingVideo.play()

                          document.getElementById('master-div').append(streamingVideoGrid)

                          //Background (for mobile)
                          if(window.screen.width <= 575.98){
                          let streamingVideoMobileBackground = document.createElement('div')
                          streamingVideoMobileBackground.id = "streaming-video-mobile-background"
                          document.getElementById('master-div').append(streamingVideoMobileBackground)
                          //Makes sure that the background is not scrollable
                          document.getElementById('master-div').style.overflow = "hidden"
                          console.log('user is most likely on a cell phone')
                        }
                          else {console.log('The screen is wide enough')}

                          //Number of Clients
                          let streamingNumberofClients = document.createElement('div')
                          streamingNumberofClients.id = "number-of-clients-streaming"
                                          //Joining the room and getting the number of users in it
                                          socket.on('a-user-connected-to-room', function(numClients){
                                            console.log(numClients)
                                            //Change the HTML of the span to numClients
                                            let span = `<span>${numClients} <i class="fas fa-user"></i></span>`
                                            document.getElementById('number-of-clients-streaming').innerHTML = span
                                          })

                                          //When a user leaves the room
                                          socket.on('a-user-left-the-room', function(numClients){
                                            console.log(numClients)
                                            //Change the HTML of the span to numClients
                                            let span = `<span>${numClients} <i class="fas fa-user"></i></span>`
                                            document.getElementById('number-of-clients-streaming').innerHTML = span
                                            
                                          })

                            document.getElementById('master-div').append(streamingNumberofClients)




                          //Stop Stream button
                          let stopStreamingButton = document.createElement('button')
                          stopStreamingButton.innerHTML = `<i class="fas fa-arrow-alt-circle-left"></i>`
                          stopStreamingButton.className = "btn btn-primary"
                          stopStreamingButton.id = "stop-streaming"

                          document.getElementById('master-div').append(stopStreamingButton)

                          

                          //Create canvas element for Thumbnails
                          let thumbnailCanvas = document.createElement('canvas')
                          thumbnailCanvas.id = "thumbnail-update-canvas"
                          thumbnailCanvas.style = "display: none;"
                          thumbnailCanvas.width = 500
                          thumbnailCanvas.height = 400

                          document.getElementById('master-div').append(thumbnailCanvas)

                          //Chat in the bottom left for streaming guy
                          let streamingChatDiv = document.createElement('div');
                          streamingChatDiv.id = "streaming-chat-holder"
                          streamingChatDiv.innerHTML = `
                          <div id = "post-buildout-chat" style = "               
                            top: 100px;
                            position: absolute;
                            left: 50px;
                            width: 100%;
                            /* height: 100%; */
                            ">

                          <div id = "messages-holder" class = "message-holder-livestream">
                          <ul class="messages" style ="
                          " id= "streaming-chat-messages"></ul>

                          </div>

                          <div id = "username-display-livestream">${username}</div>

          

                          <input class="inputMessage" id = "streaming-chat-input" placeholder="says....">
                          </input>

                          </div>`

                          //Creating the PostID to join
                          let postIDJoined = postID.join()
                          let postLink = 'http://localhost:3000/' + postIDJoined
                          console.log(postLink)

                          //Emiting to the server that I've joined
                          let room = postLink;
                          socket.emit('join-room', room, username)
                         
                          document.getElementById('master-div').append(streamingChatDiv)

                          //Sending a message in the chat
                          document.getElementById('streaming-chat-input').addEventListener('keyup', function(){

                            //Get the value of the chat input box, and send it on pressing enter
                            if (event.keyCode === 13) {
                              
                              console.log(document.getElementById('streaming-chat-input').value)
                              // console.log(username)
                              
                              // console.log('this room is below' + room)
                              // console.log(room)
                  
                              //Create nodes to properly append to the UI
                              var chatMessageNode = document.createElement("LI"); 
                              let chatMessageText = document.getElementById('streaming-chat-input').value
                              let chatMessageTextNode = document.createTextNode(username + ": " + chatMessageText)
                              chatMessageNode.appendChild(chatMessageTextNode);
                              document.getElementById('streaming-chat-messages').appendChild(chatMessageNode)
                  
                              // $messages[0].scrollTop = $messages[0].scrollHeight;
                              document.getElementById('streaming-chat-messages').scrollTop = 
                              document.getElementById('streaming-chat-messages').scrollHeight
                  
                              let message = document.getElementById('streaming-chat-input').value
                  
                              //Send the message to the server and to others
                              socket.emit('chat-message-sent', username, message, room)
                  
                              let chatMessageToSendToServer = [{'username': username, 'message': message, 'room': room}]
                              console.log(chatMessageToSendToServer[0].username)
                              socket.emit('chat-message-to-server', chatMessageToSendToServer)
                  
                  
                              //Clear the input
                              document.getElementById('streaming-chat-input').value = "";
                            }
                          })

                          //When a message is sent from someone else, this is what the server sends to you
                          socket.on('send-message-to-all', function(otherUsername, message){
                            // console.log(otherUsername)
                            // console.log(message);

                            //The message is added to a created element and appended
                            var receivedChatMessageNode = document.createElement("LI");
                            let receivedChatMessageTextNode = document.createTextNode(otherUsername + ": " + message)

                            receivedChatMessageNode.appendChild(receivedChatMessageTextNode);
                            document.getElementById('streaming-chat-messages').appendChild(receivedChatMessageNode)

                          })
                          
                        
                          //Submitting to Server
                          //NEW [[peer ID, Socket.id], Post Image, Post Description, Post Type]

                          //Before we can send, we need to join the IDs to create a unique post ID that we can use in the database
                          // let postLinkToJoin = [peer.id, socket.id]
                          // let postLinkJoined = postLinkToJoin.join();
                          // console.log(postLinkJoined)

                          let newPostInfo = [postID, screenShot, liveStreamDescription, 'live-stream']
                          console.log(newPostInfo)

                          socket.emit('postAddedUpdateDatabase', newPostInfo);


                          //Message from server when someone wants to connect to my stream, contains the PeerID of the person who wants to connect
                          socket.on('someoneWantsMyStream', function(data){
                            console.log(data)
                            //A call is initiated, the data is the destination ID of the client
                            var call = peer.call(data, stream)

                          })

                          //Function to take a screenshot every 10 (15?) seconds and update
                          function canvasUpdate(){
                          let videoThumbUpdate = document.getElementById("streaming-video-play");
                          let videoThumbUpdateCanvas = document.getElementById('thumbnail-update-canvas')
                          // let width = '200px'
                          // let height = '200px'
                          var contextUpdate = videoThumbUpdateCanvas.getContext('2d');
                          contextUpdate.drawImage(videoThumbUpdate, -50, 0);
                          var screenShot = videoThumbUpdateCanvas.toDataURL('image/jpeg', 0.5);
                          // console.log(screenShot)

                         

                          socket.emit('update-stream-screenshot', screenShot, postID)
                        
                        }


                          //Function is run on an interval
                          let screenshotUpdateInterval = setInterval(canvasUpdate, 5000)


                          //If user refreshes or clicks back while streaming — STOP THE STREAM
                          window.addEventListener("beforeunload", function(e) {
                            console.log('HEYYYYYY YOURE OUNLOADING THE SOITE')

                            stream.getTracks().forEach(track => track.stop());

                            peer.disconnect();
                            peer.destroy();
                            

                            //Stop the stream from sending screenshots
                            clearInterval(screenshotUpdateInterval)

                            // Send info to server so HTML can be changed
                            postIDJoined = postID.join()
                            let postLink = 'http://localhost:3000/' + postIDJoined
                            // console.log(postLink)

                            //Destroy DOM Elements
                            document.getElementById('thumbnail-update-canvas').remove()
                            document.getElementById('stop-streaming').remove()
                            document.getElementById('streaming-chat-holder').remove()
                            document.getElementById('my-streaming-video-div').remove()
                            document.getElementById('number-of-clients-streaming').remove()

                            //If a mobile element is there, it'll get deleted because of this:
                            if(document.getElementById('streaming-video-mobile-background')){
                              document.getElementById('streaming-video-mobile-background').remove();
                            }
                            

                            //Put any change style elements back to normal
                            document.getElementById('master-div').style.overflow = ""
                            
                            socket.emit('stream-has-stopped', postID, postLink)
                            socket.emit('leave-room', postLink)

                           });

                          //Stop the stream
                          document.getElementById('stop-streaming').addEventListener('click', function(){
                            
                            console.log('stop stream')
                            
                            stream.getTracks().forEach(track => track.stop());

                            peer.disconnect();
                            peer.destroy();
                            

                            //Stop the stream from sending screenshots
                            clearInterval(screenshotUpdateInterval)

                            // Send info to server so HTML can be changed
                            postIDJoined = postID.join()
                            let postLink = 'http://localhost:3000/' + postIDJoined
                            // console.log(postLink)

                            //Destroy DOM Elements
                            document.getElementById('thumbnail-update-canvas').remove()
                            document.getElementById('stop-streaming').remove()
                            document.getElementById('streaming-chat-holder').remove()
                            document.getElementById('my-streaming-video-div').remove()
                            document.getElementById('number-of-clients-streaming').remove()

                            //If a mobile element is there, it'll get deleted because of this:
                            if(document.getElementById('streaming-video-mobile-background')){
                              document.getElementById('streaming-video-mobile-background').remove();
                            }
                            

                            //Put any change style elements back to normal
                            document.getElementById('master-div').style.overflow = ""
                            
                            socket.emit('stream-has-stopped', postID, postLink)
                            socket.emit('leave-room', postLink)

                          })
                          

                        })



                    
                      })


          }




          //Add Screenshare Function
          function addScreenShare(){

            let overlay = document.getElementById('overlay')
            console.log('Screenshare')
            overlay.innerHTML = `
                   <div id="wrapper">

                   <button type="button" class="btn btn-primary" id="exit-button" style="position: absolute; top: 20px; right: 20px; font-size: 20px;">
                   <i class="fas fa-times-circle" aria-hidden="true"></i>
                   </button>

                   <button type="button" class="btn btn-primary" id="back-button" style="position: absolute; top: 20px; left: 20px; font-size: 20px;">
                   <i class="fas fa-arrow-alt-circle-left"></i>
                   </button>

                   <div id = "video-grid"></div>

                   <textarea id ="live-stream-description-input"></textarea>
                   
                   <button type = "button" class="btn btn-primary" id="start-stream-button">
                   <i class="fas fa-check-square"></i></button>

                   
                   <canvas id = "thumbnail" width = "1200" height = "900" style = "
                   "></canvas>
                   

              
                   </div>

                   `;
                   
                   //Getting Video
                   let videoGrid = document.getElementById('video-grid')
                   let startStreamButton = document.getElementById('start-stream-button')

                   //Create Peer
                   var peer = new Peer();

                   peer.on('open', function(id) {
                    console.log('My peer ID is: ' + id);
                  });


                   //Start the screenshare stream
                   navigator.mediaDevices.getDisplayMedia({
                    video: {
                          cursor: "always"},
                    audio: {
                           echoCancellation: true,
                           noiseSuppression: true,
                           sampleRate: 44100
                          }
                          //From here we can use the stream
                          }).then(stream => {
                      //This code puts the stream on your preview page
                      let myVideo = document.createElement('video')
                      myVideo.muted = true;
                      myVideo.id = "video-preview-play"
                      myVideo.srcObject = stream;
                      videoGrid.append(myVideo)
                      myVideo.play()

                      console.log(videoGrid)
                      
                      console.log(stream)

                      //Exit Button Clicked
                      document.getElementById('exit-button').addEventListener('click', function(){
                        exitButton()
                        stream.getTracks().forEach(track => track.stop());
                        peer.disconnect();
                        peer.destroy();
                      })

                      //Back Button Clicked
                       document.getElementById('back-button').addEventListener('click', function(){
                         console.log('back button stop that stream!')
                         backButton()
                         stream.getTracks().forEach(track => track.stop());
                         peer.disconnect();
                         peer.destroy();
                       })

                      //Posting the Stream
                      startStreamButton.addEventListener('click', function(){
                        // var wrapper = document.createElement('div');
                        console.log('heyyy')
                        console.log(stream)

                        //Getting Description Value
                        let liveStreamDescription = document.getElementById('live-stream-description-input').value

                        exitButton()

                        //Taking screenshot of Stream
                        let video2 = document.getElementById("video-preview-play");
                        let canvas = document.getElementById('thumbnail')
                        let width = '200px'
                        let height = '200px'
                        var context = canvas.getContext('2d');
                        context.drawImage(video2, -50, 0);
                        var screenShot = canvas.toDataURL('image/jpeg', 0.5);
                        console.log(screenShot)
                       
                        //Create unique post id
                        let postID = [peer.id, socket.id]
                        console.log(postID)
        
                        //Adding to grid with Screenshot as Image
                        var columnHTML = `
                        <div class="item">
                        <div class="item-content" id="${postID}" data-type="live-stream" style="opacity: 1; transform: scale(1);">
                              <!-- Safe zone, enter your custom markup -->
                              
                              <div id= "video-grid" data-type="${postID}">
                              <a href = "${postID}">
                              <img src="${screenShot}" style = "position: relative;
                              left: -130px;
                              top: -100px;"></img>
                              </a>
                              <div id = "live-stream-description" style = "display:none;">
                              <span>${liveStreamDescription}</span>
                              </div>
                              </div>
                              <div class="Rec"></div>

                                <!-- Safe zone ends -->
                                    </div>
                            </div>
                          `

                       
                        //NOTE: If I want to add my stream to the grid, it all must be done after grid.add is called
                        //Grid.add function to properly add to grid
                        wrapper.innerHTML = columnHTML;
                        var columnElem = wrapper.children[0]; 
                        console.log(wrapper)
                        grid.add([columnElem], { index: 0 });

                        setTimeout(respaceItems, 300);

                        //This creates the little mini stream in the bottom left hand
                        let streamingVideoGrid = document.createElement('div')
                        streamingVideoGrid.id = "my-streaming-video-div"
                        let myStreamingVideo = document.createElement('video')
                        myStreamingVideo.muted = true;
                        myStreamingVideo.controls = true;
                        myStreamingVideo.id = "streaming-video-play"
                        myStreamingVideo.srcObject = stream;
                        streamingVideoGrid.append(myStreamingVideo)
                        myStreamingVideo.play()

                        document.getElementById('master-div').append(streamingVideoGrid)

                        //Background (for mobile)
                        if(window.screen.width <= 575.98){
                          let streamingVideoMobileBackground = document.createElement('div')
                          streamingVideoMobileBackground.id = "streaming-video-mobile-background"
                          document.getElementById('master-div').append(streamingVideoMobileBackground)
                          //Makes sure that the background is not scrollable
                          document.getElementById('master-div').style.overflow = "hidden"
                          console.log('user is most likely on a cell phone')
                        }
                          else {console.log('The screen is wide enough')}

                        //Number of Clients
                        let streamingNumberofClients = document.createElement('div')
                        streamingNumberofClients.id = "number-of-clients-streaming"


                                        //Joining the room and getting the number of users in it
                                        socket.on('a-user-connected-to-room', function(numClients){
                                          console.log(numClients)
                                          //Change the HTML of the span to numClients
                                          let span = `<span>${numClients} <i class="fas fa-user"></i></span>`
                                          document.getElementById('number-of-clients-streaming').innerHTML = span
                                        })

                                        //When a user leaves the room
                                        socket.on('a-user-left-the-room', function(numClients){
                                          console.log(numClients)
                                          //Change the HTML of the span to numClients
                                          let span = `<span>${numClients} <i class="fas fa-user"></i></span>`
                                          document.getElementById('number-of-clients-streaming').innerHTML = span
                                          
                                        })

                          document.getElementById('master-div').append(streamingNumberofClients)

                        //Stop Stream button
                        let stopStreamingButton = document.createElement('button')
                        stopStreamingButton.innerHTML = `<i class="fas fa-arrow-alt-circle-left"></i>`
                        stopStreamingButton.className = "btn btn-primary"
                        stopStreamingButton.id = "stop-streaming"

                        document.getElementById('master-div').append(stopStreamingButton)

                        

                        //Create canvas element for Thumbnails
                        let thumbnailCanvas = document.createElement('canvas')
                        thumbnailCanvas.id = "thumbnail-update-canvas"
                        thumbnailCanvas.style = "display: none;"
                        thumbnailCanvas.width = 1200
                        thumbnailCanvas.height = 900

                        document.getElementById('master-div').append(thumbnailCanvas)

                        //Chat in the bottom left for streaming guy
                        let streamingChatDiv = document.createElement('div');
                        streamingChatDiv.id = "streaming-chat-holder"
                        streamingChatDiv.innerHTML = `
                        <div id = "post-buildout-chat" style = "               
                          top: 100px;
                          position: absolute;
                          left: 50px;
                          width: 100%;
                          /* height: 100%; */
                          ">

                        <div id = "messages-holder" class ="message-holder-livestream">
                        <ul class="messages" style ="
                        " id= "streaming-chat-messages"></ul>

                        </div>

                        <div id = "username-display-livestream">${username}</div>

        

                        <input class="inputMessage" id = "streaming-chat-input" placeholder="says....">
                        </input>

                        </div>`

                        //Creating the PostID to join
                        let postIDJoined = postID.join()
                        let postLink = 'http://localhost:3000/' + postIDJoined
                        console.log(postLink)

                        //Emiting to the server that I've joined
                        let room = postLink;
                        socket.emit('join-room', room, username)
                       
                        document.getElementById('master-div').append(streamingChatDiv)

                        //Sending a message in the chat
                        document.getElementById('streaming-chat-input').addEventListener('keyup', function(){

                          //Get the value of the chat input box, and send it on pressing enter
                          if (event.keyCode === 13) {
                            
                            console.log(document.getElementById('streaming-chat-input').value)
                            // console.log(username)
                            
                            // console.log('this room is below' + room)
                            // console.log(room)
                
                            //Create nodes to properly append to the UI
                            var chatMessageNode = document.createElement("LI"); 
                            let chatMessageText = document.getElementById('streaming-chat-input').value
                            let chatMessageTextNode = document.createTextNode(username + ": " + chatMessageText)
                            chatMessageNode.appendChild(chatMessageTextNode);
                            document.getElementById('streaming-chat-messages').appendChild(chatMessageNode)
                
                            // $messages[0].scrollTop = $messages[0].scrollHeight;
                            document.getElementById('streaming-chat-messages').scrollTop = 
                            document.getElementById('streaming-chat-messages').scrollHeight
                
                            let message = document.getElementById('streaming-chat-input').value
                
                            //Send the message to the server and to others
                            socket.emit('chat-message-sent', username, message, room)
                
                            let chatMessageToSendToServer = [{'username': username, 'message': message, 'room': room}]
                            console.log(chatMessageToSendToServer[0].username)
                            socket.emit('chat-message-to-server', chatMessageToSendToServer)
                
                
                            //Clear the input
                            document.getElementById('streaming-chat-input').value = "";
                          }
                        })

                        //When a message is sent from someone else, this is what the server sends to you
                        socket.on('send-message-to-all', function(otherUsername, message){
                          // console.log(otherUsername)
                          // console.log(message);

                          //The message is added to a created element and appended
                          var receivedChatMessageNode = document.createElement("LI");
                          let receivedChatMessageTextNode = document.createTextNode(otherUsername + ": " + message)

                          receivedChatMessageNode.appendChild(receivedChatMessageTextNode);
                          document.getElementById('streaming-chat-messages').appendChild(receivedChatMessageNode)

                        })
                        
                      
                        //Submitting to Server
                        //NEW [[peer ID, Socket.id], Post Image, Post Description, Post Type]

                        //Before we can send, we need to join the IDs to create a unique post ID that we can use in the database
                        // let postLinkToJoin = [peer.id, socket.id]
                        // let postLinkJoined = postLinkToJoin.join();
                        // console.log(postLinkJoined)

                        

                        let newPostInfo = [postID, screenShot, liveStreamDescription, 'live-stream']
                        console.log(newPostInfo)

                        socket.emit('postAddedUpdateDatabase', newPostInfo);


                        //Message from server when someone wants to connect to my stream, contains the PeerID of the person who wants to connect
                        socket.on('someoneWantsMyStream', function(data){
                          console.log(data)
                          //A call is initiated, the data is the destination ID of the client
                          var call = peer.call(data, stream)

                        })

                        //Function to take a screenshot every 10 (15?) seconds and update
                        function canvasUpdate(){
                        let videoThumbUpdate = document.getElementById("streaming-video-play");
                        let videoThumbUpdateCanvas = document.getElementById('thumbnail-update-canvas')
                        // let width = '200px'
                        // let height = '200px'
                        var contextUpdate = videoThumbUpdateCanvas.getContext('2d');
                        contextUpdate.drawImage(videoThumbUpdate, -50, 0);
                        var screenShot = videoThumbUpdateCanvas.toDataURL('image/jpeg', 0.5);
                        // console.log(screenShot)

                       

                        socket.emit('update-stream-screenshot', screenShot, postID)
                      
                      }


                        //Function is run on an interval
                        let screenshotUpdateInterval = setInterval(canvasUpdate, 5000)

                          //If user refreshes or clicks back while streaming — STOP THE STREAM
                          window.addEventListener("beforeunload", function(e) {
                            console.log('HEYYYYYY YOURE OUNLOADING THE SOITE')

                            stream.getTracks().forEach(track => track.stop());

                            peer.disconnect();
                            peer.destroy();
                            

                            //Stop the stream from sending screenshots
                            clearInterval(screenshotUpdateInterval)

                            // Send info to server so HTML can be changed
                            postIDJoined = postID.join()
                            let postLink = 'http://localhost:3000/' + postIDJoined
                            // console.log(postLink)

                            //Destroy DOM Elements
                            document.getElementById('thumbnail-update-canvas').remove()
                            document.getElementById('stop-streaming').remove()
                            document.getElementById('streaming-chat-holder').remove()
                            document.getElementById('my-streaming-video-div').remove()
                            document.getElementById('number-of-clients-streaming').remove()

                            //If a mobile element is there, it'll get deleted because of this:
                            if(document.getElementById('streaming-video-mobile-background')){
                              document.getElementById('streaming-video-mobile-background').remove();
                            }
                            

                            //Put any change style elements back to normal
                            document.getElementById('master-div').style.overflow = ""
                            
                            socket.emit('stream-has-stopped', postID, postLink)
                            socket.emit('leave-room', postLink)

                           });


                        //Stop the stream
                        document.getElementById('stop-streaming').addEventListener('click', function(){
                          
                          console.log('stop stream')
                          
                          stream.getTracks().forEach(track => track.stop());

                          peer.disconnect();
                          peer.destroy();
                          

                          //Stop the stream from sending screenshots
                          clearInterval(screenshotUpdateInterval)

                          // Send info to server so HTML can be changed
                          postIDJoined = postID.join()
                          let postLink = 'http://localhost:3000/' + postIDJoined
                          // console.log(postLink)

                          //Destroy DOM Elements
                          document.getElementById('thumbnail-update-canvas').remove()
                          document.getElementById('stop-streaming').remove()
                          document.getElementById('streaming-chat-holder').remove()
                          document.getElementById('my-streaming-video-div').remove()
                          document.getElementById('number-of-clients-streaming').remove()
                          document.getElementById('streaming-video-mobile-background').remove();


                          //If a mobile element is there, it'll get deleted because of this:
                          if(document.getElementById('streaming-video-mobile-background')){
                            document.getElementById('streaming-video-mobile-background').remove();
                          }

                          //Put any change style elements back to normal
                          document.getElementById('master-div').style.overflow = ""
                          
                          socket.emit('stream-has-stopped', postID, postLink)
                          socket.emit('leave-room', postLink)

                        })
                        

                      })



                  
                    })

        }

          //When a new screenshot comes in
          socket.on('new-stream-screenshot', function(screenshot, pageID, NSFW){
            console.log('guess a screenshot is coming in!')
            // console.log(screenshot)
            console.log(pageID)
            console.log(NSFW)

            //Convert to the right pageID
            // let pageIDString = pageID.join()
            // console.log(pageIDString)

            //Grab the page ID
            screenshotChange = document.getElementById(pageID)
            // console.log(screenshotChange.childNodes[1].children[0].src)
            console.log(screenshotChange.childNodes)

            // if(NSFW === 'Y'){
            //   screenshotChange.style = "filter: blur(8px)"
            //   console.log('this is NSFW mate')
            //   screenshotChange[3].childNodes[1].children[0].style =
            // }

            //Update the Screenshot
            if(socket.id === pageID[1]){
              // console.log('I`m taking a screen of myself')
            screenshotChange.children[0].children[0].childNodes[1].src = screenshot
            // screenshotChange.children[0].children[0].childNodes[1].style = "position: relative; filter: blur(8px)"
            }
            else if (socket.id !== pageID[1]){
              // console.log('screen coming from elsewhere')
            screenshotChange.childNodes[1].children[0].src = screenshot}

          })

          //When a livestream has stopped message comes in
          socket.on('someone-has-stopped-livestreaming', function(data)
          {
            console.log(data)
            idToRemove = data.join()
            console.log(idToRemove)
            
            console.log(grid.getItems())

            //Loop through all grid items to find the one that matches the data and remove
            let i;

            for(i = 0; i < grid.getItems().length; i++){
              if(grid.getItems()[i]._element.childNodes[1].id === idToRemove){
                console.log('remove it!')
                console.log(i)
                // console.log(grid.getItem(i))
                grid.remove(grid.getItems(i), { removeElements: true })
              } else if (grid.getItems()[i]._element.childNodes[1].childNodes[3].id === idToRemove) {
                console.log('remove it!')
                console.log(i)
                // console.log(grid.getItem(i))
                grid.remove(grid.getItems(i), { removeElements: true })
              } else {
                console.log('don`t remove it')
              }
            }
            
            // console.log()

            
            
            // grid.remove(grid.getItem(elementToRemove.parentNode)._element)
          })








          
          

          
             


          