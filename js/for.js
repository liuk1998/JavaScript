// ! for
for(let i = 0; i < 5; i++) {
  // console.log('for>>>>>', i);
};

// ! forEach 实际是为循环数组而设计的
let arrForEach = [1,2,3,4,5,6];
arrForEach.forEach((itm, idx) => {
  // console.log(itm, idx);
});

// ! for-in 实际是为循环对象而设计的
let objForIn = {'01': '刘可', '02': '刘寅'};
for (let key in objForIn) {
  // console.log('for...in >>>>>', key, objForIn[key]);
};

// ! for-of 它既比传统的for循环简洁，同时弥补了forEach和for-in循环的短板。
// todo 循环数组
const arrForOf = [1,2,3,4,5,6];
for (const val of arrForOf) {
  // console.log(val);
};
// todo 循环字符串
const strForOf = '刘可';
for (const val of strForOf) {
  // console.log(val);
};
// todo 循环Map
const mapForOf = new Map([['01', '刘可'], ['02', '刘寅']]);
for (const [key, val] of mapForOf) {
  console.log(key, val); // 01 刘可   02 刘寅
};