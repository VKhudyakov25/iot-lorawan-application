// Create a new Express router

const express = require('express');
const router = express.Router();
const mainPage = require('./controllers/main.controller');

// Export Router

module.exports = router;


// Define route

router.get('/', mainPage.showMainPage);



//var ws_connection = new WebSocket('ws://89.107.99.123:8011');
let ws_connection = new WebSocket('wss://echo.websocket.org');


ws_connection.onopen = () => {
  console.log('Connected to WebSocket...');
}

ws_connection.onerror = () => {
  console.log(Error);
}

ws_connection.onmessage = (message) => {
  // try to decode json
  try {
    var json = JSON.parse(message.data);
    console.log(json);
  } catch (e) {
    console.log('This doesn\'t look like a valid JSON: ',
        message.data);
    return;
  }
};