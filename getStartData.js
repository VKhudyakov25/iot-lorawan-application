module.exports = function(wsconnection) {
  const GET_WS_DATA = {
    cmd: process.env.GET_DATA,
    devEui: process.env.DEVEUI,
    select: {
      limit: 1,
      direction: "UPLINK",
      port: 2
    } 
  };
  setTimeout( ()=> {
    wsconnection.send(JSON.stringify(GET_WS_DATA))
  }, 2000);

}