/*
 * @Author: your name
 * @Date: 2022-02-24 10:26:58
 * @LastEditTime: 2022-02-24 10:49:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/date.js
 */

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
