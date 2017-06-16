
import { getCookieValue } from './utils/cookie';
import { TOKEN_COOKIE_NAME } from './constants/tokens';

function isLogged() {
    return !!getCookieValue(TOKEN_COOKIE_NAME);
}

export default {
    isLogged,
};
