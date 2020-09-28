

Styling! Styling the posts

- Make streaming unavailable on cell phone
- Mobile Resizing a hair
- The post buttons need to be restyled (still a little messed up on mid-size)

- Make sure you can't clip behind mobile background when streaming
- Mobile Screenshots are doing weird things

- Change button color in general

- Livestream buildout
    - Styling
    - When someone exits, make sure the overflow does not stay "hidden"

- Midsizings!
    
- Loading icon when selecting screenshare?

- Adding the nude.js protection
- Redo the app.js code (make a new version for this)
- Google Analytics API

- Deleting posts once there are more than 150
- Adding error messages and alerts


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.