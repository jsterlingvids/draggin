Need to have new gif instantly added to all viewers sites

Also need to change newgif event name from 'mongo'.......

In a perfect world everything updates with the ID...

POST META DATA HAS TO BE MADE INTO A STRING BEFORE BEING SAVED TO SERVER


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.