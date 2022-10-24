// ! Set
// todo 数组去重
let set = [...new Set([1,1,2,3,1,5])]; // [1, 2, 3, 5]
// todo 去除字符串里面的重复字符。
let setStr = [...new Set('abcbbbc')].join(''); // abc


// ! Map 比对象更完善的键值对
let map1 = new Map();

// todo 键名key对应的键值为value，然后返回整个 Map 结构。可以采用链式写法。
let map2 = new Map([['01', '刘可'], ['02', '刘寅']]); // Map(2) {'01' => '刘可', '02' => '刘寅'}
// todo 键名key对应的键值为value，然后返回整个 Map 结构。可以采用链式写法。
map1.set('name', '刘可').set('hobby', ['唱歌', '打篮球']); // Map(2) {'name' => '刘可', 'hobby' => Array(2)}

// todo 返回 Map 结构的成员总数。
let size = map1.size; // 2

// todo 读取key对应的键值。
let val = map1.get('hobby'); // ['唱歌', '打篮球']

// todo 返回一个布尔值，表示某个键是否在当前 Map 对象之中。
let m = map1.has('name'); // true

// todo 返回键名(数组)
[...map1.keys()]; // ['name', 'hobby']
// todo 返回键值
[...map1.values()]; // ['刘可', ['唱歌', '打篮球']]
// todo 返回所有成员
map1.entries(); // Map(2) {'name' => '刘可', 'hobby' => Array(2)}

// todo Map转数组
[...map1]; // [['name', '刘可'], ['hobby', ['唱歌', '打篮球']]]
// todo 对象转为 Map
let objNew = {'1': '刘可', '2': '刘寅'};
let map3 = new Map(Object.entries(objNew)); // Map(2) {'1' => '刘可', '2' => '刘寅'}

// todo 删除某个键，返回true。如果删除失败，返回false。
map1.delete('name');
// todo 清除所有成员，没有返回值。
map1.clear();