// 基础数据类型
var num = 10; // es5 常量变量 number类型
const num1 = 100; // es6常量
let num2 = 1000; // es6变量
num += 1;

if (num > 1) {
  let num3 = 200;
  var num4 = 300;
  console.log(num1, num3);
} else {
  console.log(num3, num4);
}

let str = '1111'; // 字符串类型
let boolean = true; //布尔类型
let n = null; // 声明但没有值
let u = undefined; // 根本就不存在
let sys = Symbol('刘可'); // 唯一
sys = Symbol('lk');
let sss = Symbol('lk');
const a1 = 'lyq';
const a2 = 'lyq';
console.log(sys,sss, sys === sss, a1 === a2);
let big = 100n; // bigInt
console.log(big);

// 引用数据类型
let obj = {}; // 对象，函数，数组.....
// 存储的地址不一样，指针指向也不一样。

function getName() {
  console.log('>>>>>', sys);
}

let arr = [1,'2',false,{'id': '222'}]; // array


// 判断类型的方法
// todo  1.typeof 判断基础数据类型
// console.log('typeof>>', typeof(str), typeof(obj), typeof(arr));
// todo  2.instanceof 判断引用数据类型
// console.log('instanceof>>', str instanceof String, obj instanceof Object, arr instanceof Array);
// todo  3.Object.prototype.toString.call()
// console.log('instanceof>>', Object.prototype.toString.call(str), Object.prototype.toString.call(obj), Object.prototype.toString.call(arr));


// 打印
// console.log('1');
// console.warn('1');
// console.error('1');


// 数组方法
let arrNew = [1,2,3,50,1,60,100, '老婆=刘彦琦'];

// 存在
// console.log(arrNew.indexOf(50),arrNew.indexOf('老婆'));
// console.log(arrNew.includes(50),arrNew.includes('老婆=刘彦琦'));

// 遍历
arrNew.forEach((ppp, index, arr) => {
  ppp += 1;
  console.log('forEach',ppp, index, arr);
})


let arrObj = [{id: 1}, {id: 2}, {id: 3}];

// let poi = arrObj.map(i => i.id)
let poi = arrObj.map((i) => {
  i.id += 100;
  return i.id;
});
console.log('map>>>>>>>>>>>>', poi);

// console.log('map', poi, arrNew[0], arrNew[arrNew.length - 1]);
// arrNew.splice(0, 2, '刘可最帅');

let c = arrNew.filter((i) => {
  return typeof(i) === 'number';
})
console.log('filter',c);


// 普通函数与箭头函数的区别
let f = 1;
function Func() {
  f += 20;
};
Func();

let abc = () => {
  return f += 30;
};
abc();

let objTwo = {
  id: 1,
  name: '刘彦琦',
  getName() {
    console.log(this.name, this);
    let t = () => {
      console.log(this);
    };
    let t1 = function() {
      console.log(this);
    };
    t();
    t1();
  }
}

// objTwo.getName();

// 改变this指向(普通)
let nameObj = {
  name: '刘可',
  age: 18,
  getInfo: function(sex) {
    console.log(this.name, this.age, sex, '信息');
  }
};

let newObj = {
  name: '刘彦琦',
  age: 8
}

nameObj.getInfo.call(newObj, '女');
nameObj.getInfo.apply(newObj, ['女']);
nameObj.getInfo.bind(newObj, '女')();



let arr11 = [1,2,3,4,5,6];
let arr22 = arr11.slice(1, 5);
console.log('slice>>>', arr22); // 2,3,4,5

let arr33 = arr11.every(i => {
  return i > 0;
});
let arr44 = arr11.some(i => {
  return i > 0;
});

let arr55 = arr11.reduce((a, b) => a -= b, 2);
console.log('reduce', arr55);

arr11.reverse();

let arr66 = arr11.join('1'); // 11213141516
let arr77 = arr11.toString(); // 1,2,3,4,5,6
console.log('join', arr66, arr77);

let arr222 = [100, 1 ,222, 99, 33];
let arr88 = arr222.sort((a, b) => b - a);
console.log('sort', arr88);

let arr00 = arr11.concat(1,2,3,4,5);
console.log('concat', arr00);


arr11.push(12);
arr11.pop();
arr11.unshift(12);
arr11.shift();

let arr23 = Array.isArray(arr11); // true / false

let arr24 = arr11.find(itm => itm > 1); // 6
let arr25 = arr11.findIndex(itm => itm > 1); // 0
console.log('find', arr24, arr25);

let arrDb = [1,2,3,[4,5],[[6,7]]];
let arrFlat = arrDb.flat(Infinity);
console.log('flat', arrFlat);


let o1 = [1,2,3];
let o2 = [11,22,33];
let o3 = [12,21,34];
let o5 = [12,21,34];
// 1.合并数组
let o4 = [...o1, ...o2, ...o3, ...o5]; //
console.log('...', o4);
// 2. 将字符串转换成数组
let str111 = '刘彦琦';
let s1111 = [...str111]; //
console.log('将字符串转换成数组', s1111);
// 3. 将数组变成参数序列
function getArr(...arr) {


  console.log('参数序列', ...arr, '数组', arr);


}
getArr(...o4);