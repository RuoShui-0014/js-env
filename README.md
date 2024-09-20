# Web环境框架
作者：若水
vx: proxy0014
qq: 2370712779
交流群：907897634

基于isolated-vm魔改虚拟机实现的js环境框架，封装了一套非js标准的代理和native函数创建的方法，全局对象等其他对象均不可检测，document.all等均可实现同底层一样效果

基本使用看Sites/下的案例，后续再更新使用文档

### 操作浏览器对象绑定的属性值
+ 获取值(不触发访问器)
    ```js
    var cookie = rsvm.get(document, "cookie");
    // 不同于
    var cookie = document.cookie;
    ```
+ 设置值(不触发访问器)
    ```js
    rsvm.set(document, "cookie", "wdf");
    // 不同于
    document.cookie = "wdf";
    ```

### 设置网站url
```js
rsvm.siteInfo.url = "https://www.baidu.com/";
```
框架自动根据改值做解析和location对象的构建，location.href, window.origin, document.URL等

### 加载构建dom
直接通过给 rsvm.siteInfo.html 复制上网页源码，即可构建
```js
rsvm.siteInfo.html = "<html>......</html>";
```
框架模拟了浏览器构建dom的过程，在遇到script节点，如有脚本代码则会执行代码后再继续构建dom，我称之为“按需加载”，其控制函数为rsvm.build()。 
+ 如需“按需加载”，则调用rsvm.build(true), 会在script节点停止构建，此时你可以运行自己的代码，后再调用rsvm.build(true)构建碰到script节点，再继续运行你的代码
+ 不需“按需加载”，则调用rsvm.build(false)可从当前将要加载的节点开始直接将dom构建完成。

### 版本控制
不同的脚本可根据rsvm.siteInfo.version进行返回值的控制
```js
rsvm.siteInfo.version = "rs6_yaojian";
```

### 缺值/补值
调试时可通过rsvm.ifProxy=true在框架加载时给一般对象进行代理，全局对象的代理通过在使用isolated-rsvm插件创建上下文时设置rsvm和intercept参数为true
```js
let context = await isolate.createContext({ inspector: true, rsvm: true, intercept: true });
```
可通过rsvm.glog=true/rsvm.log=true将全局对象和一般对象的操作日志输出开关打开
根据日志，将缺的值补充到对应对象或函数中
