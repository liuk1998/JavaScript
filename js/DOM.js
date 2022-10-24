// ! 查找 HTML 元素:  id、标签名、类名。
// todo 通过 id 查找 HTML 元素
let box = document.getElementById('box');
// todo 通过标签名查找 HTML 元素
let p = document.getElementsByTagName('p');
// todo 通过类名找到 HTML 元素
let span = document.getElementsByClassName('text');

// ! 创建新的 HTML 元素 (节点) - appendChild(),添加新元素到尾部。只能用于id属性的DOM。
let area = document.getElementById('area');
let text = document.createElement('p');
text.innerHTML = 'DOM二';
area.appendChild(text);

// ! 创建新的 HTML 元素 (节点) - insertBefore(),添加新元素到指定元素之前。只能用于id属性的DOM。
let dom = document.createElement('div');
dom.innerHTML = 'DOM零';
area.insertBefore(dom, text);

// ! 移除已存在的元素。只能用于id属性的DOM。替换 HTML 元素 - replaceChild(被替换的元素，替换的元素)。
area.removeChild(dom);


// ! EventListener  监听事件, 只能用于 Window 或 id 属性的DOM。参数: 事件的类型 回调函数 布尔值(用于描述事件是冒泡还是捕获, 可选)
// ! removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄。例: element.removeEventListener("mousemove", myFunction);
box.addEventListener('click', (e) => console.log(e), false);
window.addEventListener('load', (e) => {
  box.innerHTML = '监听事件。';
});