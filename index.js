require('dotenv').config();
const WebSocketClient = require('websocket').client;
const app = require('./app');
const node_modbus = require('node-modbus');
const authWS = require('./authorization');
const serverModbus = node_modbus.server.tcp.complete({
  port: 502,
  responseDelay: 200
});
let clientWS = new WebSocketClient();

clientWS.connect(process.env.WS_URL);
clientWS.on('connectFailed', (error) => {
    console.log('Connect Error: ' + error.toString());
});
clientWS.on('connect', (wsconnection) => {
  console.log('WebSocket Client Connected');
  authWS(wsconnection);
  app(wsconnection);
});

