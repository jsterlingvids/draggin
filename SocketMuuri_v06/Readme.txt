

Styling! Styling the posts

- The post buttons need to be restyled
- Add livestream "now live" animation to grid
- Change quality of livestream screenshots?

- Midsizings!

- The person streaming cannot enter their stream
    - Add if statement to the buildout

- Deleting Livestreams when they're done
    - Delete Stream on refresh (and back)!

- Loading icon when selecting screenshare?

- Adding the nude.js protection
- Google Analytics API

- Deleting posts once there are more than 150
- Adding error messages and alerts


How it works (refresher):

The database is ordered by "index" number, when the "newGif" button is clicked, it pulls the entire database, splices the new gif data to the front and sends it back to the database

When a gif is moved, it sends the new database order to the server, the server iterates through the new order and assigns an "index" value, then the database updates the URLS based on the index value.