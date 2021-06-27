
// 虚拟DOM是真实DOM的一个javascript对象映射
// 服务器端，虚拟dom->字符串
// 客户端，虚拟dom->真实DOM

// 虚拟dom的优势
// 1. 提升页面渲染性能
// 2. 使react做服务器端渲染非常简单

// 服务器端渲染优势
// 1. 首屏加载速度快
// 2. SEO效果大大提升

// 服务器端渲染劣势
// 1.客户端渲染：React代码在浏览器上执行，消耗的是用户浏览器的性能
//   服务器端渲染：React代码在服务器上执行，消耗的是服务器端的性能
//   消耗服务器端性能


import express from 'express';
import { matchRoutes } from 'react-router-config';

import { render } from './utils';
import { getStore } from '../store';
import routes from '../Routes';



const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
    let store = getStore();

    // 根据路由的路径，往store中添加数据
    const matchedRoutes = matchRoutes(routes, req.path);

    const promises = [];
    matchedRoutes.forEach((item => {
        console.log('item111', item);
        console.log('item112', item.route.loadData);

        if (item.route.loadData) {
            item.route.loadData(store);
        }
    }));

    Promise.all(promises).then(() => {
        console.log('matchedRoutesaaa1', matchedRoutes);
        console.log('matchedRoutesaaa2', store.getState());

        res.send(render(store, routes, req));
    });
});

var server = app.listen(3000);

