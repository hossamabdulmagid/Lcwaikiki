import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// Redux Sagas fjrst thing
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
// Redux Sagas second thing

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


// how to hide action with state in console.log in deplyment app.


if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// Redux Sagas three thing

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };