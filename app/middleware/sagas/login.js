import { takeEvery, put, cancel, call } from 'redux-saga/effects';
import { LOGIN_SAGA, LOGIN } from '../../constants/actions';
import request from '../../utils/request';
const parallelFetch = null;

function* loginFunc({ username, password }) {
    const url = '/api/users/login/';
    try {
        const resp = yield call(request.login, url, { username, password });
        if (!resp) return;
        const { token, user } = resp;
        yield put({
            type: LOGIN,
            payload: {
                auth: true,
                token,
                user,
            },
        });
    } catch (e) {
        console.log('Login fail. ', e);
        yield cancel(parallelFetch);
    }
}

export default function* loginSaga() {
    yield takeEvery(LOGIN_SAGA, loginFunc);
}
