Need to have new gif instantly added to all viewers sites

Also need to change newgif event name from 'mongo'.......

In a perfect world everything updates with the ID...

Page should update for everyone anytime a gif is moved — that should be the final bit
Maybe this can be done by iterating through the data sent on Move and the exisiting Grid Items and pushing the Gif URL if any differences exist


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.