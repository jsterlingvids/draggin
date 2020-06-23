// var fs = require('fs');
let button = document.getElementById('json');

button.addEventListener('click', doSomething);

const user = {
    name: 'John',
    surname: 'Smith'
  };

    function doSomething(){
      fetch('/newgif', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Darth Vadar',
          quote: 'I find your lack of faith disturbing.'
        })
      })
    }

  