

Styling! Styling the posts

- Make streaming unavailable on cell phone - unavailable as of now
- The preview description gets pushed to the left when a preview image loads in
- Mobile Resizing a hair
- The post buttons need to be restyled (still a little messed up on mid-size)

- Make sure you can't clip behind mobile background when streaming
- Mobile Screenshots are doing weird things


- Livestream buildout
    - Styling
    - When someone exits, make sure the overflow does not stay "hidden"

- Midsizings!
    
- Loading icon when selecting screenshare?

- Stop initial load if posts are already on page

- Continue the anti-nudity push
    - LiveStream image checking



- Redo the app.js code (make a new version for this)
- Google Analytics API

- Adding error messages and alerts


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.