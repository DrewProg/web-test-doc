import {$authHost, $host} from './index';

export const createDocset = async (docset) => {
    const {data} = await $authHost.post('api/docset', {docset});
    return data;
}

export const fetchDocsets = async () => {
    const {data} = await $host.get('api/docset');
    return data;
}

export const fetchOneDocset = async () => {
    const {data} = await $host.get('api/project');
    return data;
}