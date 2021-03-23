import _ from 'lodash';
import moment from 'moment';
import axios, { AxiosResponse, AxiosError } from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

import { ApiConstants } from 'constants/api-constants';
// import AuthService from './AuthService';
// import ErrorService from './ErrorService';
// import Helpers from 'utils/Helpers';

export const instance = axios.create({
    baseURL: ApiConstants.BASE_URL,
    withCredentials: false,
    adapter: httpAdapter,
});

export function formatUrl(path) {
    if (path.startsWith('http') || path.startsWith('https')) {
        return path;
    }
}

let errorHandler = (err, request) => {
    if (err.response) {
        err.status = err.response.status;
    }

    if (err.status === 401 && (!request || !request.url.includes('/login'))) {
        /*AuthService.setAuthToken(null).then(() => {
            window.location.href = '/login?autoLogout=true';
        });*/
    }

    ErrorService.capture(err, { err });
    return err;
};

//request interceptor
// instance.interceptors.request.use();

class ApiService {

    // #GET Request
    get(path, { params = {}, headers = {} } = {}) {
        return new Promise((resolve, reject) => {
            instance
                .get(formatUrl(path), {
                    headers,
                    params,
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => reject(err));
        });
    };

    // #POST Request
    post(path, { params = {}, data = {}, headers = {} } = {}) {
        return new Promise((resolve, reject) => {
            instance
                .post(formatUrl(path), data, {
                    headers,
                    params,
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => reject(err));
        });
    }

    // #PUT Request
    put(path, { params = {}, data = {}, headers = {} } = {}) {
        return new Promise((resolve, reject) => {
            instance
                .put(formatUrl(path), data, {
                    headers,
                    params,
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => reject(err));
        });
    }

    // #DELETE Request
    del(path, { params = {}, headers = {} } = {}) {
        return new Promise((resolve, reject) => {
            instance
                .delete(formatUrl(path), {
                    headers,
                    params,
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => reject(err));
        });
    }
};


export default new ApiService();