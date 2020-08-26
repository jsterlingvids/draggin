

Styling! Styling the posts

Adding and distinguishing between specific post types: video, article and image and gif (line 561)


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.