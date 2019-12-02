module.exports = {
  readMB: readMB,
  writeMB: writeMB
}

function readMB() {
  const node_modbus = require('node-modbus');
  const clientMB = node_modbus.client.tcp.complete({
    'host': 'localhost', /* IP or name of server host */
    'port': 502, /* well known Modbus port */
    'unitId': 1, 
    'timeout': 2000, /* 2 sec */
    'autoReconnect': true, /* reconnect on connection is lost */
    'reconnectTimeout': 15000, /* wait 15 sec if auto reconnect fails to often */
    'logLabel' : 'ModbusClientTCP', /* label to identify in log files */
    'logLevel': 'error', /* for less log use: info, warn or error */
    'logEnabled': true
  })
  const time_interval = 5000;

  clientMB.connect();
  
  clientMB.on('connect', () => {
    setTimeout( ()=> {
      setInterval(() => {
      clientMB.readHoldingRegisters(0, 40).then((response) => console.log(`Success reading of holding registers: ${JSON.stringify(response.register)}`))
      }, time_interval)
    }, 2000);
  })
}

  
function writeMB(data) {
  const modbusStructure = require('./modbusOpsStructure');
  const node_modbus = require('node-modbus');
  const clientMB = node_modbus.client.tcp.complete({
    'host': 'localhost', /* IP or name of server host */
    'port': 502, /* well known Modbus port */
    'unitId': 1, 
    'timeout': 2000, /* 2 sec */
    'autoReconnect': true, /* reconnect on connection is lost */
    'reconnectTimeout': 15000, /* wait 15 sec if auto reconnect fails to often */
    'logLabel' : 'ModbusClientTCP', /* label to identify in log files */
    'logLevel': 'error', /* for less log use: info, warn or error */
    'logEnabled': true
  })
  const time_interval = 5000;
  var modBusBuf;
  
  clientMB.connect();
  clientMB.on('connect', () => {
      dataMB = modbusStructure(data); 
      setTimeout(() => {
        clientMB.writeMultipleRegisters(0, dataMB).then((response) => console.log(`Success writing function ${response.fc} with start address ${response.startAddress} in quantity ${response.quantity}`))
      }, 2000)
  })
}