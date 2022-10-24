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


// todo 箭头函数的 this -> 外层作用域的 this 指向(外层的 最先找到的 非箭头函数的 this 指向)。
let s = {
  c: 100,
  test() {
    // ! 普通函数谁调用this指向就是谁。
    console.log('this指向>>>>>1', this); // {c: 100, test: ƒ} 指向 s 。
    let t1 = function() { // ? t1是箭头函数的话 this -> s t1是普通函数的话 this -> window。
      console.log('this指向>>>>>2', this);
      let t2 = () => {
        console.log('this指向>>>>>3', this); // ! t1是箭头函数的话 this -> s t1是普通函数的话 this -> window。
      }
      t2();
    }
    t1();
  }
}
s.test();