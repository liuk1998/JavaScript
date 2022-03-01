/*
 * @Author: your name
 * @Date: 2022-02-25 11:07:56
 * @LastEditTime: 2022-03-01 16:32:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/promise.js
 */

// ! Promise对象三种状态: 1.pending: 初始状态。2.fulfilled: 成功。3.rejected: 失败。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。
// todo 创建
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  }, 5000);
});
promise.then((res) => {
  console.log('then', res);
}).catch(() => {
  console.log('catch');
});


// ! Promise.all() 将多个Promise实例包装成一个新的Promise实例。(返回数组)
// ! 在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。
let sleep = (time) => {  // ! 睡觉函数
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后触发.`);
    }, time);
  });
};
let s1 = sleep(3000);
let s2 = sleep(2000);
Promise.all([s1, s2]).then((res) => {
  console.log('Promise.all()>>>>>', res);
}).catch((err) => {
  console.log('Promise.all()>>>>>', err);
});


// ! Promise.race() 哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
Promise.race([s1, s2]).then((res) => {
  console.log('Promise.race()>>>>>', res);
}).catch((err) => {
  console.log('Promise.race()>>>>>', err);
});


// ! Promise 同步队列
export function Prom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
// 使用
async function Test() {
  await Prom();
  console.log('Promise 同步队列等待后触发');
};
Test();