// ! 时间
let date1 = new Date(); // todo 中国标准时间
let yearFull = date1.getFullYear(); // todo 获取完整的年份
let month = date1.getMonth(); // todo 获取当前月份(0-11,0代表1月)
let day = date1.getDate(); // todo 获取当前日(1-31)
let week = date1.getDay();  // todo 获取当前星期X(0-6,0代表星期天)
let time = date1.getTime(); // todo 获取当前时间(从1970.1.1开始的毫秒数)
let hour = date1.getHours(); // todo 获取当前小时数(0-23)
let minutes = date1.getMinutes(); // todo 获取当前分钟数(0-59)
let seconds = date1.getSeconds(); // todo 获取当前秒数(0-59)
let milliseconds = date1.getMilliseconds(); // todo 获取当前毫秒数(0-999)
let localDate = date1.toLocaleDateString(); // todo 获取当前日期
let localTime = date1.toLocaleTimeString(); // todo 获取当前时间
let dateTime = date1.toLocaleString( ); // todo 获取日期与时间
console.log('%c 时间>>> new Date()', 'color: rgb(19,199,153)', date1, yearFull, month, day, week, time, hour, minutes, seconds, milliseconds, localDate, localTime, dateTime);


// todo 快速获取时间戳
let newDate1 = +new Date();
let newDate2 = Date.now();


// ! 时间
export function formatDate(date, formatStr) {
  let str = formatStr;
  let Week = ['日', '一', '二', '三', '四', '五', '六'];

  str = str.replace(/yyyy|YYYY/, date.getFullYear().toString());
  str = str.replace(/yy|YY/, (date.getFullYear() % 100) > 9 ? (date.getFullYear() % 100).toString() : '0' + (date.getFullYear() % 100));
  let month = date.getMonth() + 1;
  str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
  str = str.replace(/M/g, month.toString());

  str = str.replace(/w|W/g, Week[date.getDay()]);

  str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
  str = str.replace(/d|D/g, date.getDate().toString());

  let hour = date.getHours();
  str = str.replace(/HH/, hour > 9 ? hour.toString() : '0' + hour);
  str = str.replace(/H/g, hour.toString());

  str = str.replace(/A/g, hour >= 12 ? 'PM' : 'AM');
  str = str.replace(/Aa/g, hour >= 12 ? 'pm' : 'am');

  hour = hour > 12 ? hour % 12 : hour;
  str = str.replace(/hh/, hour > 9 ? hour.toString() : '0' + hour);
  str = str.replace(/h/g, hour.toString());

  str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
  str = str.replace(/m/g, date.getMinutes().toString());
  str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
  str = str.replace(/s|S/g, date.getSeconds().toString());

  return str;
}
// 使用
let date = new Date();
let newDate = formatDate(date, "YYYY-MM-DD hh:mm:ss");
console.log('%c 时间函数', 'color: rgb(19,199,153)', newDate);


// ! 时间比较
export function compareDate(timeArr) {
  let newDate = timeArr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  return newDate;
}
// 使用
let cDate = compareDate(['2021-03-20 10:34:07', '2021-03-15 10:34:07']);
console.log('%c 时间比较', 'color: rgb(19,199,153)', cDate);