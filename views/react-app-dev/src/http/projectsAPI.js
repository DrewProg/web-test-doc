import {$authHost, $host} from './index';
import jwt_decode from 'jwt-decode';

export const createProject = async (project) => {
    const {data} = await $authHost.post('api/project', {project});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const fetchProject = async () => {
    const {data} = await $host.get('api/project');
    return data;
}

export const fetchOneProject = async (id) => {
    const {data} = await $host.get('api/project' + id);
    return data;
}