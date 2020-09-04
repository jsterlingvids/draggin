

Styling! Styling the posts

- Updating livestream post images (broken at the moment)

- Deleting Livestreams when they're done
    - When the streamer stops streaming, have the event send out correctly and change the element to say "This person has stopped streaming"
    - Make the video stream window disappear
    - Delete Stream on refresh (and back)!

- Different buildouts for different post types
    - Notes
    - And adding a chat window for the streaming guy

- Adding Screensharing

- Adding the nude.js protection

- Deleting posts once there are more than 150


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.