module.exports = function(wsconnection) {
  const WS_AUTH = {
    cmd: process.env.SERVER_AUTH,
    login: process.env.LOGIN,
    password: process.env.PASSWORD
  };

  setTimeout( ()=> {
    wsconnection.send(JSON.stringify(WS_AUTH))
  }, 1000); 
}