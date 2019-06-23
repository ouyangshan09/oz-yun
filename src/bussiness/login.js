import request from '../utils/http/request';

export const login = form => {
    return async dispacth => {
        try {
            const data = await request.post('/api/auth/login', form);
            console.log('data:', data);
        } catch (e) {
            //
        }
    }
}