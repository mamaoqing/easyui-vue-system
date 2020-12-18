import request from '../util/request';
export const listMenu = query => {
    return request({
        url: '/api/menu/get',
        method: 'get',
        headers :{
            "Authentication-Token":"4428c9d2-0ce3-402a-8725-2df53c2d7f1e:mmq"
        }
    });
};
export const getMenuListUser = query => {
    return request({
        url: '/api/menu/getMenuListUser',
        method: 'get',
        params:query,
        headers :{
            "Authentication-Token":"4428c9d2-0ce3-402a-8725-2df53c2d7f1e:mmq"
        }
    });
};