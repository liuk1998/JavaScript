let array = [1,22,13,41,65,16,79];

// ! indexOf() 用于查找数组中是否存在某个值，如果存在则返回某个值的下标，否则返回-1。
let arrIn = array.indexOf(13); // 2
// ! includes() 检测数组中是否存在该元素，返回Boolean值
let arrIncludes = array.includes(13); // true



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



// ! reverse() 改变原数组。用于数组反转
array.reverse(); // [79, 16, 65, 41, 13, 'ok']



// ! join() 用于数据以什么形式拼接
let arrJoin = array.join('-'); // 79-16-65-41-13-ok
// ! toString() 用于将数组内容转换为字符串
let arrString = array.toString(); // 79,16,65,41,13,ok



// ! sort() 改变原数组。用于将数组排序，排序规则看返回值。返回值为正数,后面的数在前面。返回值为负数,前面的数不变,还在前面。返回值为0,都不动。
arrSlice.sort((a, b) => a - b); // [13, 16, 41, 65, 79]



// ! concat() 不改变原数组。用于合并数组原始
let arrConcat = arrSlice.concat([1,2,3]); // [13, 16, 41, 65, 79, 1, 2, 3]



// ! push() 改变原数组。向数组后面添加元素，返回值为数组的length
arrConcat.push(22); // [13, 16, 41, 65, 79, 1, 2, 3, 22]
// ! pop() 改变原数组。用于删除数组尾部的元素，返回值为删除的元素
arrConcat.pop(); // [13, 16, 41, 65, 79, 1, 2, 3]
// ! shift() 改变原数组。用于删除数组的头部，返回值为删除的元素
arrConcat.shift(); // [16, 41, 65, 79, 1, 2, 3]
// ! unshift() 改变原数组。向数组的头部添加元素，返回值为数组的length
arrConcat.unshift(555); // [555, 16, 41, 65, 79, 1, 2, 3]



// ! Array.isArray() 检测对象是不是一个数组
let arrIs = Array.isArray(arrConcat); // true



// ! find() 查找数组的元素，满足条件的返回单个值，按照就近原则返回
let arrFind = arrConcat.find(itm => itm > 10); // 555
// ! findIndex() 查找数组中元素，满足条件的返回数组下标
let arrFindIdx = arrConcat.findIndex(itm => itm > 1000); // -1



// ! flat() 用于拉平嵌套数组对象
let arrDb = [1,2,3,[4,5],[[6,7]]];
let arrFlat = arrDb.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]



// ! fill() 改变原数组。用于填充数组对象
arrFlat.fill(2); // [2, 2, 2, 2, 2, 2, 2]



// ! Array.of() 用于生成一个数组对象，主要是用来弥补Array()的不足
let arrOf = Array.of(3,2,111); // [3, 2, 111]



// ! 扩展运算符
// todo 复制数组
let arrBig1 = [...arrOf]; // [3, 2, 111]
// todo 合并数组
let arrBig2 = [...arrOf, ...arrConcat, ...arrSlice]; // [3, 2, 111, 555, 16, 41, 65, 79, 1, 2, 3, 13, 16, 41, 65, 79]
// todo 将字符串转为真正的数组
let arrStr = 'hello';
let arrBig3 = [...arrStr]; // ['h', 'e', 'l', 'l', 'o']
// todo 将一个数组转为用逗号分隔的参数序列(用于传参)
//console.log(...arrOf); // 3 2 111