/*
 * @Author: your name
 * @Date: 2022-02-24 10:56:38
 * @LastEditTime: 2022-02-24 17:16:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/math.js
 */

// ! Math对象
let max = Math.max(10, 20, -1, 1000); // todo 最大值
let min = Math.min(10, 20, -1, 1000); // todo 最小值
let abs = Math.abs(-100); // todo 绝对值
let floor = Math.floor(3.14); // todo 向下取整
let floor1 = ~~3.14; // todo 向下取整（缩写）
let ceil = Math.ceil(3.14); // todo 向上取整
let round = Math.round(5.21); // todo 四舍五入
let random = Math.random(); // todo 随机0~1之间的数
let box1 = Math.floor(Math.random()*(60 - 30 + 1) + 30); // todo 公式(限制范围): Math.floor(Math.random()*(max - min + 1) + min);

console.log('%c Math对象>>>', 'color: rgb(95,25,225)', max, min, abs, floor, floor1, ceil, round, random, box1);
