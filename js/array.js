/*
 * @Author: your name
 * @Date: 2022-02-24 17:17:54
 * @LastEditTime: 2022-02-24 18:10:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/array.js
 */
let array = [1,22,13,41,65,16,79];

// ! indexOf() 用于查找数组中是否存在某个值，如果存在则返回某个值的下标，否则返回-1。
let arrIn = array.indexOf(13); // 2



// todo map()与forEach()的区别: 1.map()有返回值, forEach()无返回值。2.map()可接链式语法。
// ! map() 不改变原数组。是一个数组函数方法，接收三个参数，元素，下标，数组，返回值是处理完的结果。
let arrMap = array.map((val, idx, arr) => {
  return val + idx;
}); // [1, 23, 15, 44, 69, 21, 85]
// ! forEach() 用于遍历一个数组，接收三个参数，元素，下标，数组，返回值为undefined
let arrForeach = array.forEach((val, idx, arr) => {});



// ! splice() 改变原数组。用于数组删除或替换内容，接收三个参数：删除或添加的位置, 要删除的几位, 向数组添加内容
array.splice(0, 2, 'ok'); // ['ok', 13, 41, 65, 16, 79]



// ! slice() 不改变原数组。用于截取数组值，接收两个参数，获取哪个值的下标，截取到哪个下标的前一位。
let arrSlice = array.slice(1, array.length); // [13, 41, 65, 16, 79]



// ! 不改变原数组。用于过滤数组内的符合条件的值，返回值为满足条件的数组对象
let arrFilter = arrSlice.filter(itm => itm > 50); // [65, 79]



// ! every() 用于检测数组所有元素是否都符合指定条件，返回值为Boolean, 该方法是数组中必须全部值元素满足条件返回true，否则false
let arrEvery = arrSlice.every(itm => itm > 50); // false
// ! some() 用于检测数组中的元素是否满足指定条件，返回值为Boolean , 该方法是只要数组中有一项满足条件就返回true，否则false
let arrSome = arrSlice.some(itm => itm > 50); // true



// ! reduce() 不改变原数组。接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。接收四个参数, 一般只用前两个就行，reduce第一个参数回调函数，计算结束后的返回值, 第二个参数是初始值
let arrReduce = arrSlice.reduce((i, p) => i += p, 0); // 214
console.log(arrReduce);
