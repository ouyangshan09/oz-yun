import './Login.scss';
import React from 'react';

const LoginComponent = React.lazy(() => import(/* webpackChunkName: "LoginForm" */ '../../components/LoginForm/LoginForm.component'));

/**
 * @param {object} props
 * @param {object} props.history
 * @param {object} props.location
 * @param {object} props.match
*/
export const Login = props => {
    return (
        <React.Suspense fallback={() => <div>loading</div>}>
            <LoginComponent {...props} />
        </React.Suspense>
    )
}

export default Login;
