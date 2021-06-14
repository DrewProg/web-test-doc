import {$authHost, $host} from './index';
import jwt_decode from 'jwt-decode';

export const signUp = async (nickname, password) => {
    const {data} = await $host.post('api/user/signUp', {nickname, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const signIn = async (nickname, password) => {
    const {data} = await $host.post('api/user/signIn', {nickname, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.post('api/user/auth');
    localStorage.setItem('token', data.token);
    return data;
}