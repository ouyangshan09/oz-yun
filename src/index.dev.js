import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { App } from './routes/App/App.component';
import devStore from './store';

const composeEnhancers = composeWithDevTools({
    // 可配置
});

const middleware = [thunk];

const configureStore = (preloadedState = {}) => {
    const store = createStore(
        devStore,
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middleware)
        ),
    );

    if (module.hot) {
        module.hot.accept('./store', () => {
            store.replaceReducer(devStore);
        })
    }

    return store;
}

const store = configureStore();

const render = Component => {
    ReactDom.render(
        <Component store={store} />,
        document.getElementById('root'),
    )
}

render(hot(App));

if (module.hot) {
    module.hot.accept('./routes/App/App.component.jsx', () => {
        render(hot(App));
    });
}
