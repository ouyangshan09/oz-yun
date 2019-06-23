import { createAction } from 'redux-actions';

export const LOGIN = createAction('LOGIN', null, () => ({_meta: '登录业务'}));
export const LOGOUT = createAction('LOGOUT', null, () => ({_meta: '登出业务'}));
export const GET_USER = createAction('GET_USER', null, () => ({_meta: '查询用户信息'}));
export const UPDATE_USER = createAction('UPDATE_USER', null, () => ({_meta: '更新用户信息'}));