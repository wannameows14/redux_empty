import _ from 'lodash';
import { fork } from 'redux-saga/effects';

import loginSaga from './login';

export default function* sagas() {
    yield _.map([
        loginSaga,
    ], fork);
}
