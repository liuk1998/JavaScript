/*
 * @Author: your name
 * @Date: 2022-02-18 17:29:03
 * @LastEditTime: 2022-02-18 18:04:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/string.js
 */
// ! charAt()	返回在指定位置的字符。
let str1 = 'LiuKe';
console.log('%c string方法>>> charAt(),返回在指定位置的字符', 'color: green', str1.charAt(3));

// ! concat()	连接两个或更多字符串，并返回新的字符串。
let str2 = '哇哦!';
let str3 = '太帅了!!!';
let str4 = str2.concat(str1, str3);
console.log('%c string方法>>> concat(),连接两个或更多字符串，并返回新的字符串', 'color: green', str4);

// ! endsWith()	判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。
console.log('%c string方法>>> endsWith(),判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。', 'color: green', str4.endsWith('!'));

// ! indexOf()  返回某个指定的字符串值在字符串中首次出现的位置。
console.log('%c string方法>>> indexOf(),返回某个指定的字符串值在字符串中首次出现的位置。', 'color: green', str4.indexOf('L'));

// ! lastIndexOf()	返回字符串最后出现的位置。
console.log('%c string方法>>> lastIndexOf(),返回字符串最后出现的位置。', 'color: green', str4.lastIndexOf('L'));

// ! includes()	查找字符串中是否包含指定的子字符串。
console.log('%c string方法>>> includes(),查找字符串中是否包含指定的子字符串。', 'color: green', str4.includes('L'));

// ! match()	查找找到一个或多个正则表达式的匹配。
console.log('%c string方法>>> match(),查找找到一个或多个正则表达式的匹配。', 'color: green', str4.match('/LiuK/g'));

// ! repeat()	复制字符串指定次数，并将它们连接在一起返回。
// console.log('%c string方法>>> match(),查找找到一个或多个正则表达式的匹配。', 'color: green', str4.match('/LiuK/g'));
