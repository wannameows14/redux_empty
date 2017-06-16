import _ from 'lodash';
import { HOST } from './../api.config.js';
import { getCookieValue } from './cookie';
import { TOKEN_COOKIE_NAME } from '../constants/tokens';

function catchSectionFn(err) {
    console.log('error while fetching: ', err);
}

function getHeaders(customHeaders) {
    const apiToken = getCookieValue(TOKEN_COOKIE_NAME);
    if (customHeaders) {
        return _.assign({}, customHeaders, {
            Authorization: `JWT ${apiToken}`,
        });
    }

    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `JWT ${apiToken}`,
    };
}

function get(url, customHeaders) {
    const headers = getHeaders(customHeaders);
    return fetch(`${HOST}${url}`, {
        headers,
        method: 'GET',
    })
    .then((res) => res.json())
    .catch(catchSectionFn);
}

function post(url, body, customHeaders) {
    const headers = getHeaders(customHeaders);
    return fetch(`${HOST}${url}`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .catch(catchSectionFn);
}

function login(url, body) {
    return fetch(`${HOST}${url}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .catch(catchSectionFn);
}

export default {
    get,
    post,
    login,
};
