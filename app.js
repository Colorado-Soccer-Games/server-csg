const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());

// twilio ? goes here ?


// this displays both tables
app.get("/", (request, response) => {
  queries
    .list("games")
    .then(games =>
        response.json({
          games: games
        })
      )
    .catch(console.error);
});
// shows the games table
app.get("/games", (request, response) => {
  queries
    .list("games")
    .then(capstone => {
      response.json({ capstone });
    })
    .catch(console.error);
});
// gets the games data table by location name
app.get("/games/:location", (request, response) => {
  queries
    .read(request.params.location, "games")
    .then(games => {
      games ? response.json({ games }) : response.sendStatus(404);
    })
    .catch(console.error);
});

// it hit none of the paths
app.use((request, response) => {
  response.sendStatus(404);
});
// export entire app
module.exports = app;
