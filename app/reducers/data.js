import { fromJS } from 'immutable';
import { setCookieValue, clearCookie } from '../utils/cookie';
import {
    TOKEN_COOKIE_NAME,
    USER_COOKIE_NAME,
    TOKEN_EXPIRATION_TIME_SECONDS,
} from '../constants/tokens';
import {
    LOGIN,
    LOGOUT,
  } from '../constants/actions';

const defaultState = {};

const defaultAction = {
    type: 'DEFAULT',
};

export default function dataReducer(state = defaultState, action = defaultAction) {
    switch (action.type) {

    case LOGIN:
        setCookieValue(TOKEN_COOKIE_NAME, fromJS(action.payload.token), { maxAge: TOKEN_EXPIRATION_TIME_SECONDS });
        setCookieValue(USER_COOKIE_NAME, fromJS(action.payload.user.username), { maxAge: TOKEN_EXPIRATION_TIME_SECONDS });
        return state.set('Auth', fromJS(action.payload.auth));

    case LOGOUT:
        clearCookie();
        return state.set('Auth', false);

    default:
        return state;

    }
}
