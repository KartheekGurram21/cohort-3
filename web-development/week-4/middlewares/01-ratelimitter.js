// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which


let numberOfRequestsForUser = {};
// clears every one second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);


function rateLimitter(req, res, next) {
  const id = req.headers['user-id'];
  if(numberOfRequestsForUser[id]) {
    numberOfRequestsForUser[id]++;
    if(numberOfRequestsForUser[id]>5) {
      res.status(404).send("Rate limit exceeded: Max 5 requests per second");
    }
  } else {
    numberOfRequestsForUser[id] = 1;
  }
  next();
}

app.use(rateLimitter);


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;