import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createHashHistory as createHistory } from 'history';
import rootReducer from 'redux/reducers/rootReducer';
import sagas from 'sagas/rootSaga';

export const history = createHistory({ forceRefresh: true });

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [sagaMiddleware, reactRouterMiddleware];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    )

    sagaMiddleware.run(sagas)

    return { store };

}