const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const Pusher = require("pusher");
const app = express();
const server = createServer(app);


const pusher = new Pusher({
  appId: "1870368",
  key: "587a8cdd8c40b04c27c3",
  secret: "b7e008b7c2e8e32fcad0",
  cluster: "ap1",
  useTLS: true
});

app.route('/h').get(function(req,res){

  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
  
  res.send('Welcome to my API');
});


app.route('/').get(function(req,res){
  
  res.send('Welcome to blue');
});



server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});