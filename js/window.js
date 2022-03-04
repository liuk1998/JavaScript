/*
 * @Author: your name
 * @Date: 2022-02-24 11:25:33
 * @LastEditTime: 2022-03-01 16:52:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /JavaScript/js/window.ts
 */

// ! Window Location 获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
console.log(
  `web协议>>>${location.protocol}`,
  `web主机的域名/IP>>>${location.hostname}`,
  `web主机的端口>>>${location.port}`,
  `web主机的路径和文件名>>>${location.pathname}`,
  `web主机的URL>>>${location.href}`,
  `web主机的协议+域名+端口>>>${location.origin}`,
);


// ! 获取url参数值
export function getUrl(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
// 使用
let view = getUrl('view'); // 参数自定 URL拼接参数名称
console.log('%c获取url参数值', 'color: grey', view);


// ! Window History 浏览器的历史。
// ? history.back() - 与在浏览器点击后退按钮相同
// ? history.forward() - 与在浏览器中点击向前按钮相同


// ! 计时
let t = setInterval(() => {
  // console.log('定时器计时ing');
}, 1000);
setTimeout(() => {
  clearInterval(t);
  // console.log('清除定时器');
}, 5000);