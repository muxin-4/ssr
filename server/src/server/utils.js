import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';


export const render = (store, routes, req) => {


    // 拿到异步回调数据，填充到store中
    // store里面到底填充什么，我们不知道，我们需要结合当前用户请求地址，和路由做判断
    // 如果用户访问 / 路径，我们就拿home组件的异步数据
    // 如果用户访问login路径，我们就拿login组件的路径

    // use `some` to imitate `<Switch>` behavior of selecting only
    // the first to match
    // routes.some(route => {
    //     // use `matchPath` here
    //     const match = matchPath(req.path,  route);
    //     if (match) matchRoutes.push(route);
    //     return match;
    // });

    // 让matchRoutes里面所有的组件，对应的loadData方法执行一次

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {
                        routes.map(route => {
                            return <Route {...route} />
                        })
                    }
                </div>
            </StaticRouter>
        </Provider>
    ));

    return (`
            <html>
                <head>
                    <title>hello</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.context = {
                            state: ${JSON.stringify(store.getState())}
                        }
                    </script>
                </body>
                <script src='/index.js'></script>
            </html>
        `);
}