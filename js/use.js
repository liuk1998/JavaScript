/*
 * @Author: your name
 * @Date: 2022-02-24 15:03:34
 * @LastEditTime: 2022-02-24 17:25:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/use.js
 */
// ! 常用技巧

// todo 交换变量
let [x, y] = [10, 20];
[x, y] = [y, x]; // 20, 10


// todo 数组去重
let arr1 = [1, 1, 100, 1, 2, 2, 3, 100];
let newArr = [...new Set(arr1)]; // [1, 100, 2, 3]


// todo 生成随机Id
Math.random().toString(36).substr(2); // z9mxfiiftm


// todo 获取对象key键值
let objA = { nameA: '刘可', ageA: 24 };
let objAKey = Object.keys(objA); // ['nameA', 'ageA']
// todo 获取对象value值
let objAVal = Object.values(objA); // ['刘可', 24]


// todo 模板字符串表达式
let name1 = "蛙人";
console.log(`hello ${name1}`, `<p>${name1}</p>`);


// todo 获取对象里指定的值(解构)
let { nameA, ageA } = objA; // 刘可 24


// todo 快速将字符串转换为数组
let strU1 = 'LiuKe';
let strU1Arr = [...strU1]; // ['L', 'i', 'u', 'K', 'e']


// todo 使用三目运算判断值
let statusUse = 1;
let newStatus = statusUse === 1 ? '成功' : '失败'; // 成功


// todo ??运算符: 只有前面的值是undefined or null才会执行。
let stateUse = undefined;
let textUse = stateUse ?? '新文本'; // 新文本


// todo 可选链
let person = {};
//console.log(person.name.toString()) // 报错
//console.log(person.name?.toString()) // undefined


// todo ~~双非运算符: 向下取整, 类似于Math.floor()
let numUse = ~~5.21; // 5


// todo 合并对象, 如果对象里面有重复的值, 则后面覆盖前面, 可以接收无限参数。
let newObj = Object.assign(objA, {address: '大连市'}, {phone: 110}); // {nameA: '刘可', ageA: 24, address: '大连市', phone: 110}


// todo 随机打乱数组顺序
let list = [1,2,'蛙人', 1, 34, 3, 12];
let res = list.sort(() => Math.random() - 0.5); // [12, 34, 1, 3, 1, 2, '蛙人']


// todo 事件委托: 将所有的操作放到js程序里面, 与dom的操作就只需要交互一次, 只对它的父级这一个对象进行操作。
// ? 使用场景: 比如我们有100个li，每个li都有相同的click点击事件，可能我们会用for循环的方法，来遍历所有的li，然后给它们添加事件(不推荐)。应该是将所有的操作放到js程序里面, 与dom的操作就只需要交互一次, 只对它的父级这一个对象进行操作。
//ul.on("click", "li", e => { });


// todo 快速获取时间戳
let newDate11 = +new Date();
let newDate22 = Date.now();

