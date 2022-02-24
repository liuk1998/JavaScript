/*
 * @Author: your name
 * @Date: 2022-02-24 14:51:35
 * @LastEditTime: 2022-02-24 15:00:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/this.js
 */

let selfObj = {
  name: '刘可',
  age: '24',
  myFunc: function(address) {
    console.log(`%c名字: ${this.name}, 年龄: ${this.age}, 地址: ${address}`, 'color: rgb(182,24,226)');
  }
};
selfObj.myFunc('辽宁省大连市');

let db = {
  name: '宋帅',
  age: '23'
};
// ! call, apply, bind改变this指向。
selfObj.myFunc.call(db, '辽宁省锦州市');
selfObj.myFunc.apply(db, ['辽宁省锦州市']);
selfObj.myFunc.bind(db, '辽宁省锦州市')();

