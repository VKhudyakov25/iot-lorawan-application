const node_modbus = require('node-modbus');

const server = node_modbus.server.tcp.complete({
  port: 502,
  responseDelay: 200
});