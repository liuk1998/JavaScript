// ! parseFloat 解析一个字符串并返回一个浮点数。
let str = '5.21';
let number1 = parseFloat(str);
console.log('%c 全局属性/函数>>> parseFloat(),解析一个字符串并返回一个浮点数。', 'color: brown', number1);
// ! parseInt() 解析一个字符串并返回一个整数。
let number2 = parseInt(str);
console.log('%c 全局属性/函数>>> parseInt(),解析一个字符串并返回一个整数。', 'color: brown', number2);



// ! 判断类型
let count = 1;
let n = null;
let arr = [];
let func = function getType() {};
// todo     typeof()对于原始类型来说, 除了 null, 都可以显示正确的类型。对于引用类型来说, 除了函数都会显示 object。
console.log('%c 判断类型>>>typeof()', 'color: brown', typeof(count), typeof(null), typeof(arr), typeof(func));
// todo     instanceof可以精准判断引用类型(Array，Function，Object), 而基本类型不能被instanceof精准判断。(通过原型链)
console.log('%c 判断类型>>>instanceof', 'color: brown', count instanceof Number, arr instanceof Array, func instanceof Function);
// todo     Object.prototype.toString.call()精准判断类型。返回为[object 类型]。
let objFunc = Object.prototype.toString;
console.log('%c 判断类型>>>Object.prototype.toString.call()', 'color: brown', objFunc.call(count), objFunc.call(n), objFunc.call(arr), objFunc.call(func));
