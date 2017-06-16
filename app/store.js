import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import initialState from './reduxInitialStore';
import sagas from './middleware/sagas';

export default function configureStore() {
    const preloadedState = fromJS(initialState);
    const composeEnhancers =
        process.env.NODE_ENV === 'production' ?
        // eslint-disable-next-line
        compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const saga = createSagaMiddleware();
    const middlewares = [saga];
    const store = createStore(
        createReducer(),
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );
    saga.run(sagas);
    return store;
}
