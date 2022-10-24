// ! charAt()	返回在指定位置的字符。
let str1 = 'LiuKe';
let finStr1 = str1.charAt(3);
console.log('%c string方法>>> charAt(),返回在指定位置的字符', 'color: green', finStr1);


// ! concat()	连接两个或更多字符串，并返回新的字符串。
let str2 = '哇哦!';
let str3 = '太帅了!!!';
let str4 = str2.concat(str1, str3);
console.log('%c string方法>>> concat(),连接两个或更多字符串，并返回新的字符串', 'color: green', str4);



// ! startsWith() 查看字符串是否以指定的子字符串开头。
let finStr12 = str4.startsWith('!');
console.log('%c string方法>>> startsWith(),查看字符串是否以指定的子字符串开头。', 'color: green', finStr12);
// ! endsWith()	判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。
let finStr2 = str4.endsWith('!');
console.log('%c string方法>>> endsWith(),判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。', 'color: green', finStr2);



// ! indexOf()  返回某个指定的字符串值在字符串中首次出现的位置。
let finStr3 = str4.indexOf('L');
console.log('%c string方法>>> indexOf(),返回某个指定的字符串值在字符串中首次出现的位置。', 'color: green', finStr3);
// ! lastIndexOf()	返回字符串最后出现的位置。
let finStr4 = str4.lastIndexOf('!');
console.log('%c string方法>>> lastIndexOf(),返回字符串最后出现的位置。', 'color: green', finStr4);
// ! includes()	查找字符串中是否包含指定的子字符串。
let finStr5 = str4.includes('L');
console.log('%c string方法>>> includes(),查找字符串中是否包含指定的子字符串。', 'color: green', finStr5);
// ! match()	查找找到一个或多个正则表达式的匹配。
let finStr6 = str4.match('/LiuK/g');
console.log('%c string方法>>> match(),查找找到一个或多个正则表达式的匹配。', 'color: green', finStr6);



// ! repeat()	复制字符串指定次数，并将它们连接在一起返回。
let finStr7 = str1.repeat(3);
console.log('%c string方法>>> repeat(),复制字符串指定次数，并将它们连接在一起返回。', 'color: green', finStr7);



// ! replace() 在字符串中查找首次匹配的子串，并替换与正则表达式匹配的子串。
let finStr8 = str4.replace('LiuKe', '帅哥');
console.log('%c string方法>>> replace(),在字符串中查找匹配的子串，并替换与正则表达式匹配的子串。', 'color: green', finStr8);
// ! replaceAll() 在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。
let finStr9 = str4.replaceAll('!', '。');
console.log('%c string方法>>> replaceAll(),在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。', 'color: green', finStr9);



// ! slice() 提取字符串的片断，并在新的字符串中返回被提取的部分。(开始的下标，结束的下标)
let finStr10 = str4.slice(2,5);
console.log('%c string方法>>> slice(),在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。', 'color: green', finStr10);
// ! substr() 从起始索引号提取字符串中指定数目的字符。(开始的下标，截取的长度)
let finStr13 = str4.substr(2, 5);
console.log('%c string方法>>> substr(),从起始索引号提取字符串中指定数目的字符。', 'color: green', finStr13);
// ! substring() 提取字符串中两个指定的索引号之间的字符。(开始的下标，结束的下标)
let finStr14 = str4.substring(2, 5);
console.log('%c string方法>>> substring(),提取字符串中两个指定的索引号之间的字符。', 'color: green', finStr14);



// ! split() 把字符串分割为字符串数组。
let finStr11 = str4.split('!');
console.log('%c string方法>>> split(),把字符串分割为字符串数组。', 'color: green', finStr11);



// ! toLowerCase() 把字符串转换为小写。
let finStr15 = str1.toLowerCase();
console.log('%c string方法>>> toLowerCase(),把字符串转换为小写。', 'color: green', finStr15);
// ! toUpperCase() 把字符串转换为大写。
let finStr16 = str1.toUpperCase();
console.log('%c string方法>>> toUpperCase(),把字符串转换为大写。', 'color: green', finStr16);



// ! trim() 去除字符串两边的空白。
let str5 = '             前后都有空白   ';
let finStr17 = str5.trim();
console.log('%c string方法>>> trim(),去除字符串两边的空白。', 'color: green', finStr17);



// ! toString() 返回一个字符串。
let num1 = 110;
let finStr18 = num1.toString();
console.log('%c string方法>>> toString(),返回一个字符串。', 'color: green', finStr18);



// ! 模板字符串表达式
let name2 = "蛙人";
console.log('%c 模板字符串表达式>>> ', 'color: green', `hello ${name2}`, `<p>${name2}</p>`);