import { handleActions } from '../utils/actionUtil';
import {
    LOGIN,
} from '../actions';

const initialState = {
    user: {},
    expireDate: null,
    token: null,
    isPendding: true,
    isLogin: false,
};

const handlers = {
    [LOGIN]: {
        next (state, action) {
            return state;
        },
        throw (state, action) {
            return state;
        }
    },
};

const account = handleActions(
    handlers,
    initialState,
);

export default account;