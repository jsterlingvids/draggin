// var fs = require('fs');
let button = document.getElementById('json');

button.addEventListener('click', doSomething);

function doSomething(){
console.log('Hi World!')};

// fs.readFile('/Users/apple/Desktop/Udemy:Blender:Testing/Muuri_Test/With Socket/users.json', 'utf-8', function(err, data) {
//     if (err) throw err
  
//     var arrayOfObjects = JSON.parse(data)
//     arrayOfObjects.users.push({
//       name: "Mikhail",
//       age: 24
//     });
  
//     console.log(arrayOfObjects);
  
//     fs.writeFile('/Users/apple/Desktop/Udemy:Blender:Testing/Muuri_Test/With Socket/users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
//       if (err) throw err
//       console.log('Done!')
//     })
//   })