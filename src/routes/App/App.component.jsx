import './App.scss';
import React from 'react';
import {
    Router,
    Route
} from 'react-router';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { browerHistory } from '../../utils/history';
import { Bussiness1 } from '../../components/Business1/Bussiness1.component';
import { AuthorizeRoute } from '../Auth/Authorize.component';
import { Login } from '../Login/Login.component';

/**
 * App路由
 * @param {object} props
 * @param {object} props.store redux store
*/
export const App = props => {
    return (
        <LocaleProvider>
            <Provider store={props.store}>
                <Router history={browerHistory}>
                    {/* 授权验证 */}
                    <AuthorizeRoute exact path='/' component={Bussiness1} />
                    <Route path='/login' component={Login} />
                </Router>
            </Provider>
        </LocaleProvider>
    )
}

export default App;
