module.exports = function(connection) {
  const getStartData = require('./getStartData');
  const dataParse = require('./payloadParse');
  const modbusOperations = require('./modbusOperations');

  getStartData(connection);

  connection.on('message', (message) => {
      let dataFromWS, timeFromWS, dataArr;
      console.log(JSON.parse(message.utf8Data));
      var getData = JSON.parse(message.utf8Data);
      if (((getData.cmd === "get_data_resp") || (getData.cmd === "rx")) && (getData.devEui === process.env.DEVEUI) && (getData.direction === "UPLINK")) {
         dataFromWS =  getData.data_list[0].data.toString();
         timeFromWS = getData.data_list[0].ts;
         dataArr = dataParse(dataFromWS, timeFromWS); 
         modbusOperations.writeMB(dataArr);

         // To read modbus holdings registers
        //  modbusOperations.readMB();
      }
  });
}