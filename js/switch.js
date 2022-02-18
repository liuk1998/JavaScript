/*
 * @Author: your name
 * @Date: 2022-02-17 16:24:07
 * @LastEditTime: 2022-02-18 17:31:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/switch.js
 */

// todo switch值匹配
const date = new Date().getDay();
switch (date) {
  case 0:
    console.log('%c switch>>>今天是星期日。', 'color: orange');
    break;
  case 1:
    console.log('%c switch>>>今天是星期一。', 'color: orange');
    break;
  case 2:
    console.log('%c switch>>>今天是星期二。', 'color: orange');
    break;
  case 3:
    console.log('%c switch>>>今天是星期三。', 'color: orange');
    break;
  case 4:
    console.log('%c switch>>>今天是星期四。', 'color: orange');
    break;
  case 5:
    console.log('%c switch>>>今天是星期五。', 'color: orange');
    break;
  case 6:
    console.log('%c switch>>>今天是星期六。', 'color: orange');
    break;
};

// todo switch范围(不推荐)
const num = 5;
switch (true) {
  case num > 0:
    console.log('%c switch语句1>>>>>', 'color: orange');
  case num > 1:
    console.log('%c switch语句2>>>>>', 'color: orange');
    break;
  case num < 10:
    console.log('%c switch语句3>>>>>', 'color: orange');
    break;
  default:
    console.log('default');
};