

Styling! Styling the posts

- Updating livestream post images
- Deleting Livestreams when they're done
    - Fixing Moving
    - Fix the actual information that is shared to get a call working
    - peer.on('disconnect'......)
    - Delete Stream on refresh!
- Different buildouts for different post types
- Deleting posts once there are more than 150


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.