- SSR简介

- 搭建React SSR框架，解决 CSR的问题

- 在框架中如何实现同构

- 框架中路由机制的实现

- 框架与Redux的融合 

- 框架作为中间层的职能处理

- 细节调优

- 样式相关的Webpack配置

- 框架SEO特性优化

- 预渲染技术



Csr劣势：

- 首屏加载时间
- seo



ssr框架：

react Next

vue nuit



react csr流程：

1. 浏览器发送请求
2. 服务器返回HTML
3. 浏览器发送bundle.js请求
4. 服务器返回bundle.js
5. 浏览器执行bundle.js中的React代码



React ssr流程：

1. 浏览器发送请求
2. 服务器运行React代码生成页面
3. 服务器返回页面



所以ssr就是，在服务器端编写React组件



什么是同构？

服务端react事件，无法渲染。解决方法，让事件，在浏览器端，和客户端渲染一样， 去被执行。

同构：一套React代码，在服务器端执行一次，再在客户端执行一次



在浏览器中执行一段JS代码





React同构的流程



1.服务器端运行React代码渲染出HTML

2.发送HTML给浏览器

3.浏览器接收到内容展示



4.浏览器加载J  S文件 

5.JS中的React代码在浏览器端重新执行  ReactDom.hydrate

6.JS中的React代码接管页面操作  client文件夹



![image-20210614215306178](/Users/wangguanyu/wgy/IT/frontEnd/ssr/img/image-20210614215306178.png)



浏览器执行js

node Server 拼接页面

java Server 数据查询



引入redux











