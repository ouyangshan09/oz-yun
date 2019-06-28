declare module '@/actions' {
    /** 登录 */
    export const LOGIN: (...args: Array<any>) => any;
    export const LOGOUT: (...args: Array<any>) => any;
    export const GET_USER: (...args: Array<any>) => any;
    export const UPDATE_USER: (...args: Array<any>) => any;
}

declare module '@/bussiness/login' {
    export const login: Function;
}

declare module '@/utils' {
    //
}
