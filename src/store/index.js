import { combineReducers } from 'redux';
import account from './account.store';

const reducer = {
    account,
};

export default combineReducers(reducer);
