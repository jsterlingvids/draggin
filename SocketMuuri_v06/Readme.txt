

Styling! Styling the posts

- Saving/Retreiving Chat Messages To/From the server
- Different buildouts for different post types
- Livestreams on Buildout and Server Logic for retrieving streams


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.