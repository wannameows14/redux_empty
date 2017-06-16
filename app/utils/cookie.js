import cookie from 'cookie';
import _ from 'lodash';

export function getCookieValue(key) {
    const cookieObj = cookie.parse(document.cookie);
    return _.get(cookieObj, key, null);
}

export function setCookieValue(key, value, options = {}) {
    document.cookie = `${cookie.serialize(key, value, options)};`;
}

export function clearCookie() {
    document.cookie
        .split(';')
        .forEach(
            (currentCookie) => {
                document.cookie = currentCookie
                    .replace(/^ +/, '')
                    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
            }
        );
}
