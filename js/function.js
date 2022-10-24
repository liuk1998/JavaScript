/**
 * 常用的函数
 */
// ! try...catch 抛出错误
function Try() {
  let num = 10;
  try {
    if(num != 1) throw new Error('不相等');
  } catch(err) {
    console.error(err);
  } finally {
    console.log('结束');
  };
};
Try();


// ! 立即执行函数 目的是为了不影响全局作用域。函数执行完之后，里面的所有变量就会被释放
(() => {
  console.log('立即执行函数');
})();


// ! 递归 : 要给出口。
function Iterator(num) {
  num++;
  console.log(num);
  if(num < 10) {
    Iterator(num);
  };
};
Iterator(1);


// ! 惰性函数表示函数执行的分支只会在函数第一次调用的时候执行。后续我们所使用的就是这个函数执行的结果。