import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import routes from '../Routes'

import { getClientStore } from '../store';

const store = getClientStore();

const App = () => {
    console.log('clientApp', store);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {
                        routes.map(route => {
                            return <Route {...route} />
                        })
                    }
                </div>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'));