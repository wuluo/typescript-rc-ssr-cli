/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-09 14:50:21
 * @Description: 
 */
import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';

// createHistory
import { createBrowserHistory } from 'history';

// components
import RenderPages from 'app/components/RenderPages';

// rootRoutes
import rootRoutes from 'app/config/routes.config';

// storeFactory
import storeFactory from 'app/store';

// css
import './style.scss';

declare const __BASENAME__: string;

const history = createBrowserHistory({
    basename: __BASENAME__,
});

// store
const initState = {};
const store = storeFactory.getInstantiate(initState, history);

declare global {
    interface Window {
        __STORE__?: any;
    }
}

class App extends React.Component {
    render(): JSX.Element {

        return (
            <Provider store={store} context={ReactReduxContext}>
                <ConnectedRouter history={history} context={ReactReduxContext}>
                    <Router history={history}>
                        <RenderPages routes={rootRoutes} />
                    </Router>
                </ConnectedRouter>
            </Provider>
        );
    
    }
}

export default App;