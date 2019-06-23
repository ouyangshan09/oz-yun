import {
    createAction as createStandAction,
    handleActions as handleStandActions,
} from 'redux-actions';
import { isFunction } from 'lodash';
import { fromJS } from 'immutable';

const defaultPayloadCreator = (...args) => fromJS(...args);

/** 创建Action过程封装 */
export const createAction = (type, payloadCreator, metaCreator) => {
    payloadCreator = isFunction(payloadCreator) ? payloadCreator : defaultPayloadCreator;
    return createStandAction(type, payloadCreator, metaCreator);
}

/** 处理Action过程封装 */
export const handleActions = (hanlders, initialState, option) => {
    if (isFunction(initialState)) {
        initialState = initialState();
    } else {
        initialState = fromJS(initialState);
    }
    return handleStandActions(hanlders, initialState, option);
}
