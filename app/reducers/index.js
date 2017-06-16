import { combineReducers } from 'redux-immutable';

import dataReducer from './data';

export default function createReducer() {
    return combineReducers({
        data: dataReducer,
    });
}
