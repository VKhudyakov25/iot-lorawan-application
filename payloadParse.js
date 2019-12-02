module.exports = function(data, time) {

  const timeConverter = require('./timeConverter');

  let bat_state = data.slice(2, 4);
  bat_state = parseInt(bat_state, 16);
  let temp_state = data.slice(14, 16);
  temp_state = parseInt(temp_state, 16);


  let ports = data.slice(16, 48);
  let port_1_1_1 = ports.slice(6, 8);
  let port_1_2_2 = ports.slice(4, 6);
  let port_1_3_1 = ports.slice(2, 4);
  let port_1_4_2 = ports.slice(0, 2);

  let port_1_1 = port_1_1_1 + port_1_2_2;
  port_1_1 = parseInt(port_1_1, 16);
  let port_1_2 = port_1_3_1 + port_1_4_2;
  port_1_2 = parseInt(port_1_2, 16);


  let port_2_1_1 = ports.slice(14, 16);
  let port_2_2_2 = ports.slice(12, 14);
  let port_2_3_1 = ports.slice(10, 12);
  let port_2_4_2 = ports.slice(8, 10);

  let port_2_1 = port_2_1_1 + port_2_2_2;
  port_2_1 = parseInt(port_2_1, 16);
  let port_2_2 = port_2_3_1 + port_2_4_2;
  port_2_2 = parseInt(port_2_2, 16);

  let port_3_1_1 = ports.slice(22, 24);
  let port_3_2_2 = ports.slice(20, 22);
  let port_3_3_1 = ports.slice(18, 20);
  let port_3_4_2 = ports.slice(16, 18);

  let port_3_1 = port_3_1_1 + port_3_2_2;
  port_3_1 = parseInt(port_3_1, 16);
  let port_3_2 = port_3_3_1 + port_3_4_2;
  port_3_2 = parseInt(port_3_2, 16);


  let port_4_1_1 = ports.slice(30, 32);
  let port_4_2_2 = ports.slice(28, 30);
  let port_4_3_1 = ports.slice(26, 28);
  let port_4_4_2 = ports.slice(24, 26);

  
  let port_4_1 = port_4_1_1 + port_4_2_2;
  port_4_1 = parseInt(port_4_1, 16);
  let port_4_2 = port_4_3_1 + port_4_4_2;
  port_4_2 = parseInt(port_4_2, 16);

  let timeData = timeConverter(time);

  let end_data = [bat_state, temp_state, port_1_1, port_1_2, port_2_1, port_2_2, port_3_1, port_3_2, port_4_1, port_4_2, timeData.day, timeData.month, timeData.year, timeData.hours, timeData.minutes, timeData.seconds];
  return end_data;

}

