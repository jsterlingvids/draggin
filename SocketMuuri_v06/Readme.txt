

Styling! Styling the posts

- Updating livestream post images (broken at the moment)

- Deleting Livestreams when they're done
    - Delete Stream on refresh (and back)!

- Different buildouts for different post types
    - Links
    - Images

- Adding Screensharing

- Deleting Chat on end of livestream
- Not loading chat if text already exists (or clearing chat on exit)

- Adding the nude.js protection

- Deleting posts once there are more than 150


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.