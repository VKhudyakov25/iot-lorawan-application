module.exports = function(rawTime){

  let cur_date = new Date(rawTime);
  let timeData = {
    day: cur_date.getDate(),
    month: cur_date.getMonth() + 1,
    year: cur_date.getFullYear(),
    hours: cur_date.getHours(),
    minutes: cur_date.getMinutes(),
    seconds: cur_date.getSeconds()
  }
return timeData;
}
