var app = require('express')();
var http = require('http').createServer(app);

var grid = new Muuri('.grid', {
  dragEnabled: true,
  layout: {
      fillGaps: false,
      rounding: false
    }
});
grid.refreshItems().layout()


const apiKey = 'K4MR2L3zPWENog4Ureog4PPv6rAeZSTB'


function innerGif(){fetch('https://api.giphy.com/v1/gifs/random?api_key=K4MR2L3zPWENog4Ureog4PPv6rAeZSTB&tag=&rating=G')
  .then(response => response.json())
  .then(json => {
      console.log(json)
      //const gif = document.querySelector('item-content');
      let gif = document.getElementById('gif')
      let randomGif = json.data.images.fixed_height.url;
      console.log(randomGif);
      gif.innerHTML = `
      <img src="${randomGif}"></img>`;
      grid.refreshItems().layout()
    }
  )};

  function innerGif2(){fetch('https://api.giphy.com/v1/gifs/random?api_key=K4MR2L3zPWENog4Ureog4PPv6rAeZSTB&tag=&rating=G')
  .then(response => response.json())
  .then(json => {
      console.log(json)
      //const gif = document.querySelector('item-content');
      let gif = document.getElementById('gif2')
      let randomGif = json.data.images.fixed_height.url;
      console.log(randomGif);
      gif.innerHTML = `
      <img src="${randomGif}"></img>`;
      grid.refreshItems().layout()
    }
  )};

  function innerGif3(){fetch('https://api.giphy.com/v1/gifs/random?api_key=K4MR2L3zPWENog4Ureog4PPv6rAeZSTB&tag=&rating=G')
  .then(response => response.json())
  .then(json => {
      console.log(json)
      //const gif = document.querySelector('item-content');
      let gif = document.getElementById('gif3')
      let randomGif = json.data.images.fixed_height.url;
      console.log(randomGif);
      gif.innerHTML = `
      <img src="${randomGif}"></img>`;
      grid.refreshItems().layout()
    }
  )};

  innerGif();
  innerGif2();
  innerGif3();

  window.addEventListener('load', function () {
    grid.refreshItems().layout();
  });


  



 




